import axios from 'axios'
import _ from 'lodash'
import test from './testData'
import axiosConfig from './../axiosConfig.js'
let $ajax = axios.create(axiosConfig)
const requestApi = {
  // 全部订单列表
  allIndent: {
    url: '/order-service/orders',
    method: 'get',
    params: {}
  },
  // 请求状态
  homeServer: {
    url: '/member-service/members/state/',
    method: 'get'
  },

  // 活动详情
  activityDetail: {
    url: '/item-service/item/getItemDetailByItemID/',
    method: 'get'
  },

  // 获取验证码
  regCodeData: {
    url: '/member-service/passport/codes/phone-uuid',
    method: 'get'
  },

  // register submit
  regSubmit: {
    url: '/member-service/passport/binding/phone-uuid',
    method: 'get'
  },

  // 会员中心个人信息
  userInfo: {
    url: '/member-service/members/openid',
    method: 'get',
    params: {}
  },

  // 会员中心订单信息
  userOrder: {
    url: '/order-service/orders',
    method: 'get',
    params: {}
  },

  // 积分管理页面
  integralManager: {
    url: '/member-service/point/log/openid',
    method: 'get',
    params: {}
  },

  // 地址管理
  getAddress: {
    url: '/member-service/address/openid',
    method: 'get',
    params: {}
  },

  // 设为默认
  setDefault: {
    url: '/member-service/address/default',
    method: 'put',
    params: {}
  },
  // 新增地址 or 删除地址 or 编辑地址
  addAddress: {
    url: '/member-service/address',
    method: 'post',
    params: {}
  },
  // 是否已报名
  isSignup: {
    // url: '/order-service/participates/member',
    method: 'get'
  },
  // 报名
  signupData: {
    // url: 'http://10.61.8.61:10002/item-service/item/getEnrollInfoByItemID',
    url: '/item-service/item/getEnrollInfoByItemID',
    method: 'get'
  },
  // 提交报名
  submitSignup: {
    // url: 'http://10.61.8.116:10002/order-service/participates',
    url: '/order-service/participates',
    method: 'post'
  },

  // 微信jssdk
  jssdkconfig: {
    url: '/weixin-api-service/wechat/jssdk?currentUrl=' +
      location.href.split('#')[0],
    method: 'get',
    params: {
      currentUrl: location.href.split('#')[0]
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
    // if (__STAGE__ === 'dev') {
    //   req_obj.apiName = p.apiName
    //   return test(req_obj)
    // }
    delete req_obj.apiName
    return $ajax(req_obj)
  }
}

export function updateConfig (opts) {
  _.merge($ajax.defaults, opts)
}
