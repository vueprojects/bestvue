<template>
  <scroller lock-x scrollbar-y use-pullup :height="heights" @on-pullup-loading="load" ref="demo1"
    :pullup-config="{content:(''),loadingContent: ('Loading')}">
    <div class="box2">
      <div style="margin-bottom:30px;">
        <swiper></swiper>        
      </div>
      <div v-for="(item, index) in lists" style="margin-bottom:30px;" @click="toAcivityDetail(index)">
        <div>
          <div style="width:100%;height:150px;" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
        </div>
        <div style="overflow:hidden;">
          <span style="float:left;">{{ item.title }}</span>
          <span style="float:right;">{{ item.price }}</span>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
  import { Scroller } from 'vux'
  import swiper from "./swiper"

  const heightCheckType= {
    'index' : 154
  }

  export default {
    data(){
      return {
        heights: null
      }
    },
    props: {
      lists: Array,
      type: String
    },
    components: {
      Scroller,
      swiper
    },
    mounted() {
      this.heights = screen.height - heightCheckType[this.type] + 'px';
      this.$emit('refreshLists', this);
    },
    methods: {
      load () {
        this.$emit('refreshLists', this);
      },

      toAcivityDetail(index){
        this.$router.push({ name: 'activityDetail', params: { id: index }})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
