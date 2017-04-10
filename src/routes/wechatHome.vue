<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <!-- <div style="height:50px;"> -->
      <tabbar>
          <tabbar-item selected>
            <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
            <span slot="label">首页</span>
          </tabbar-item>
        <tabbar-item show-dot>
          <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
          <span slot="label">活动</span>
        </tabbar-item>
        <tabbar-item :link="redirect" badge="2">
          <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    <!-- </div> -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data() {
    return {
      redirect:'userRegister'
    }
  },
  mounted() {
    let redirectUrl = 0;
    if(redirectUrl){
      this.redirect = 'user'
    }else{
      this.redirect = 'userRegister'
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .weui-tabbar{
    position:fixed;
  }
</style>