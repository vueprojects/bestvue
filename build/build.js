// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
var childProcess = require('child_process')
var exec = childProcess.exec
// var s3Upload = require('./s3Upload')
const gulp = require('gulp')
const zip = require('gulp-zip')
process.env.NODE_ENV = 'production'
var target = process.env.TARGET
var STAGE = process.env.STAGE
var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    "  Opening index.html over file:// won't work.\n"
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(
  config.build.assetsRoot,
  config.build.assetsSubDirectory
)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n'
  )
  const zipFilesRoot = path.join(config.build.assetsRoot, '/**/*.*')
  const time = Date.now()
  if (STAGE !== 'production' && process.platform === 'linux') {
    console.log('begin upload s3')
    var rm = 'aws s3 rm s3://dev-uop-wx.opg.cn/' +
      target +
      '/ --recursive --region cn-north-1'
    var copy = 'aws s3 cp ./dist/' +
      target +
      ' s3://dev-uop-wx.opg.cn/' +
      target +
      '/ --recursive --region cn-north-1'
    exec(rm, function (err, stdout, stderr) {
      if (err) {
        console.log(err)
        process.exit()
      } else {
        exec(copy, function (err, stdout, stderr) {
          if (err) {
            console.log(err)
            process.exit()
          } else {
            console.log('s3 upload 成功了！')
          }
        })
      }
    })
    // s3Upload(config.build.assetsRoot, config.build.distRoot, target)
  }
  if (STAGE === 'production') {
    let buildZipProcess = gulp
      .src(zipFilesRoot)
      .pipe(zip(target + '_' + time + '.zip'))
      .pipe(gulp.dest('dist/zipfiles'))
    buildZipProcess.on('end', () => {})
  }
})
