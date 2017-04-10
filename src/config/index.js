import _ from 'lodash'

function Config () {
  var env = 'production'
  if (__STAGE__ === 'development' || __STAGE__ === 'dev') {
    env = 'development'
  }
  this.constants = projectConfig[env]
}

Config.prototype.getOpt = function (name) {
  return name ? this.constants[name] : null
}
Config.prototype.setOpt = function (name, value) {
  name ? this.constants[name] = value : null
  return this
}
Config.prototype.setEnv = function (env) {
  var opts = projectConfig[env]
  if (opts) {
    _.merge(this.constants, opts)
  }
  return this
}
const projectConfig = {
  production: {
    baseURL: 'https://uop-api.opg.cn/'
  },
  development: {
    baseURL: 'https://dev-uop-api.opg.cn/'
    // },
    // dev: {
    //     baseURL: 'https://localhost:3000/'
    // },
  }
}

var ProxyConfig = (function () {
  var instance
  return function () {
    if (!instance) {
      instance = new Config()
    }
    return instance
  }
})()
/**
 * 微信网页授权
 */
const Oauth2Config = {
  //   appid: 'wx1af36eaa7d6f98c3',
  appid: 'wxa1cfabd68e2c785c',
  redirect_uri: 'http://dev-uop-wx.opg.cn/uop/index.html',
//   scope: 'snsapi_base',
  scope: 'snsapi_userinfo',
  state: '123321'
}
export default new ProxyConfig()
export const APPID = Oauth2Config.appid
export const REDIRECT_URI = Oauth2Config.redirect_uri
export const SCOPE = Oauth2Config.scope
export const STATE = Oauth2Config.state

