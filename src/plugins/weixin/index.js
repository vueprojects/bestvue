const wx = require('weixin-js-sdk')

const plugin = {
  install (Vue) {
    Vue.prototype.$uopweixn = wx
  },
  $uopWeixn: wx
}

export default plugin
export const install = plugin.install
