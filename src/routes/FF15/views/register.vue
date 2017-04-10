<template>
  <div class="reg">
    <p class="head_img"><img :src="url"></p>

    <div class="pos_r">
     <input class="input_block icon_input tel" type="text"  pattern="[0-9]*" maxlength="11" oninput="if(value.length>5)value=value.slice(0,11)" placeholder="手机号码" v-model.trim="userphone" @focus="onFocus($event)" @blur="onBlur($event)" @keyup="onKeyup($event)" />
      <span class="err_tip tel_err" v-if="isErrTel">{{telErr}}</span>
    </div>

    <div class="pos_r mt15">
      <input class="input_block icon_input vcode" type="text"  pattern="[0-9]*" placeholder="验证码" v-model.trim="validcode" @focus="onFocus($event)" @blur="onBlur($event)" @keyup="onKeyup($event)" maxlength="6">
      <span class="err_tip code_err" v-if="isErrCode">{{codeErr}}</span>
      <!-- <div class="get_code_btn" v-if="isShowCodeBtn" @click="getCode">{{codeText}}</div> -->
      <input type="button" class="get_code_btn" :class="{disable:codeBtnDisabled}" v-model="codeText" name="" v-if="isShowCodeBtn" :disabled="codeBtnDisabled" @click="getCodeData($event)" />
    </div>

    <div class="text_center">
      <input type="button" class="submit_btn" :class="{btn_newchapter_disable:isDisable,btn_newchapter:isSubmit}" @click="regSubmit" :disabled="isDisable">
    </div>
    <marquee-list></marquee-list>
  </div>
</template>

<script>
import MarqueeList from '../components/marquee'
import RegJs from '../methods/reg'
import ReqData from '../../../models/ff15/reqData'

export default {
  components: {
    MarqueeList
  },
  data () {
    return {
      // 'openid':'orCI-wwRn3c2RnEZORh40iGTugNs',
      'openid':window.sessionStorage.getItem('openId'),
    	'bgImg': require('../assets/imgs/bg_wo_character.png'),
      'url': require('../assets/imgs/avatar.png'),
      // 'verifCode':''
    }
  },
  mixins:[RegJs],
  mounted (){
    this.$el.parentElement.parentNode.style.background  = 'url( '+ this.bgImg + ')';
    this.$el.parentElement.parentNode.style.backgroundSize = 'cover';
  },
  methods: {
    getCodeData(){
      let vue = this;
      setTimeout(() => {
        vue.$uop.loading.hide()
      }, 1000)

      ReqData.req({
        apiName: 'registerGetCode',
        params:{
          'phoneNo':String(this.userphone),
          'openId':this.openid
        }
      }).then((res)=>{
        res = JSON.parse(res.data);
        let [code,msg,data] = [res.code,res.message,res.data];
        this.$uop.loading.hide();
        if(code == "200"){
          this.getCode();
        }else{
          this.$uop.toast.show({
              type:'text',
              text: msg
          })
        }
      }).catch((err) => {
        console.log(err);
          this.$uop.loading.hide();
          this.$uop.toast.show({
            type:'text',
            text: '系统异常'
          })
      })
    },
    regSubmit () {
      let vue = this;
      this.$uop.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        vue.$uop.loading.hide()
      }, 1000)

      ReqData.req({
        apiName:'registerSubmit',
        params:{
          'phoneNo':this.userphone,
          'verifyCode':this.validcode,
          'openId':this.openid
        }
      }).then((res) => {
        res = JSON.parse(res.data);
        console.log(res);
        let [code,msg,data] = [res.code,res.message,res.data];

        // debugger;
        if(code == "200" && this.isSubmit){
          this.$router.replace({path:'/toget',query:{paramter:this.$route.query.paramter}});
        }else{
          this.$uop.toast.show({
            type:'text',
            text: msg
          })
        }

      })
      .catch((err) => {
        console.log(err);
        this.$uop.loading.hide();
        this.$uop.toast.show({
          type:'text',
          text: '系统异常'
        })
      })
    }
  }
}
</script>
