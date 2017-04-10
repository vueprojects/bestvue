<template>
  <div class="detail">
    <v-header></v-header>
    <div class="detail-wrapper">
      <!--<p class="detail-title">活动id: {{ $route.params.actid }}</p>-->
      <div class="detail-main">
        <!--活动详情图片-->
        <div class="detail-pic">
          <div><img v-bind:src="detailObj.url" width="100%" /></div>
          <div class="inerested-num">
            <img src="./images/icon_heart.png">
            <p>{{ detailObj.interested_num }}人感兴趣</p>
          </div>
        </div>
        <!--活动概况-->
        <div class="detail-survey">
          <div class="detail-caption">
            <p class="dt-h3 tips1">{{ detailObj.intro }}</p>
          </div>
          <div class="detail-rec-wrapper">
            <p class="detail-rec-word">{{ detailObj.rec }}</p>
            <div class="detail-price-wrapper">
              <span class="dt-red detail-price">￥{{ detailObj.price }}</span>
              <span class="arrow-left"></span>
            </div>
          </div>
        </div>
        <!--提供服务-->
        <div class="detail-service">
          <ul class="detail-service-wrapper clearfix">
            <li v-for="service in detailObj.service">{{ service }}</li>
          </ul>
        </div>
        <!--活动时间选择-->
        <div class="detail-date" v-on:click="showDate">
          <i class="dt-icon dt-icon-date"></i>
          <ul>
            <li class="tips1">02月25日-03月18日 周六 13:30-17:00</li>
          </ul>
        </div>
        <!--活动地点-->
        <div class="detail-location">
          <i class="dt-icon dt-icon-location"></i>
          <ul>
            <li class="tips1">襄阳公园 <span class="text12">上海市徐汇区湖南路街道襄阳公园</span></li>
          </ul>
        </div>
        <!--活动详情-->
        <div class="detail-description">
          <p>bulabulabula...</p>
        </div>
      </div>
    </div>
    <!--购买按钮固定底部-->
    <div class="footer-wrapper">
      <div class="dt-footer">
        <div class="dt-footer-left dt-pull-left">
          <span class="dt-red price-show">￥{{ detailObj.price }}</span>
          <span class="discount-show" style="margin-left: 0px;"></span>
        </div>
        <div class="dt-footer-right dt-pull-left">
          <a v-bind:data-id="detailObj.actid" class="zw-book zw-dib" style="width:100%;height:100%;">我要参加</a>
        </div>
      </div>
    </div>
    <!--活动日期浮层-->
    <div class="layer-date" v-bind:class="{showit: isDateLayer}">
      <div class="toss-date">
        <div class="toss-head-wrapper">
          <div class="toss-head">时间说明</div>
        </div>
        <div class="toss-items">
          <div class="toss-item">
            02月25日-03月18日 周六 13:30-17:00
          </div>
        </div>
      </div>
      <div class="toss-close" v-on:click="closeDate">
        <img src="./images/icon_close.png" width="100%">
      </div>
    </div>
    <!--高德地图容器-->
    <div class="layer-map">
      <v-map></v-map>
    </div>
  </div>
</template>
<script>
  import header from '../header/header.vue';
  import map from '../map/map.vue';
  import reqData from '../../../../models/test/reqData.js';

  const Detail_NoERR = 0;

  export default {
    data() {
      return {
        isDateLayer: false,
        activities: {},
        detailObj: {},
        actid: this.$route.params.actid
      };
    },
    methods: {
      showDate: function (event) {
        this.isDateLayer = true;
      },
      closeDate: function (event) {
        this.isDateLayer = false;
      }
    },
    components: {
      'v-header': header,
      'v-map': map
    },
    created() {
      //实际线上环境在此通过actid向服务器请求数据
      //----------------
      //实例创建完成时运行
      reqData.req({
        apiName: 'gio',
        params: {},
        method: 'post'
      }).then(res => {
        if(res.code == '200'){
          this.activities = res.data;
          for (var i = 0; i < this.activities.length; i++) {
            if (this.actid == this.activities[i].actid) {
              //如果一致，则添加到detailObj
              this.detailObj = this.activities[i];
            }
          }
        }else{
          //error
        }
      });
    },
    beforeMount() {

    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss">
  @import '../../common/style/base.scss';
  body,
  .detail-wrapper {
    background-color: #f7f7f7;
  }
  
  .detail-title,
  .detail-description {
    @include font-dpr(24px);
    text-align: center;
    height: 10rem;
  }
  
  .detail-main .detail-pic {
    position: relative;
  }
  
  .detail-pic .inerested-num {
    position: absolute;
    left: 0.4rem;
    bottom: 0.48rem;
    padding: 0 0.14rem;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 2px;
  }
  
  .detail-pic .inerested-num>img {
    width: 0.32rem;
    vertical-align: baseline;
  }
  
  .detail-pic .inerested-num>p {
    display: inline-block;
    @include font-dpr(14px);
    color: #fff;
  }
  
  .detail-survey {
    padding-bottom: 0.2rem;
  }
  
  .tips1 {
    color: #0b1e30;
  }
  
  .dt-h3 {
    @include font-dpr(16px);
    font-weight: 400;
    padding: 0.14rem 0.4rem;
  }
  
  .detail-rec-wrapper {
    margin-left: 0.4rem;
    border-bottom: 1px dashed #e8e8e8;
  }
  
  .detail-rec-wrapper .detail-rec-word {
    margin: 0;
    padding: 0 0.4rem 0.4rem 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @include font-dpr(14px);
    color: #777;
    line-height: 1;
  }
  
  .dt-red {
    color: #ff565d;
  }
  
  .detail-price-wrapper .detail-price {
    @include font-dpr(16px);
  }
  
  .detail-price-wrapper .arrow-left {
    display: inline-block;
    width: 0.16rem;
    height: 0.26rem;
    background: url(images/arrow_left.png) no-repeat;
    background-size: 0.16rem;
    margin-left: 0.16rem;
  }
  
  .detail-service-wrapper {
    padding: 0 0.4rem;
  }
  
  .detail-service-wrapper li {
    float: left;
    position: relative;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    padding-left: 0.4rem;
  }
  
  .detail-service-wrapper li:before {
    content: '';
    position: absolute;
    top: 0.18rem;
    left: 0.05rem;
    width: 0.08rem;
    height: 0.08rem;
    border-radius: 50%;
    background: #ff565d;
  }
  
  .detail-survey,
  .detail-service {
    background-color: #fff;
  }
  /*checktime*/ 
  .detail-date{
    position: relative;
    margin-top: 0.26rem;
    background: #fff;
  }
  
  .detail-date>ul {
    padding: 0.4rem 0.8rem 0.4rem 0.94rem;
    border-bottom: 1px solid #e8e8e8;
  }
  
  .detail-date>ul>li {
    width: auto;
    overflow: hidden;
    @include font-dpr(14px);
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 0.4rem;
  }
  
  .detail-date:after {
    content: '';
    display: block;
    position: absolute;
    background: url(images/arrow_left.png) left top no-repeat;
    background-size: 0.13rem 0.24rem;
    top: 50%;
    right: 0.4rem;
    width: 0.13rem;
    height: 0.24rem;
    transform: translate3d(0, -50%, 0);
  }
  
  .dt-icon {
    display: inline-block;
    width: 0.56rem;
    height: 0.56rem;
  }
  
  .dt-icon-date {
    position: absolute;
    top: 0.37rem;
    left: 0.48rem;
    background-position: 0 2px!important;
    background: url(images/icon_date.png) no-repeat;
    background-size: 0.53rem;
  }
  /*checkmap*/
  .detail-location{
    position: relative;
    background: #fff;
  }
  .dt-icon-location{
    position: absolute;
    top: 0.37rem;
    left: 0.48rem;
    background-position: 0 2px!important;
    background: url(images/icon_location.png) no-repeat;
    background-size: 0.53rem;
  }
  .detail-location>ul {
    padding: 0.4rem 0.8rem 0.4rem 0.94rem;
    border-bottom: 1px solid #e8e8e8;
  }
  
  .detail-location>ul>li {
    width: auto;
    overflow: hidden;
    @include font-dpr(14px);
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 0.4rem;
  }
  /*活动日期浮层CSS*/
  
  .layer-date {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2.4rem 0.67rem;
    background: rgba(0, 0, 0, .6);
    z-index: 999;
  }
  
  .layer-date .toss-date {
    background: #fff;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: 0.1rem;
  }
  
  .toss-head-wrapper {
    position: relative;
    padding: 1.34rem 0 0.67rem;
    text-align: center;
  }
  
  .toss-head {
    @include font-dpr(18px);
    color: #0b1e30;
    position: relative;
    display: inline-block;
  }
  
  .toss-head:before,
  .toss-head:after {
    content: '';
    display: block;
    width: 0.8rem;
    border-top: 1px solid #6b6b6b;
    position: absolute;
    top: 0.32rem;
  }
  
  .toss-head:before {
    left: -1.06rem;
  }
  
  .toss-head:after {
    right: -1.06rem;
  }
  
  .toss-items {
    padding: 0 0.4rem 0.53rem;
  }
  
  .toss-items .toss-item {
    min-height: 1.2rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    @include font-dpr(14px);
    min-height: 0.4rem;
    text-align: center;
  }
  
  .toss-close {
    position: absolute;
    left: 50%;
    margin-left: -0.59rem;
    bottom: 0.4rem;
    width: 1.28rem;
    height: 1.28rem;
  }
  /*地图CSS*/
  .layer-map{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
    z-index: 999;
  }

  .showit {
    display: block;
  }
  /*固定于底部按钮*/
  
  .footer-wrapper {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  
  .footer-wrapper .dt-footer {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
    background: #ffffff;
    margin-top: 0;
  }
  
  .footer-wrapper .dt-footer-left {
    width: 40%;
    border-top: 1px solid #ddd;
    line-height: 1.1;
  }
  
  .footer-wrapper .price-show {
    display: block;
    @include font-dpr(16px);
    padding-left: 0.4rem;
    padding-top: 0.4rem;
  }
  
  .footer-wrapper .dt-footer-right {
    width: 60%;
    background-color: #ff565d;
    @include font-dpr(16px);
    color: #fff;
    height: 1.23rem;
    line-height: 1.23rem;
    text-align: center;
  }
  
  .dt-pull-left {
    float: left;
  }
  .text12{@include font-dpr(12px);}
</style>
