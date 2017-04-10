<template>
	<div id="address">
    <!-- header -->
    <div class="header">
      <div class="left">
        <img src="../assets/imgs/dia_character_1_big.png"/>
      </div>
      <div class="right">
        <img v-bind:src="img" class="previewer-demo-img" @click="show(index)">
        <previewer :list="list" ref="previewer" :options="options"></previewer>
      </div>
    </div>

    <!-- canvas -->
    <div class="canvas" id="address-canvas-box">
      <!-- <canvas id="address-canvas" width="100%" height="100%"></canvas> -->
      <canvas-box :canvasWH="canvasWH"></canvas-box>
    </div>

    <!-- input value -->
	  <div class="">
<!--       <div class="address-input-box" v-for="(item, index) in incoInput">
        <div class="address-input-icon">
          <img v-bind:src="item.img" v-show="!item.active"/>
          <img v-bind:src="item.imgActive" v-show="item.active"/>
        </div>
        <input v-bind:maxlength="item.length" v-bind:id="item.messageType" @blur="item.active = false" @focus="item.active = true" class="address-input" :class="{'address-input-active': item.active, 'no-bottom': index === incoInput.length - 1 }" type="text" v-bind:placeholder="item.type" @keyup="message(item.messageType)">
      </div> -->
<!--       <div class="submit-btn" v-show="!submitBtn">
        <img src="../assets/imgs/btn_confirm.png"/>
      </div>
      <div class="submit-btn" @click="submit" v-show="submitBtn">
        <img src="../assets/imgs/btn_confirm_press.png"/>
      </div> -->
      <div class="submit-btn" @click="submit" v-show="!hideBtn">
        <img src="../assets/imgs/btn_go.png"/>
      </div>
    </div>
	</div>
</template>
<script>
  import canvasBox from "../components/canvas";
  import testData from "../../../models/ff15/testData";
  import reqData from "../../../models/ff15/reqData";
  import { Previewer } from 'vux'

  const presentType = {
    '001' : '官方限量卫衣',
    '002' : '主题精美台历',
    '003' : 'XBOX主机游戏机',
    '004' : '游戏鼠标'
  }

  export default {
    components:{
      canvasBox,
      Previewer
    },
    data () {
      return {
        list: [{
          src: '',
          w: 600,
          h: 400
        }],
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        },
        bgImg: require('../assets/imgs/bg_wo_character.png'),
        bgImgH: 480,
        submitBtn: false,
        hideBtn: false,
        img:'',
        messages: {
          nameMessage: '',
          phoneMessage: '',
          addressMessage: ''
        },
        incoInput: [
          {
            img: require('../assets/imgs/ic_person_outline.png'),
            imgActive: require('../assets/imgs/ic_person_fill.png'),
            type: '姓名',
            active: false,
            messageType: 'nameMessage',
            length:10
          },
          {
            img: require('../assets/imgs/ic_phone_ioutline.png'),
            imgActive: require('../assets/imgs/ic_phone_fill.png'),
            type: '电话号码',
            active: false,
            messageType: 'phoneMessage',
            length:11
          },
          {
            img: require('../assets/imgs/ic_place_outline.png'),
            imgActive: require('../assets/imgs/ic_place_fill.png'),
            type: '地址',
            active: false,
            messageType: 'addressMessage',
            length:100
          }
        ],
        imgActiveIndex: null,
        canvasWH:{
          width: '',
          height: '',
          type: 'address',
          present: ''
        },
        canvasWH2:{
          width: '',
          height: '',
          type: 'successAddress',
          present: '',
          id: 'canvasBox'
        }
      }
    },
    mounted (){
      this.bgImgH = Number(document.documentElement.clientHeight);
      this.$el.parentElement.parentNode.style.background  = "url(" + this.bgImg + ")";
      this.$el.parentElement.parentNode.style.backgroundSize = "cover";

      this.img = require('../assets/imgs/' + this.$route.params.present + '.png');
      this.list[0].src = require('../assets/imgs/' + this.$route.params.present + '.png');

      let canvasBox = document.getElementById("address-canvas-box");
      let present = presentType[this.$route.params.present] ? presentType[this.$route.params.present] : this.$route.params.present;

      this.canvasWH = { 
        width: canvasBox.offsetWidth - 50, 
        height: canvasBox.offsetHeight, 
        present, 
        type: 'address',
        id: 'canvasBox'};

      if(this.$route.query.questionState){
        let query = this.$route.query.questionState;
        if(query != '02'){
          this.hideBtn = true;
        }
      }

      if(sessionStorage.getItem('questionState')){
        let query = sessionStorage.getItem('questionState');
        if(query != '02'){
          this.hideBtn = true;
        }
      }
    },
    methods:{
      submit(){
         this.$router.push({name: 'research', params:{ qid: 1 }, query:{paramter: this.$route.query.paramter}})

        // let message = {
        //   name: this.messages.nameMessage,
        //   phone: this.messages.phoneMessage,
        //   address: this.messages.addressMessage
        // }
        // if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(message.phone)){
        //     this.$uop.toast.show({
        //       type: 'text',
        //       text: '请填写正确的手机号',
        //       onShow () {
        //       },
        //       onHide () {
        //       }
        //     });
        //     return;
        // }

        // let _this = this;
        // this.$uop.loading.show({
        //   text: 'Loading'
        // })
        // reqData.req({
        //     apiName: 'addressMessage',
        //     params:{
        //       openId: sessionStorage.getItem('openId'),
        //       memberName: message.name,
        //       phoneNo: message.phone,
        //       address: message.address
        //     }
        // }).then((res) => {
        //   this.$uop.loading.hide();
        //   let data = JSON.parse(res.data);
        //   let [code, msg] = [data.code, data.message];
        //   console.log(res);
        //   if(code === '200'){
        //     this.$uop.toast.show({
        //       type: 'text',
        //       text: msg,
        //       onShow () {
        //       },
        //       onHide () {
        //         localStorage.setItem('addressMessage', JSON.stringify(message));
        //         if(this.$route.query.questionState){
        //           _this.$router.push({name: 'addressSuccess', params:{ type: '1' }, query:{paramter: this.$route.query.paramter, questionState: this.$route.query.questionState, present:presentType[this.$route.params.present] }});
        //           return;
        //         }
        //         _this.$router.push({name: 'addressSuccess', params:{ type: '1' }, query:{paramter: this.$route.query.paramter}});
        //       }
        //     })
        //   }else{
        //     _this.$uop.loading.hide();
        //     _this.$uop.toast.show({
        //       type: 'text',
        //       text: msg,
        //       onShow () {
        //       },
        //       onHide () {
        //       }
        //     })
        //   }
        // }).catch(function(err){
        //     _this.$uop.loading.hide();
        //     _this.$uop.toast.show({
        //       type:'text',
        //       text: '系统异常'
        //     })
        // })
      },
      show (index) {
        this.$refs.previewer.show(index)
      }

      // message(type){
      //   let el = document.getElementById(type);
      //   this.messages[type] = el.value;
      //   if(this.messages.addressMessage.length > 0 && this.messages.nameMessage.length > 0 && this.messages.phoneMessage.length > 0){
      //     this.submitBtn = true;
      //   }else{
      //     this.submitBtn = false;
      //   }
      // }
    }
    // watch: {
    //   recordLength: {
    //     handler (val) {
          
    //     },
    //     deep: true
    //   }
    // },
  }
</script>
<style lang="scss" scoped>
  $defaultInputColor: #fff;
  $defaultInputFontSize: 16px;
  $baseFontSize: 100;

  #address{
    // header
    .header{
      padding:25px 25px 0; overflow: hidden; position:relative;
      .left, .right{
        float:left;
      }

      .left{
        margin-top:30px;
        img{
          width:2rem;
        }
      }

      .right{
        top:5px;right:0;
        position:absolute;
        img{
          width:4rem;
        }
      }
    }

    //canvas
    .canvas{
      padding:0 25px;
      height:144px;
      margin-bottom:10px;
    }

    //input 
    .address-input{
      float:left;
      width: 100%;
      margin-bottom: 15px;
      color: $defaultInputColor;
      font-size: $defaultInputFontSize;
      padding-left:2rem;
    }

    .no-bottom{
      margin-bottom:5px;
    }

    .address-input-box{
      overflow:hidden;
      position:relative;
      .address-input-icon{
        width:70rem / $baseFontSize;
        height:70rem / $baseFontSize;
        left:40px;top:12rem/$baseFontSize;
        position:absolute;
        img{
          float:left;
          width:70rem / $baseFontSize;
        }
      }
    }

    .address-input-active{
      border:4px solid #cde4ff;
    }

    .submit-btn{
      img{
        width: 100%; margin-top:5px;
      }
    }
  }
</style>