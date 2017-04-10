import {APPID, REDIRECT_URI, SCOPE, STATE} from './../config'
const Oauth2Url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=${STATE}#wechat_redirect`

const decode = decodeURIComponent
/**
 * 鉴权的状态信息 存放于sessionStorage里面
 * @param {Object} oauth2State
 */
function checkState (oauth2State) {
  // var oauth2State = sessionStorage.getItem('oauth2State')
  // oauth2State = JSON.parse(oauth2State || '{}')
  return oauth2State && oauth2State.openid
}
/**
 * 提取url里的query对象
 * @param {String} query
 */
function queryParse (query) {
  const res = {}

  query = query.trim().replace(/^(\?|#|&)/, '')

  if (!query) {
    return res
  }

  query.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=')
    const key = decode(parts.shift())
    const val = parts.length > 0 ? decode(parts.join('=')) : null
    if (res[key] === undefined) {
      res[key] = val
    } else if (Array.isArray(res[key])) {
      res[key].push(val)
    } else {
      res[key] = [res[key], val]
    }
  })

  return res
}
/**
 * 判断鉴权状态 return true 已经鉴权
 * return :
 * '01':刚才微信那里得到code
 * '02':已将从微信那鉴权并已使用code进入了正常流程了
 */
export default function () {
  // 鉴权信息都存在这个对象里面 全局对象 使用要小心点
  var oauth2State
  if (location.search.includes('code')) {

    const queryIndex = location.href.indexOf('?')
    if (queryIndex >= 0) {
      var query = location.href.slice(queryIndex + 1)
      query = queryParse(query)
    }
    oauth2State = {state: '01', queryCode: query.code};
    sessionStorage.setItem('oauth2State', JSON.stringify(oauth2State))
    return oauth2State
  }
  oauth2State = JSON.parse(sessionStorage.getItem('oauth2State') || '{}')
  if (checkState(oauth2State)) {
    oauth2State.state = '02'
    return oauth2State
  }
  window.location.href = Oauth2Url
  return false
}
export function redirect(){
  window.location.href = Oauth2Url
}