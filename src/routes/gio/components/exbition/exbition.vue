<template>
  <div class="exbition">
    <v-header></v-header>
    <p>展览页</p>
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
.exbition{
  font-size:48px;
  text-align: center;
}
</style>
