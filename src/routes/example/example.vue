<template>
      <ul class='example'>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/todo">todoMVC</router-link></li>
        <li><router-link to="/vuxexp">Vux</router-link></li>
        <li><router-link to="/loadMore">loadMore</router-link></li>
        <li><router-link to="/index">首页活动</router-link></li>
       <!--  <li><router-link to="/bar">/bar</router-link></li>
        <li><router-link to="/baz">/baz</router-link></li>
        <li><router-link to="/qux">/qux</router-link></li>
        <li><router-link to="/qux-async">/qux-async</router-link></li> -->
      </ul>
</template>
<style lang="scss">
  @import "../../stylesheets/global.scss";
	.example li{height: 40px;line-height: 40px;text-align: center;border-top: 1px solid #ddd;}
	.example li:last-child{
		border-bottom: 1px solid #ddd;
	}
</style>
