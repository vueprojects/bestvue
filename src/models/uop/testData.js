const testData = {
  //全部订单列表
  allIndent: {
    code: '200',
    message: '请求成功',
    data: [
      {
        title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
        count: '1',
        time: '2017-2-14',
        status: '00',
        detail: {
          title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
          count: '1',
          time: '2017-2-14',
          status: '00',
          id: '123',
          code: '1231-213-12-3123'
        }
      },
      {
        title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
        count: '2',
        time: '2017-2-14',
        status: '01',
        detail: {
          title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
          count: '2',
          time: '2017-2-14',
          status: '01',
          id: '123',
          code: '1231-213-12-3123'
        }
      },
      {
        title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
        count: '3',
        time: '2017-2-14',
        status: '01',
        detail: {
          title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
          count: '3',
          time: '2017-2-14',
          status: '02',
          id: '456',
          code: '1231-213-12-3123'
        }
      },
      {
        title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
        count: '4',
        time: '2017-2-14',
        status: '01',
        detail: {
          title: '2.14情人节▪玫瑰情人梦 经典情人节花礼',
          count: '4',
          time: '2017-2-14',
          status: '03',
          id: '789',
          code: '1231-213-12-3123'
        }
      }
    ]
  },

  //detail
  activityDetail: {
    '123': {
      code: '200',
      message: '请求成功',
      data: {
        title: '我们之后 / After Us',
        price: '20-488'
      }
    },
    '456': {
      code: '200',
      message: '请求成功',
      data: {
        title: '我们之前 / After Us',
        price: '332-12'
      }
    },
    '789': {
      code: '200',
      message: '请求成功',
      data: {
        title: '我们了了 / After Us',
        price: '50-900'
      }
    }
  },

  //homeServer
  homeServer: {
    code: '200',
    message: '请求成功',
    data: {
      'registerState': '01',    //00 注册 01 未注册
      'followState': '00',      //00 关注 01 未关注
      'openid': '12312312454',             //openid
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

        if(p.apiName === 'activityDetail'){
          response.data = testData[p.apiName][p.params.id]
        }
        response.config = p
        resolve(response)
      },
      3000
    )
  })
}
