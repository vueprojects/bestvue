<template>
  <div>
    <search></search>
    <tab-swiper></tab-swiper>
    <div style="margin-top:20px;">
      <!-- <load-more :lists="lists" v-on:refreshLists="refreshLists"></load-more> -->
      <activity-list :type="listType" :lists="lists" v-on:refreshLists="refreshLists"></activity-list>
    </div>
    <alert :title="title"></alert>
  </div>
</template>
<script>
  import loadMore from "../../components/loadMore"
  import alert from "../../components/alert"
  import search from "./search"
  import tabSwiper from "./tabSwiper"
  import activityList from "./activityList"

  export default {
    data(){
      return {
        title: '123',
        listType: 'index'
      }
    },
    computed:{
      lists () {
        return this.$store.state.lists
      }
    },
    components:{
      loadMore,
      alert,
      search,
      tabSwiper,
      activityList
    },
    mounted(){
      this.heights = screen.height - 134;
      // let api = {apiName: 'list',params: { pageSize: 10}};
      // this.$store.dispatch('fetchLists', {api:api});
    },
    methods:{
      refreshLists(_loadMore){
        let api = {apiName: 'list',params: { pageSize: 10}};
        setTimeout(() => {
          this.$store.dispatch('fetchLists', {api:api});
          setTimeout(() => {
            _loadMore.$refs.demo1.donePullup()
          }, 100)
        }, 500)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>