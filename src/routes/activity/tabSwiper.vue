<template>
  <div>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="(item, index) in scrollList" @click="check(index)">
          {{ item.name }}
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import { Scroller } from 'vux'

  export default {
    components: {
      Scroller
    },
    data () {
      return {
        showList1: true,
        scrollTop: 0,
        scrollList: [
          {
            name: '派对交友'
          },
          {
            name: '运动'
          },
          {
            name: '益智潮玩'
          },
          {
            name: '沙龙讲座'
          },
          {
            name: '主题节日'
          },
          {
            name: '上海迪士尼'
          },
          {
            name: '派对交友'
          }
        ]
      }
    },
    mounted () {
      // this.$nextTick(() => {
      //   this.$refs.scrollerEvent.reset({top: 0})
      // })
    },
    methods: {
      check(index){
        console.log(index)
      }
    }
  }
</script>

<style scoped>
  .box1 {
    height: 40px;
    width: 550px;
    background-color:white;
    position: relative;
  }
  .box1-item {
    height: 40px;
    display:inline-block;
    margin-left: 15px;
    float: left;
    color:#000;
    text-align: center;
    line-height: 40px;
    padding:0 5px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
  .box2-wrap {
    height: 300px;
    overflow: hidden;
  }
</style>