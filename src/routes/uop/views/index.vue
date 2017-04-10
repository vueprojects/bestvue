<template>
	<div id="index">

		<!-- 轮播 -->
		<div class="swiper">
		  <swiper></swiper>
		</div>	

    <!-- 广告 -->
    <div>
      <advertisement></advertisement>
    </div>

    <!-- 热门活动 -->
    <div>
      <popular-activity></popular-activity>
    </div>

    <!-- 精选 -->
    <div>
      <care-activity></care-activity>
    </div>

    <!-- 猜你喜欢 -->
    <div>
      <guess-like></guess-like>
    </div>

    <!-- 商标 -->
    <div class="trademark">
      <div style="height:0.9rem;line-height:0.9rem;text-align:center;border-top:1px solid #E8E3E5;">
        Copyright&copy;东方明珠
      </div>
    </div>

    <!-- 底部导航 -->
    <div style="position:fixed;bottom:0;width:100%;background:#fff;">
      <bottom-nav></bottom-nav>
    </div>

	</div>
</template>

<script>
  //vue
  import swiper from "./../components/swiper"
  import guessLike from "./../components/guessLike"
  import advertisement from "./../components/advertisement"
  import popularActivity from "./../components/popularActivity"
  import careActivity from "./../components/careActivity"
  import bottomNav from "./../components/bottomNav"

  //json
  import getListsJson from "./../json/getListsJson"
  import indexTextJson from "./../json/indexTextJson"

  //method
  import reqData from "./../../../models/uop/reqData"

  export default {
    data(){
      return {
        indexText: indexTextJson
      }
    },
    props: {
      
    },
    components: {
      swiper,
      guessLike,
      bottomNav,
      advertisement,
      popularActivity,
      careActivity
    },
    mounted() {
      this.share();
    },
    methods: {
      //分享主页
      share() {
        this.$uopweixn.onMenuShareTimeline({
          title: '累死啦', // 分享标题
          desc: '气！死！我！了！抽个XBOX怎么就这么难？？？你行你上',
          link: 'http://baidu.com',
          imgUrl: 'http://dev-uop-wx.opg.cn/_common/imgs/share.jpg'
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "./../assets/css/sass/function.scss";
  $baseRem: 100;
  $baseAdvertisementBoder: #E7E7E7;

	#index{
    box-sizing: border-box;
    padding-bottom: 56px;

    //轮播
    .swiper{
      height: 400rem/100 + 50rem/$baseRem;
    }

    //商标
    .trademark{
      padding: 0 20px; margin-top: 20px;

      div{
        height: 0.9rem; line-height: 0.9rem; text-align: center; border-top: 1px solid #E8E3E5;
      }
    }
	}

</style>