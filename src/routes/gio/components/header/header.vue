<template>
  <div class="header-wrapper">
    <!-- 头部模板 -->
    <div class="nav-banner"></div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/events">活动精选</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/outdoor">周边&户外</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ticket">景点门票</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/exbition">展览</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss">
@import '../../common/style/base.scss';

  .nav-banner {
    width: 100%;
    height: 0.43rem;
    background: #49c6d8;
  }
  
  .tab {
    display: flex;
    width: 100%;
    line-height: 0.43rem;
  }
  
  .tab .tab-item {
    flex: 1;
    text-align: center;
  }
  
  .tab .tab-item a {
    display: block;
    text-decoration: none;
    @include font-dpr(16px);
    color: #333;
    line-height:1.5;  
  }
  
  .tab .tab-item a.active {
    color: #111;
  }

</style>
