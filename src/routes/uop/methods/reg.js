export default {
  data () {
    return {
      'userphone': '',
      'validcode': '',
      'isErr': false,
      'codeText': ' 获取验证码 ',
      'timer': 60,
      'isShowErr': false,
      'errText': '手机号码错误',
      'isDisable': true,
      'isSubmit': true
    }
  },
  methods: {
    // 获取焦点
    onFocus (obj) {
      obj.currentTarget.className = obj.currentTarget.className.replace(/ error/, '')
      this.isShowErr = false
    },
    // 失去焦点
    onBlur (obj) {
      let objClass = obj.currentTarget.className
      const isTelInput = objClass.indexOf('tel_input')

      this.isEmptyInput(obj);

      if (isTelInput !== -1) {
        this.checkMobile(this.userphone, obj)
      } else {
        this.isValidCode(this.validcode, obj)
      }
    },
    onKeyup (obj) {
      this.isEmptyInput(obj);
      if (this.userphone.length === 11) {
        this.checkMobile(this.userphone, obj)
      }
      if (this.validcode.length === 6) {
        this.isValidCode(this.validcode, obj)
        // this.isSubmit = false;
      }
    },
    // 判断是否为手机号
    checkMobile (objMobile, obj) {
      let objClass = obj.currentTarget.className
      let delErr = objClass.replace(/ error/, '')
      let isError = objClass.indexOf('error')
      const regMobile = /^1(3[0-9]|4[579]|5[0-35-9]|8[0-9]|7[0135-8])[0-9]{8}$/
      const mflag = regMobile.test(objMobile)
      if (!mflag) {
        this.isDisable = true
        this.isShowErr = true
        this.errText = '手机号码错误'
        this.isSubmit = true
        if (isError === -1) {
          obj.currentTarget.className += ' error'
        }
        return false
      } else {
        this.isDisable = false
        this.isShowErr = false
        obj.currentTarget.className = delErr
      }
    },
    // 设置验证码为4-6个数字或字母
    isValidCode (code, obj) {
      const regCode = /^\d{6}$/
      const codeFlag = regCode.test(code)
      if (!codeFlag) {
        this.isShowErr = true
        this.errText = '验证码错误'
        this.isSubmit = true
      } else {
        this.isShowErr = false
        this.isSubmit = false
      }
    },
    // 判断输入框是否为空
    isEmptyInput (obj) {
      let objClassName = obj.currentTarget.className
      let objVal = obj.currentTarget.value.trim()
      // let delClassHasinput = objClassName.replace(/ has_input/, '')
      // let isHasVal = objClassName.indexOf('has_input')
      if (objVal == '') {
        this.isErr = false
        obj.currentTarget.value = ''
        obj.currentTarget.className = obj.currentTarget.className.replace(/ error/, '')

        // 若手机号输入框为空 验证码按钮隐藏
        if (objClassName.indexOf('tel_input') != -1) {
          this.isDisable = true
        }
      }
    },
    getCode () {
      if (this.timer === 0) {
        this.isDisable = false
        this.codeText = ' 重新获取验证码 '
        this.timer = 60
      } else {
        this.isDisable = true
        this.codeText = this.timer
        this.timer --
        setTimeout(() => {
          this.getCode()
        }, 1000)
      }
    }
  }

}
