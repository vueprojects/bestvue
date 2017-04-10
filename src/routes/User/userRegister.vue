<template>
  <div>
    <group title="会员注册" class="weui-cells_form">
        <x-input title="" class="weui-vcode"  keyboard="number" novalidate required :max="11" is-type="china-mobile" name="mobile" ref="phone" v-model="userphone" placeholder="输入手机号码">
          <x-button slot="right" :type="type" mini @click.native="sendPhone" :disabled="disabled">{{timeMessage}}</x-button>
        </x-input>
        <x-input title="" v-model="code" class="weui-vcode" required novalidate :min="4" :max="4" placeholder="输入验证码" ref="phoneCode"></x-input>
      </group>
      <div class="box">
        <input type="checkbox" v-model="serverTerms" name=""> <span v-on:click="serverShow">《东方明珠服务条款》</span>
      </div>


      <x-dialog v-model="dialogShow" class="dialog-demo" :hideOnBlur="true">
        <p class="dialog-title">东方明珠服务条款</p>
        <div class="img-box">
           <p>上海东方明珠新媒体股份有限公司（股票代码：SH.600637）是上海广播电视台、上海文化广播影视集团有限公司（SMG）旗下统一的产业平台和资本平台。
东方明珠拥有国内最大的多渠道视频集成与分发平台及知名的文化旅游资源，为用户提供丰富多元、特色鲜明的视频内容服务及一流的视频购物、文化娱乐旅游、影视剧、数字营销及游戏等

传媒和娱乐产品。
东方明珠正致力于围绕用户数据化经营，提供优质产品体验，拓展线上线下渠道，加快成为国内领先的传媒娱乐创意者和提供商。</p>

        </div>
        <span class="vux-close" @click="dialogShow=false"></span>
      </x-dialog>


      <div class="user_btn">
        <x-button type="primary" action-type="button" @click.native="registerEnter">立即注册</x-button>
      </div>

      <notification :options.sync="options" :show.sync="showNotification" @my-event="hideNotice"></notification>

      <toast v-model="msgTip" type="text" class="pdlr10">{{ tipMsgTxt }}</toast>

    </div>
</template>
  
<script>

import { XInput, Group, XButton, Cell, Toast, XDialog } from 'vux'

import reqData from '../../models/test/reqData'

import Notification from '../../components/Notification.vue'


export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Toast,
    XDialog,
    Notification
  },
  data () {
    return {
      hideOnBlur: false,
      dialogShow: false,
      msgTip: false,
      tipMsgTxt:'',
      phoneCode: '',              //验证码
      code:'',
      phone: '',                  // 获取内置验证信息
      userphone: '',              // 获取手机号码
      disabled: false,            // 是否禁用发送验证码按钮
      timeMessage: '发送验证码', // 按钮文字说明
      type: 'primary',            // 按钮样式类型
      serverTerms: false,

      showNotification: false,
      options: {}
    }
  },

  mounted() {
    if(this.$store.state.countDown.time != 10){
      this.$store.commit('clearTime');
      this.sendPhone();
    }
  },
  methods: {
    sendPhone() {

        let baseParam = {
          apiName: 'sendCode',
          params:{
            phone: this.userphone,
            openId: 'abcdefg'
          }
        }

        if(this.$store.state.countDown.time == 10 && !this.$refs.phone.valid){
             this.showNotification = true;
             this.options = {
              autoClose: true,
              content: '手机格式不正确！'
             }
            return;
      }

      if(this.$refs.phone.valid){
        // this.$store.dispatch('sendCode', baseParam);
         var vue = this;

         reqData.req(baseParam).then(function(res){
            let data = JSON.parse(res.data);
            if(data.code === '200'){
                // debugger;
                vue.msgTip = true;
                vue.tipMsgTxt = data.message;
            }else{

            }
        }).catch(function(res){
            console.log(res);
        });
      }
       
      if(this.$store.state.countDown.time <= 10 && this.$store.state.countDown.time !=0 ){
       this.disabled = true;
      }

       this.timeMessage = this.$store.state.countDown.time + 's后重发';
       this.type = 'default';
        this.$store.state.countDown.downState = setInterval(() =>{
          this.timeLow();
        },1000);
       
        

    },
    timeLow() {
      if(this.$store.state.countDown.time != 0){
        this.disabled = true;
        // debugger;
        this.$store.commit('timesSub');
        this.timeMessage = this.$store.state.countDown.time + 's后重发';
      }else{

        this.timeMessage = '发送验证码';
        this.disabled = false;
        this.type = 'primary';
        // this.change();
        this.$store.commit('timesSave', {times : 10});
        this.$store.commit('clearTime');
      }
    },

    hideNotice(){

      this.showNotification = false;
      this.options = {};

    },

    registerEnter() {
      console.log(this.serverTerms)
      // debugger;
      if(!this.$refs.phone.valid){
           this.showNotification = true;
           this.options = {
            autoClose: true,
            content: '手机格式不正确！'
          }

          return;
      } 

      if(!this.$refs.phoneCode.valid){
           this.showNotification = true;
           this.options = {
            autoClose: true,
            content: '验证码格式不正确！'
          }
          return;
      }

      if(!this.serverTerms){
        this.showNotification = true;
           this.options = {
            autoClose: true,
            content: '请勾选服务条款！'
          }
          return;
      }

      let codeParam = {
        apiName: 'register',
        params:{
          phone: this.userphone,
          code: this.code,
          openId: 'abcde'
        }
      }


      var vue = this;

       reqData.req(codeParam).then(function(res){
          let data = JSON.parse(res.data);
          if(data.code === '200'){
              vue.msgTip = true;
              vue.tipMsgTxt = data.message;
              setTimeout(()=>{
                vue.$router.push('/vuxexp');
              },2000)
          }else{

          }
      }).catch(function(res){
          console.log(res);
      });

    },
    serverShow() {
      this.dialogShow = true;
    }
  }
}
</script>
<style scoped>
.box{
  padding: 10px 15px;
}
.box input{
  vertical-align: middle;
  margin-right: 5px;
}
.box span{
  text-decoration:underline;
  color: #666;
  font-size: 12px;
}
.user_btn{
  margin: 0 10px 0 10px;
  display: block;
}
.pdlr10{
  padding: 0 10px;
}
.dialog-demo{
  max-height: 90%;
}
.weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    padding: 10px;
    font-size: 12px;
    text-align: left;
    overflow-y: scroll;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>