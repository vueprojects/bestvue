//为GIO埋点demo提供服务端数据支持
var appData = require('../../routes/gio/data/data.json');

const testData={
	test:{
		test:'这个是测试数据'
	},
	register:{
		code: 200,
		message: '请求成功',
		data:{}
	},
	gio:{
		code: 200,
		data: appData.activities
	}
}
var response = {
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {}
}
export default function (p) {
  return new Promise(function (resolve, reject) {
    setTimeout(
      function () {
        response.data = testData[p.apiName]
        response.config = p
        resolve(response)
      },
      3000
    )
  })
}