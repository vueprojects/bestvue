import Vue from 'vue'
import '../styles/common/baseFy.scss'
import '../routes/FF15/assets/css/ff15.scss'
import '../styles/common/js/rem.js'
import VueRouter from 'vue-router'
import router from './../routes/FF15/index'
import store from './../store/ff15'
import {loadingPlugin, toastPlugin, weixinPlugin} from './../plugins'
import {oauth2, wexinJsSdk} from './../servers'
import reqData from './../models/ff15/reqData'
Vue.use(loadingPlugin)
Vue.use(toastPlugin)
Vue.use(VueRouter)
Vue.use(weixinPlugin)
reqData
  .req({
    apiName: 'jssdkconfig',
    params: {
      url: location.href.split('#')[0]
    }
  })
  .then(function (res) {
    wexinJsSdk(res.data)
  })
if (__STAGE__ !== 'dev') {
}
var hasCome = false
router.beforeEach((to, from, next) => {
  // debugger;
  var path = to.path
  // 微信鉴权
  if (path === '/' || path === 'index') {
    if (__STAGE__ !== 'dev') {
      if (!oauth2()) {
        return
      }
    }
  }
  if (!hasCome && path !== '/') {
    next('/')
  } else {
    next()
  }
  hasCome = true
})

new Vue({
  router,
  store
}).$mount('#app')
