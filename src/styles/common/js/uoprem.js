;
(function (win, doc) {
  /**
   * 一般UA
   * User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25 
   *
   * Done
   * 1. ios, HTML.fl-ios
   * 2. ios version > 8, HTML.fl-hairlines
   */
  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
  var timer = null;
  var dpr = 0;
  var scale = 0;

  var ua = navigator.userAgent.toLowerCase();
  var appv = navigator.appVersion;
  var docEl = doc.documentElement;
  var isIos = /ip(hone|od|ad)/i.test(ua);
  var devicePixelRatio = win.devicePixelRatio;

  var vArr, ver;

  if (isIos) {
    docEl.classList.add('uop-ios');
    vArr = appv.match(/OS (\d+)[_\.](?:\d+)[_\.]?(?:\d+)?/);
    ver = parseInt(vArr[1], 10);

    if (ver >= 8) {
      //解决视网膜屏border-1px bug
      docEl.classList.add("uop-hairlines");
    }

    if (devicePixelRatio >= 3) {
      dpr = 3;
    } else if (devicePixelRatio >= 2) {
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    docEl.classList.add('uop-android');
    dpr = 1;
  }

  docEl.setAttribute('data-dpr', dpr);

  function setFontSize() {
    let remwidth = 750;
    let winWidth = docEl.getBoundingClientRect().width;

    docEl.setAttribute('data-screenwidth', winWidth);
    docEl.style.fontSize = (winWidth / remwidth) * 100 + 'px';
  }
  if (!doc.addEventListener) return;
  win.addEventListener(evt, function () {
    clearTimeout(timer);
    timer = setTimeout(setFontSize, 300);
  }, false);

  // 直接设定body基准为14px
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 14 + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = 14 + 'px';
    }, false);
  }

  setFontSize();

})(window, document);
