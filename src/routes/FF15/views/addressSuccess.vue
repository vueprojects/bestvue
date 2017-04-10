<template>
	<div id="address">
    <!-- header -->
    <div class="header">
      <div class="left">
        <img src="../assets/imgs/dia_character_1_big.png"/>
      </div>
      <div class="right">
        <img src="../assets/imgs/avatar.png"/>
      </div>
    </div>

    <!-- canvas -->
    <div class="canvas" id="address-canvas-box">
      <canvas-box :canvasWH="canvasWH"></canvas-box>
    </div>
    <div class="canvas2" id="address-canvas-box2" v-show="!hideBtn">
      <canvas-box :canvasWH="canvasWH2"></canvas-box>
    </div>

    <!-- input value -->
	  <div class="">
      <div class="submit-btn" @click="success" v-show="!hideBtn">
        <img src="../assets/imgs/btn_questionary.png"/>
      </div>
    </div>
	</div>
</template>
<script>
  import canvasBox from "../components/canvas";
  import reqData from "../../../models/ff15/reqData"; 

  export default {
    components:{
      canvasBox
    },
    data () {
      return {
        bgImg: require('../assets/imgs/bg_wo_character.png'),
        bgImgH: 480,
        canvasWH:{
          width: '',
          height: '',
          type: 'addressSuccess',
          present: '',
          id: 'canvasBox1'
        },
        canvasWH2:{
          width: '',
          height: '',
          type: 'addressSuccessMessage',
          present: '',
          id: 'canvasBox2'
        },
        hideBtn: false
      }
    },
    mounted (){
      this.bgImgH = Number(document.documentElement.clientHeight);
      this.$el.parentElement.parentNode.style.background  = "url(" + this.bgImg + ")";
      this.$el.parentElement.parentNode.style.backgroundSize = "cover";
      let canvasBox = document.getElementById("address-canvas-box");
      let canvasBox2 = document.getElementById("address-canvas-box2");
      this.canvasWH = { 
        width: canvasBox.offsetWidth - 50, 
        height: canvasBox.offsetHeight, 
        type: 'addressSuccess', 
        id: 'canvasBox1'};
      this.canvasWH2 = { 
        width: canvasBox2.offsetWidth - 50, 
        height: canvasBox2.offsetHeight, 
        type: 'addressSuccessMessage',
        id: 'canvasBox2'};

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
      success(){
        this.$router.push({name: 'research', params:{ qid: 1 }, query:{paramter: this.$route.query.paramter}})
      }
    }
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
        top:5px;right:-15px;
        position:absolute;
        img{
          width:5rem;
        }
      }
    }

    //canvas
    .canvas{
      padding:0 25px;
      height:144px;
    }
    .canvas2{
      padding:0 25px;
      margin-top:5px;
      height:160px;
    }

    .submit-btn{
      img{
        width: 100%; margin-top:5px;
      }
    }
  }
</style>