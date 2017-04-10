<template>
  <div class="act-wrapper">
    <!-- 活动模板 -->
    <div class="act-image">
      <router-link v-bind:to="activity.href">
        <img v-bind:src="activity.url" v-lazy="activity.url" width="100%" />
      </router-link>
    </div>
    <div class="act-intro">
      <div class="act-title">{{ activity.intro }}</div>
      <p class="act-price">
        <span>￥{{ activity.price }}<i v-if="activity.tickets.length > 1">起</i></span>
      </p>
      <div class="act-rec">
        <span class="act-icon act-icon-recommand"></span>
        <span>{{ activity.rec }}</span>
      </div>
    </div>
    <div class="act-info">
      <span class="act-icon act-icon-pos"></span>
      <span class="act-pos">{{ activity.location }}</span>
      <span class="act-icon act-icon-time"></span>
      <span class="act-time">{{ showActivityTime }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      activity: {
        type: Object
      }
    },
    computed:{
      showActivityTime: function(){
        let status = this.activity.status;
        if(status == 0) {
          return '未开始';
        }
        if(status==1) {
          return '进行中';
        }
        if(status==2) {
          return '已结束';
        }
      }
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss">
@import '../../common/style/base.scss';

  .act-wrapper {
    width: 100%;
    background: #fff;
    margin-bottom: 0.2rem;
  }
  
  .act-wrapper .act-intro {
    padding: 0.16rem 0.16rem 0.08rem;
    position: relative;
  }
  
  .act-wrapper .act-title {
    margin-right: 1.6rem;
    margin-bottom: 0.13rem;
    @include font-dpr(14px);
    color: #0b1e30;
  }
  
  .act-wrapper .act-rec {
    @include font-dpr(12px);
    margin-bottom: 0.1rem;
    color: #6b6b6b;
    word-wrap: break-word;
    word-break: break-all;
    line-height: 1;
  }
  
  .act-intro .act-price {
    position: absolute;
    right: 0.16rem;
    top: 0.1rem;
    color: #ff565d;
    @include font-dpr(16px);
  }
  
  .act-intro .act-price i {
    font-style: normal;
    @include font-dpr(12px);
  }
  
  .act-wrapper .act-icon {
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
  }
  
  .act-rec .act-icon-recommand {
    background-image: url(images/icon_recommand.png);
    width: 0.3rem;
    height: 0.3rem;
  }
  
  .act-wrapper .act-info {
    margin:0 0.16rem;
    padding-bottom: 0.16rem;
    white-space: nowrap;
    overflow: hidden;
    color: #a0a0a0;
    @include font-dpr(12px);
  }
  
  .act-info .act-icon-pos {
    background-image: url(images/icon_pos.png);
    width: 0.3rem;
    height: 0.3rem;
  }
  .act-info .act-pos{
    display: inline-block;
    max-width: 2.13rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: bottom;
  }
  .act-info .act-icon-time{
    margin:0 0.02rem 0 0.13rem;
    background-image: url(images/icon_time.png);
    width: 0.3rem;
    height: 0.3rem;
  }
  img[lazy=loading] {
  width: 100%;
  height: 66.67%;
  margin: auto;
}
</style>
