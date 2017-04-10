<template>
  <div class="prizelist-container">
    <h4>手机用户获奖列表</h4>
    <ul class="prizelist-wrapper">
      <li v-for="prize in prizelistObj">{{ prize }}</li>
    </ul>
  </div>
</template>
<script>
  var prizelistJson = require('../../data/prizelist.json');

  export default {
    data(){
      return{
        prizelistObj: prizelistJson.prizelist
      }
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss">
@import '../../common/style/base.scss';

  .prizelist-container{}
  .prizelist-wrapper{
    margin:0 auto;
    padding:0.1rem 0.5rem;
    width:60%;
    height:2rem;
    @include font-dpr(12px);
    text-align:center;
    overflow:hidden;
  }
</style>
