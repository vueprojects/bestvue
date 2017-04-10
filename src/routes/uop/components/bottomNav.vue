<template>
  <div class="bottom-nav">
    <div class="item" v-for="(item, index) in navLists" :class="{ 'item-acitve' : routeName === item.route }">
      <div @click="toRoute(item.route)">
        <span>
          <i v-bind="{'class': item.icon}"></i>
        </span><br>
        <span>{{ item.name }}</span>
      </div>
    </div>
    <x-dialog v-model="showNoScroll" class="dialog-demo" :scroll="false">
      <div class="">
        <p>最终幻想世界的入口</p>
        <p>需要扫描二维码才能进入……</p>
        <img src="../assets/imgs/smallcode.jpg" style="width:70%">
      </div>
      <!-- <span class="vux-close" @click="showNoScroll=false"></span> -->
    </x-dialog>
  </div>
</template>

<script>
  import getListsJson from "./../json/getListsJson"
  import { XDialog } from 'vux'
  import reqData from "./../../../models/uop/reqData"
  const bottomNav = getListsJson.bottomNav;

  export default {
    data() {
      return {
        navLists: bottomNav,
        routeName: '',
        showNoScroll: false,
        status: {}
      }
    },

    components: {
      XDialog
    },

    mounted() {
      this.routeName = this.$route.name;
      this.getStatus();
    },

    methods: {
      //获取状态
      getStatus() {
        this.status = JSON.parse(localStorage.getItem('userStatus'));
      },

      //跳转路由
      toRoute(name) {
        let status = JSON.parse(localStorage.getItem('userStatus'));
        let routeName = this.$route.name;
        if(name === 'index'){
          this.$router.push({ name });
          return;
        }
        if( status.followState === '01' ) {
          //没关注
          this.showNoScroll = true;
        } else if( status.followState === '00' ) {
          //关注没注册
          if( status.registerState === '01' ){
            let fromRoute = {
              'index' : 'personCenter'
            }
            this.$router.push({ name: 'reg' , query: { type: fromRoute[routeName] }});
            return;
          } else {
            this.$router.push({ name });
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $baseRem: 100;

  .bottom-nav{
    padding: 12px 0;
    border-top: 1px solid #EAE4E6;
    display: flex; display: -webkit-flex; /* Safari */

    .item{
      flex: 1;
      text-align: center;

      span:first-of-type{
        display: inline-block;
        width: 15px; height: 15px;
      }

      span:last-of-type{

      }
    }

    .item-acitve{
      color: #EA403B;
    }
  }
</style>