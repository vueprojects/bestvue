<template>
  <div>
    <!-- <divider>{{ ('Pull Up to Refresh') }}</divider> -->
    <scroller lock-x scrollbar-y use-pullup height="500px" @on-pullup-loading="load" ref="demo1"
    :pullup-config="{loadingContent: ('Loading123')}">
      <div class="box2">
        <div v-for="item in lists">
          <div>
            <div style="width:100%;height:150px;" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
            <span>{{item.img}}</span>
          </div>
          <div>
            <span>{{ item.title }}</span>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Divider, Spinner } from 'vux'

export default {
  props: {
    lists: Array
  },
  components: {
    Scroller,
    Divider,
    Spinner
  },
  mounted() {
    this.$emit('refreshLists', this);
  },
  methods: {
    load () {
      this.$emit('refreshLists', this);
    }
  }
}
</script>

<style lang="less" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.rotate {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.pullup-arrow {
  display: block;
  transition: all linear 0.2s;
  -webkit-transition: all linear 0.2s;
  color: #666;
  font-size: 25px;
}
</style>
