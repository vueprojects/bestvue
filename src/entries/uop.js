import Vue from 'vue'
import filters from '../filters/uop'
import '../styles/common/baseFy.scss'
import '../routes/uop/assets/css/uop.scss'
import '../styles/common/js/uoprem.js'
import VueRouter from 'vue-router'
import router from './../routes/uop/index.js'
import store from './../store/uop'
import {loadingPlugin, toastPlugin, weixinPlugin} from './../plugins'
import {oauth2, wexinJsSdk, redirect} from './../servers'
import reqData from './../models/uop/reqData'
import { updateConfig } from "./../models/uop/reqData"

Vue.use(loadingPlugin)
Vue.use(toastPlugin)
Vue.use(VueRouter)
Vue.use(weixinPlugin)

var hasCome = false;
router.beforeEach((to, from, next) => {
  // debugger;
  var path = to.path
  // 微信鉴权
  if (path === '/' || path === 'index') {
    if (__STAGE__ !== 'dev') {
      if (!oauth2()) {
        return
      }else{
        reqData.req({
          apiName: 'jssdkconfig',
          params: {
            currentUrl: location.href.split('#')[0]
          }
        }).then(function (res) {
          wexinJsSdk(res.data.data)
        })
      }
    }
  }
  if (!hasCome && path !== '/') {
    next('/')
  } else {
    next()
  }
  hasCome = true;
  window.scroll(0, 0);
})

// 加载过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

//gio jssdk
let _vds = _vds || [];
window._vds = _vds;
(function(){
  let code = __STAGE__ === 'development' ? '8180e8ae93ab628b' : 'b40cedd0227f3316'
  _vds.push(['setAccountId', code]);
  (function() {
    var vds = document.createElement('script');
    vds.type='text/javascript';
    vds.async = true;
    vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(vds, s);
  })();
})();

//修改headers
// (function(){
//   function getQueryString(name) { 
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
//     var r = window.location.search.substr(1).match(reg); 
//     if (r != null) return unescape(r[2]); return null; 
//   } 
//   reqData.req({
//     url: '/member-service/members/state/' + getQueryString('code')
//   }).then(function(res){
//     let data = res.data.data;
//     let code = res.data.code;
//     if( code === '200' && data.openId){
//       if(data.openId){
//         updateConfig({'headers': {
//           openid: data.openId,
//           Member_Uuid: data.id,
//           Poss_Uuid: data.memberUuid
//         }});
//         localStorage.setItem('userStatus', JSON.stringify({
//           'registerState': data.registerState,
//           'followState': data.followState,
//           'openid': data.openId,
//         }))
//       }
//     } else {
//       redirect();
//     }
//   }).catch(function(err){
//     console.log(err);
//   })
// })()


//start
new Vue({
  router,
  store
}).$mount('#app')
