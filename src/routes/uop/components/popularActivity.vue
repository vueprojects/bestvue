<template>
	<div>
    <div class="popular-activity">
      <div class="title">
        <div class="top">
          <span><i class="icon-uop_rmhd" style="color:#FF726F;"></i></span>
          <span>{{ indexText['act-title'] }}</span>
        </div>
        <div class="bottom">
          <span style="float:left;">{{ indexText['act-text'] }}</span>
          <!-- <span style="float:right;">
            <span style="font-size:0.36rem;color:#000;">{{ act.index }}</span>
            <span>/</span>
            <span>{{ act.total }}</span>
          </span> -->
        </div>
      </div>

      <div class="popular-activity-swiper">
        <scroller lock-y :scrollbar-x=false :bounce=false>
          <div class="box1" id="popular-box1">
            <div class="box1-item" v-for="item in popular" @click="toActivityDetail(item.id)">
              <div>
                <img v-bind="{'src' : item.imgSrc}" style="width: 100%; height: 100%;" />
              </div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </scroller>
      </div>
    </div>
	</div>
</template>

<script>
  import indexTextJson from "./../json/indexTextJson"
  import { Scroller } from 'vux'

  export default {
    data(){
      return {
        popular: [
          {
            imgSrc: require('./../assets/imgs/remen-1.png'),
            text: '家庭娱乐生态圈',
            id: ''
          },
          {
            imgSrc: require('./../assets/imgs/remen-2.png'),
            text: '亲子娱乐全平台',
            id: ''
          },
          {
            imgSrc: require('./../assets/imgs/remen-3.png'),
            text: '生活娱乐多产业',
            id: ''
          }
        ],
        act:{
          index:1,
          total:3
        },
        indexText: indexTextJson
      }
    },
    components: {
      Scroller
    },
    mounted() {
      document.getElementById('popular-box1').addEventListener('touchmove', this.handleMove)
    },
    methods: {
      //切换
      handleMove() {
        let transX = document.getElementById('popular-box1').style.transform;
        let transPX = transX.substring(transX.indexOf('(') + 1, transX.indexOf('p'));
        let domW = document.getElementsByClassName('box1-item')[0].offsetWidth;
        console.log(-transPX/domW)
        this.act.index = Math.floor(-transPX/domW) + 1;
      },

      //跳转详情
      toActivityDetail(id){
        this.$router.push({ name: 'activityDetail', params: { id }})
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "./../assets/css/sass/function.scss";
  $baseRem: 100;
  $baseAdvertisementBoder: #E7E7E7;

  //热门活动
  .popular-activity{
    border-top: 1px solid #EDF1F4; margin-top: 15px;

    .title{
      padding: 20px 4%;

      .top{
        font-size: 30rem/$baseRem; color: #292A34; 
      }

      .bottom{
        font-size: 22rem/$baseRem; color: #939499; padding-top: 3%;
      }
    }

    .popular-activity-swiper{
      padding-bottom: 15px; border-bottom: 1px solid #EDF1F4;

      .box1 {
        width: 1050rem/$baseRem;
        position: relative;
      }
      .box1-item {
        display:inline-block;
        margin-left: 15px;
        float: left;

        div:nth-of-type(1){
          width: 280rem/$baseRem;
          height: 220rem/$baseRem;
          background-color: #ccc;
        }

        div:nth-of-type(2){
          word-wrap: break-word;
          text-align: center; font-size: cPX(24rem); padding: 10px 0;
        }
      }
    }
  }
</style>