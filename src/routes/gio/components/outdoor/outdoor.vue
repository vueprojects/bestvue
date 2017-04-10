<template>
  <div class="outdoor">
    <v-header></v-header>
    <p>周边&户外页</p>
    <v-prizelist></v-prizelist>
  </div>
</template>
<script>
  import header from '../header/header.vue';
  import prizelist from '../prizelist/prizelist.vue';

  export default {
    components:{
      'v-header': header,
      'v-prizelist': prizelist
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped></style>-->
<style lang="scss" rel="stylesheet/scss">
.outdoor{
  font-size:48px;
  text-align: center;
}
</style>
