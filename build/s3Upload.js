var fs = require('fs')
var path = require('path')
var AWS = require('aws-sdk')
AWS.config.update({region: 'cn-north-1'})
// 要上传的文件key-value
var uploadeObj = {}
var basePath
var s3Params = {}
var s3 = new AWS.S3({params: {Bucket: 'dev-uop-wx.opg.cn'}})
// var bucket = 'dev-uop-wx.opg.cn'
var delKey = 'ff15'
/**
 *
 * @param {*string path} dir 上传的目录
 * @param {*function} callback
 */
function travel (dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      // console.log(pathname)
      travel(pathname, callback)
    } else {
      callback(pathname)
    }
  })
}
/**
 *
 * @param {*string} pathname
 */
function installUploadObj (pathname) {
  var body = fs.createReadStream(pathname)
  pathname = path.relative(basePath, pathname)
  pathname = pathname.replace('\\', '/')
  uploadeObj[pathname] = body
}
/**
 * 上传到s3
 */
function uploadToS3 () {
  Object.keys(uploadeObj).forEach(function (key) {
    s3Params.Key = key
    s3Params.Body = uploadeObj[key]
    s3.upload(s3Params, function (err, data) {
      console.log(err, data)
    })
  })
}
/**
 *
 * @param {* int} code 错误码
 * @param {* string} message  错误信息
 */
function error (code, message) {
  var err = new Error(message)
  err.code = code
  return err
}
/**
 *
 * @param {*Object} err 错误对象
 */
function parseError (err) {
  if (!err) {
    return null
  }

  if (err.statusCode === 404) {
    return error('ENOENT')
  }

  return err
}

/**
 *
 * @param {* string} p 路径
 * @param {* function} cb  回调函数
 */
function delDir (p, cb) {
  s3.listObjects(
    {
      Prefix: p + '/'
    },
    function (err, data) {
      if (err) {
        cb(parseError(err))
      }
      if (data.Contents.length === 0) {
        return cb()
      }
      var keys = []
      for (var i = 0, length = data.Contents.length; i < length; i++) {
        keys.push({
          Key: data.Contents[i].Key
        })
      }
      s3.deleteObjects(
        {
          Delete: {
            Objects: keys
          }
        },
        function (err, data) {
          if (err) {
            cb(parseError(err))
          }
          cb(data)
        }
      )
    }
  )
}
/**
 *
 * @param {string } path 上传文件的根目录
 */
function upload (path, base, delPath) {
  delKey = delPath || delKey
  basePath = base || path
  travel(path, installUploadObj)
  delDir(delKey, function () {
    uploadToS3()
  })
}
module.exports = upload
