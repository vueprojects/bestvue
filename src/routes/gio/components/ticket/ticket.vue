<template>
  <div class="ticket">
    <v-header></v-header>
    <p>景点门票页</p>
  </div>
</template>
<script>
  import header from '../header/header.vue';

  export default {
    components:{
      'v-header': header
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss">
.ticket{
  font-size:48px;
  text-align: center;
}
</style>
