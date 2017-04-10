<template>
    <div id="cardRes_container">
        <div class="card" :style="{backgroundImage: 'url(' + dataRes.awardResPic + ')'}">
             
              <div class="character"  :style="{backgroundImage: 'url(' + dataRes.character + ')'}" ></div>
        </div>
        <div class="info">
           <p> {{dataRes.info_a}} </p>
           <br/>
           <p> {{dataRes.info_b}} </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
   $baseFontSize:100;
   #cardRes_container{
        position: fixed;top:0;left:0;right:0;bottom:0;
        background: url("../assets/imgs/bg_wo_character.png") no-repeat center; 
        background-size: cover;                 
    }
   .card{ 
        width:622rem/$baseFontSize;
        height:622rem/$baseFontSize;
        margin:0 auto;
        margin-top:80rem/$baseFontSize;
        position:relative;
        top: 0.9rem;
        left: 0;
        background-size:cover;
    } 
    .character{
        height:400rem/$baseFontSize;
        width:660rem/$baseFontSize;
        position: absolute;
        left:36rem/$baseFontSize;
        bottom:-94rem/$baseFontSize;
        background-repeat:no-repeat;
        background-position:bottom left;
        background-size:contain;
    } 
    .info{
        width:598rem/$baseFontSize;
        height:132rem/$baseFontSize;
        padding:66rem/$baseFontSize 66rem/$baseFontSize 126rem/$baseFontSize 66rem/$baseFontSize ; 
        background:url("../assets/imgs/dia_bubble_1.png") no-repeat center; 
        background-size:cover;
        margin:0 auto;
        margin-top:60rem/$baseFontSize;
       
        font-size:32rem/$baseFontSize;
        color:#ffffff;
        line-height:44rem/$baseFontSize;
        text-align:justify;
        position:relative;
    }
    
</style>
<script>

export default{
    name: 'cardRes',
    props: ['dataRes'],
   
}
</script>