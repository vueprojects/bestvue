<template>
    <mt-swipe :auto="4000" class="my-swipe">
        <mt-swipe-item v-for="slide in slideDate">
            <a v-bind:href="slide.link"><img v-bind:src="slide.src"/></a>
        </mt-swipe-item>
      </mt-swipe>
</template>
<script>
    export default{
        data(){
            return{
                slideDate:[
                    {link:'#', src:'https://og00pefz8.qnssl.com/data/public/operating/2017/02/14_82/14870670114522370.jpg!750x350'},
                    {link:'#', src:'https://og00pefz8.qnssl.com/data/public/operating/2017/02/08_72/14865476078592975.jpg!750x350'},
                    {link:'#', src:'https://og00pefz8.qnssl.com/data/public/operating/2017/02/14_38/14870442571412445.jpg!750x350'}
                ]
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .my-swipe {
    height: 4.66rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    }
    .mint-swipe-item img{width:100%; height: 100%;}
</style>