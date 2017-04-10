import axios from 'axios'
import _ from 'lodash'
import test from './testData'
import axiosConfig from './../axiosConfig.js'

const $ajax = axios.create(axiosConfig)
const requestApi = {
  test: {
    url: '/test/home',
    method: 'post',
    params: {
      tparams: 'params'
    }
  },
  fromScene: {
    url: '/test/from',
    method: 'post',
    params: {}
  },
  sendAnswer: {
    url: '/activities-service/questionnaire',
    method: 'post',
    params: {}
  },
  addressMessage: {
    url: '/activities-service/luckydraw/address',
    method: 'put'
  },
  // 获取地址信息
  getAddressMessage: {
    url: '/activities-service/luckydraw/getLuckyDrawRecord',
    method: 'get'
  },
  homeServer: {
    url: '/activities-service/activities/states',
    method: 'get'
  },
  // 获取验证码
  registerGetCode: {
    url: 'member-service/passport/codes/phone-uuid',
    method: 'get'
  },
  // register submit
  registerSubmit: {
    url: '/member-service/passport/binding/phone-uuid',
    method: 'get'
  },
  // 点击获取奖品
  getAward: {
    url: '/activities-service/luckydraw',
    method: 'get'
  },
  // 获取仓库信息
  getQuestionsPrize: {
    url: '/activities-service/questionnaire/prize',
    method: 'get'
  },
  // 请求jssdkconfig
  jssdkconfig: {
    baseURL: 'http://pathfinder.quanmar.com/',
    url: '/jssdkconfig',
    method: 'post',
    params: {
      index: 1
    }
  }
}
function getReqObj (p) {
  var req_obj = requestApi[p.apiName]
  req_obj = _.merge({}, req_obj, p)
  if (req_obj.method === 'post') {
    req_obj.data = _.merge({}, req_obj.data, req_obj.params)
    delete req_obj.params
  }
  return req_obj
}

export default {
  req: function (p) {
    const req_obj = getReqObj(p)
    if (__STAGE__ == 'dev') {
      req_obj.apiName = p.apiName
      return test(req_obj)
    }
    delete req_obj.apiName
    return $ajax(req_obj)
  }
}
