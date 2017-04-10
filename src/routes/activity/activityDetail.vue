<template>
  <div>
    <div :style="{ backgroundImage: 'url(' + detail.img + ')' }" style="width:100%;height:300px;"></div>
    <div>{{detail.title}}</div>

    <div style="height:50px;position:fixed;bottom:0;width:100%;">
      <span style="float:left;width:40%;">$599</span>
      <span style="float:left;width:60%;line-height:50px;text-align:center;background:pink;color:#fff;">我要参加</span>
    </div>
    <alert :title="title"></alert>
  </div>  
</template>
<script>
  import alert from "../../components/alert"

  export default {
    data(){
      return {
        id: null,
        title: '123',
      }
    },
    components:{
      alert
    },
    computed:{
      detail () {
        return this.$store.state.detail
      }
    },
    mounted(){
      this.id = this.$route.params.id;
      let api = {apiName: 'activityDetail',params: { id: this.id }};
      this.$store.dispatch('fetchActivityDetail', { api:api });
    }
  }
</script>
<style lang="scss" scoped>

</style>