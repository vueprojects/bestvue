<template>
    <div>
        <cardRes :dataRes="dataRes" ></cardRes> 
    </div>
</template>
 
<script>
    import cardRes from './cardRes.vue'
    export default{
      components: { cardRes },
      data(){
          return{
              dataRes:{
                info_a:"手机保持畅通，小红蜂会第一时间与你联系送出奖品哦。",
                info_b:"",
                character: require("../assets/imgs/dia_character_1_big.png"),
                awardResPic:require("../assets/imgs/award-3_large.png")
          } 
        } 
      }
    }
</script>