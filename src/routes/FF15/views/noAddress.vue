<template>
	<div id="address">
    <!-- header -->
    <div class="header">
      <div class="left">
        <img src="../assets/imgs/dia_character_1_big.png"/>
      </div>
      <!-- <div class="right">
         <img src="../assets/imgs/award_0.png"/>
      </div> -->
    </div>

    <!-- canvas -->
    <div class="canvas" id="address-canvas-box">
      <!-- <canvas id="address-canvas" width="100%" height="100%"></canvas> -->
      <canvas-box :canvasWH="canvasWH"></canvas-box>
    </div>

    <!-- input value -->
	  <div class="">
      <div class="submit-btn" @click="more" v-show="!hideBtn">
        <img src="../assets/imgs/btn_go.png" style="width:100%;" />
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
          type: 'noAddress',
          present: '',
          id: 'canvasBox'
        },
        hideBtn: false
      }
    },
    mounted (){
      this.bgImgH = Number(document.documentElement.clientHeight);
      this.$el.parentElement.parentNode.style.background  = "url(" + this.bgImg + ")";
      this.$el.parentElement.parentNode.style.backgroundSize = "cover";
      let canvasBox = document.getElementById("address-canvas-box");
      let present = this.$route.params.present;
      this.canvasWH = { 
        width: canvasBox.offsetWidth - 50, 
        height: canvasBox.offsetHeight, 
        type: 'noAddress',
        id: 'canvasBox' };
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
      reqData.req({
        apiName: 'getQuestionsPrize'
      }).then((res) => {
        let data = JSON.parse(res.data).data;
        let prizeCount = data.prizeCount;
      })
    },
    methods:{
      more(){
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
      margin-top:25px;
      padding:0 25px; overflow: hidden; position:relative;
      .left, .right{
      }

      .left{
        margin-top:30px;
        text-align: center;
        img{
          width:350rem/$baseFontSize;
        }
      }

      .right{
        top:-20px;right:0;
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

    .submit-btn{
      margin-top:30px;
      img{
        width: 100%; margin-top:5px;
      }
    }
  }
</style>