<template>
    <div>
        <cardRes :dataRes="dataRes" ></cardRes> 
    </div>
</template>
<style>
 
 
</style>
<script>
    import cardRes from './cardResFail.vue'
    export default{
      components: { cardRes },
      data(){
          return{
              dataRes:{
                info_a:"哎呀～～～来晚了一步，明信片已经领完。下次记得早点来哦～～～",
                info_b:"",
                character: {},//require("../assets/imgs/award_failed.png"),
                awardResPic:require("../assets/imgs/award_failed.png")
          } 
        } 
      }
    }
</script>