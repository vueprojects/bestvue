<template>
  <div>
    <div></div>
    <div>
      <load-more :lists="lists" v-on:refreshLists="refreshLists"></load-more>
      <div>{{ 'zhaojinxin' | text }}</div>
    </div>
    <alert :title="title"></alert>
  </div>
</template>
<script>
  import loadMore from "../../components/loadMore";
  import alert from "../../components/alert";

  export default {
    data(){
      return {
        title: '123'
      }
    },
    computed:{
      lists () {
        return this.$store.state.lists
      }
    },
    components:{
      loadMore,
      alert
    },
    mounted(){
      let api = {apiName: 'list',params: { pageSize: 10}};
      this.$store.dispatch('fetchLists', {api:api});
    },
    methods:{
      refreshLists(_loadMore){
        let api = {apiName: 'list',params: { pageSize: 10}};
        setTimeout(() => {
           this.$store.dispatch('fetchLists', {api:api});
          setTimeout(() => {
            _loadMore.$refs.demo1.donePullup()
          }, 100)
        }, 2000)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>