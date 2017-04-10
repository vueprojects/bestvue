import {weixinPlugin} from './../plugins'
export default function (wxCofing) {
  const wx = weixinPlugin.$uopWeixn
  wx.config({
    debug: wxCofing.debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: wxCofing.appId, // 必填，公众号的唯一标识
    timestamp: wxCofing.timestamp, // 必填，生成签名的时间戳
    nonceStr: wxCofing.nonceStr, // 必填，生成签名的随机串
    signature: wxCofing.signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
  wx.ready(() => {
    console.log('wechat ready')
    wx.onMenuShareAppMessage({
      title: '累死了', // 分享标题
      desc: '气！死！我！了！抽个XBOX怎么就这么难？？？你行你上',
      link: 'http://dev-uop-wx.opg.cn/ff15',
      imgUrl: 'http://dev-uop-wx.opg.cn/_common/imgs/share.jpg'
    })

    wx.onMenuShareTimeline({
      title: '累死啦', // 分享标题
      desc: '气！死！我！了！抽个XBOX怎么就这么难？？？你行你上',
      link: 'http://dev-uop-wx.opg.cn/ff15',
      imgUrl: 'http://dev-uop-wx.opg.cn/_common/imgs/share.jpg'
    })
  })
  wx.error(function (res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  })
}
