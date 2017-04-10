const testData = {
  test: {
    test: '这个是测试数据'
  },

  addressMessage: {
    code: '200',
    message: '请求成功',
    data: {}
  },

  award: {
    code: '200',
    message: '请求成功',
    data: {
      present: '1'
    }
  },

  homeServer: {
    code: '200',
    message: '',
    data: {
      openId: null,
      paramter: null,
      registerState: '01',
      followState: '02',
      prizeState: '02',
      questionState: '02'
    }
  },
  fromScene: {
    code: '200',
    message: '请求成功',
    data: {
      from: Math.random() > 0.5 ? 'online' : 'offline'
    }
  },
  // 获取验证码
  registerGetCode: {
    code: '200',
    message: '请求成功了',
    data: {}
  },
  // register submit
  registerSubmit: {
    code: '200',
    message: '请求成功了',
    data: {}
  },
  getAward: {
    code: '200',
    message: '请求成功了',
    data: {
      prizeId: '001'
    }
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
