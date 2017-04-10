<template>
  <div class="gio">
    <div class="gio-header">
      <h3>GIO埋点单页面demo</h3>
      <v-header></v-header>
    </div>
    <!-- 轮播图组件 -->
    <v-swipe></v-swipe>
    <!-- 分类icon -->
    <div class="icon-wrapper">
      <div class="icon-item">
        <router-link to="/events">
          <i class="icon-events"></i>
        </router-link>
      </div>
      <div class="icon-item">
        <router-link to="/outdoor">
          <i class="icon-outdoor"></i>
        </router-link>
      </div>
      <div class="icon-item">
        <router-link to="/ticket">
          <i class="icon-ticket"></i>
        </router-link>
      </div>
      <div class="icon-item">
        <router-link to="/exbition">
          <i class="icon-exbition"></i>
        </router-link>
      </div>
    </div>
    <div class="main-view">
      <div id="container" class="main-wrapper">
        <div v-for="activity in activities" class="activity-item">
          <v-activity v-bind:activity="activity"></v-activity>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import header from './components/header/header.vue';
  import swipe from './components/swipe/swipe.vue';
  import activity from './components/activity/activity.vue';
  import reqData from '../../models/test/reqData.js';
  //import AMap from 'AMap';

  export default {
    data() {
      return {
        activities: {}
      };
    },
    created() {
      //实例创建完成时运行
      reqData.req({
        apiName: 'gio',
        params: {},
        method: 'post'
      }).then(res => {
        if (res.code == '200') {
          this.activities = res.data;
        } else {
          //error
        }
      })
    },
    components: {
      'v-swipe': swipe,
      'v-activity': activity,
      'v-header': header
    }
  };

</script>
<style lang="scss" rel="stylesheet/scss">
  @import 'common/style/base.css';
  @import 'common/style/icon.css';
  @import 'common/style/base.scss';
  .gio-header {
    width: 100%;
  }
  
  .gio-header h3 {
    padding: 0.2rem;
    text-align: center;
    font-weight: normal;
  }
  
  .icon-wrapper {
    display: flex;
    padding: 0.5rem 0;
    width: 100%;
    line-height: 2;
    background: #f2f2f2;
  }
  
  .icon-wrapper .icon-item {
    flex: 1;
    text-align: center;
  }
  
  .icon-wrapper .icon-item {
    @include font-dpr(32px);
  }
  
  .icon-wrapper .icon-item i {
    display: inline-block;
    padding: 0.1rem;
    border: 2px solid #666;
    border-radius: 50% 50%;
    @include font-dpr(32px);
    color: #666;
  }
  
  .main-view {
    padding: 0 0.1rem;
    background: #f2f2f2;
  }
  
  .main-view:before {
    display: block;
    content: '活动精选';
    @include font-dpr(14px);
    line-height: 1;
    color: #666;
    padding: 0.1rem 0;
  }
  
  .main-wrapper .activity-item {
    border-radius: 5px;
    overflow: hidden;
  }

</style>
