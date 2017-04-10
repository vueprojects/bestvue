<template>
  <div class="events">
    <v-header></v-header>
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
  import header from '../header/header.vue';
  import activity from '../activity/activity.vue';

  const NoERR = 0;

  export default {
    data() {
      return {
        activities: {}
      };
    },
    created() {
      //实例创建完成时运行
      this.$http.get('/api/activities').then(response => {
        //success callback 获取模拟数据
        let resData = response.data;
        if (resData.errno === NoERR) {
          this.activities = resData.data;
        }
      }, response => {
        //error callback
      });
    },
    components: {
      'v-header': header,
      'v-activity': activity
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss" scoped>
  .main-view:before {
    content: '';
  }

</style>
