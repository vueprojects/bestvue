<template>
	<div id="activity-detail">

    <!-- 详情图片 -->
    <div class="img" style="position: relative">
      <swiper :show-dots="false" :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange" :height="height" auto>
      </swiper>
      <ul class="swiper-item-click">
        <li v-for="(item, index) in demo01_list" :class="{ 'swiper-item-click-active': demo01_index === index }" @click.stop="demo01_onIndexChange(index)"></li>
      </ul>
    </div>

    <!-- 详情简介 -->
    <div class="abstract">
      <div class="title">{{ actDetail.title }}</div>
      <div class="price" v-show="actDetail.free">免费</div>
      <div class="price" v-show="!actDetail.free">
        <span>¥{{ actDetail.minPrice }} - {{ actDetail.maxPrice }}</span>
        <span v-show="actDetail.orginal" style="padding:3px 5px;background:#F3F6F6;color:#B9C0C2;text-decoration:line-through;">
          原价:{{actDetail.originalPrice}}
        </span>
      </div>
      <div class="time" style="margin-bottom: 15px;" v-show="actDetail.dateSelect !== null">
        <span>
          <i class="icon-uop_rq" style="color:#C7CBDF;"></i>
        </span>
        <span style="float:left;margin-top:4px;">
          {{timeSelect}}
        </span>
        <!-- <span>&gt;</span> -->
      </div>
      <div class="time" v-show="actDetail.merchantAddress !== null">
        <span>
          <i class="icon-uop_dz" style="color:#C7CBDF;"></i>
        </span>
        <span style="float:left;margin-left:10px;">{{ actDetail.merchantAddress }}</span>
      </div>
    </div>

    <!-- 详情内容 -->
    <div class="content">

      <!-- 详情标题 -->
      <div class="title">
        <div>活动详情</div>
        <div>
          <span></span>
        </div>
      </div>

      <!-- 详情文字内容 -->
      <div class="content-text" id="content-text"></div>

      <!-- 详情图片 -->
<!--       <div class="content-img">
        <div></div>
      </div> -->

      <!-- 查看全部按钮 -->
<!--       <div class="content-btn">
        <span>查看全部</span>
      </div> -->
    </div>

    <!-- 猜你喜欢 -->
    <div>
      <guess-like></guess-like>
    </div>

    <!-- 报名按钮 -->
    <div class="regiser-btn" style="position: fixed; bottom: 0; width: 100%; background: #fff;">
      <span @click="apply">报名</span>
    </div>

    <!-- 二维码 -->
    <div>
      <x-dialog v-model="showNoScroll" class="dialog-demo" :scroll="false">
        <div class="">
          <p>最终幻想世界的入口</p>
          <p>需要扫描二维码才能进入……</p>
          <img src="../assets/imgs/smallcode.jpg" style="width:70%">
        </div>
        <!-- <span class="vux-close" @click="showNoScroll=false"></span> -->
      </x-dialog>
    </div>
	</div>
</template>

<script>
  import guessLike from "./../components/guessLike"
  import reqData from "./../../../models/uop/reqData"
  import { XDialog } from 'vux'
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Selector, Group } from 'vux'

  // const baseList = [];
  
  
  export default {
    data() {
      return {
        actDetail: {},
        showNoScroll: false,
        status: {},
        demo01_list: [],
        demo01_index: 0,
        swiperItemIndex: 1,
        height: '4rem',
        defaultValue: '',
        timeList: null,
        timeSelect: null
      }
    },

    components: {
      guessLike,
      XDialog,
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider,
      Selector, 
      Group
    },

    mounted(){
      this.getStatus();
      this.getDetail({ id: this.$route.params.id });
    },

    methods: {
      //获取状态
      getStatus(){
        this.status = JSON.parse(localStorage.getItem('userStatus'));
      },

      //报名跳转
      apply() {
        let status = this.status;
        let routeName = this.$route.name;
        if( status.followState === '01' ) {
          //没关注 
          this.showNoScroll = true;
        } else if( status.followState === '00' ) {
          //关注没注册
          
          if( status.registerState === '01' ){
            let fromRoute = {
              'activityDetail' : 'actDetail'
            }
            this.$router.push({ name:'reg' , query: { type: fromRoute[routeName] }});
          }else if ( status.registerState === '00' ){
            this.$router.push({ name:'signup', query: { id: this.$route.params.id } });
          }
        }
      },

      //获取详情
      getDetail(params) {
        this.$uop.loading.show({
          text: 'Loading'
        });

        //请求详情
        reqData.req({
          apiName: 'activityDetail',
          url: '/item-service/item/getItemDetailByItemID/' + params.id
        }).then((res) => {
          this.$uop.loading.hide();
          this.checkDetail(res.data);
        }).catch((err) => {
          console.log(err);
        })
      },

      //处理详情数据
      checkDetail(data){
        let [code, detail, msg] = [data.code, data.data, data.message];
        console.log(code);
        if( code === '200' ){
          this.actDetail = detail;
          let demo01List = detail.imagesPath !== null ? detail.imagesPath.split(',') : [];
          demo01List.forEach((item, index) => {
            demo01List[index] = { 
              'img': item,
              'url': 'javascript:',
            };
          });
          this.demo01_list = demo01List;
          document.getElementById('content-text').innerHTML = detail.activityDetail;
          Date.prototype.Format = function (fmt) { //author: meizz 
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": '', //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
          }
          var timeArr = detail.dateSelect.split(',');
          var startTime = new Date().Format(timeArr[0]);
          var endTime = new Date().Format(timeArr[1]);
          this.timeSelect = startTime.substr(0, startTime.length - 3) + ' ~ ' + endTime.substr(0, startTime.length - 3);
          console.log(this.timeSelect);
        }else{
          this.$uop.toast.show({
            type: 'text',
            text: msg,
            onShow () {
            },
            onHide () {
            }
          })
        }
      },

      onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
      },
      demo01_onIndexChange (index) {
        this.demo01_index = index;
      },
    }
  }

</script>

<style lang="scss">
.content-text {
  img {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
  $baseRem: 100;

  #activity-detail{
    box-sizing: border-box;
    padding-bottom: 60px;

    //详情图片
    .img{
      height: 420rem/$baseRem;
    }

    //详情简介
    .abstract{
      padding: 25px 30px;
      border-bottom: 5px solid #EAEBF0;

      .title{
        font-size: 34rem/$baseRem; color: #000; margin-bottom: 50rem/$baseRem;
        line-height: 20px; text-align: left;
      }

      .price{
        font-size: 36rem/$baseRem; color: #E9403B; margin-bottom: 60rem/$baseRem;
      }

      .time{
        overflow: hidden; position: relative;

        span{
          float: left; 

          &:last-of-type{
            float: right;
            color: #CFD7D7;
          }

          &:nth-of-type(1){
            width: 60rem/$baseRem;
            height: 60rem/$baseRem;
            text-align: center; line-height: 60rem/$baseRem!important;
            border: 1px solid #C7CBDF; border-radius: 50%;
            text-align: center; line-height: 40rem/$baseRem;
          }

          &:nth-of-type(2){
            width: 90%;
            text-align: left!important;
            position: absolute;
            left: 15%; top: -11%;
            height: 60rem/$baseRem;
            text-align: center; line-height: 60rem/$baseRem!important;
            font-size: 24rem/$baseRem; color: #595A61;
          }
        }

      }
    }

    //详情内容
    .content{
      border-bottom: 5px solid #EAEBF0;

      //标题
      .title{
        padding: 50rem/$baseRem 0; line-height:0;

        div:nth-of-type(1){
          font-size: 30rem/$baseRem; color: #000; margin-bottom: 20rem/$baseRem; text-align: center;
        }

        div:nth-of-type(2){
          text-align: center;
          span{
            display: inline-block; width: 40rem/$baseRem; height: 6rem/$baseRem; background: #E1E8ED;
          }
        }
      }

      //文字内容
      .content-text{
        padding: 0 30px;
        word-wrap: break-word;
        font-size: 26rem/$baseRem; color: #494949; line-height: 48rem/$baseRem; 

        img{
          width: 100%;
        }
      }

      //图片内容
      .content-img{
        padding: 15px 30px;

        div{
          width: 100%; height: 366rem/$baseRem; background: yellow;
        }
      }

      //查看全部按钮
      .content-btn{
        text-align: center; padding-bottom: 25px;

        span{
          display: inline-block;
          width: 80%; height: 80rem/$baseRem; border: 1px solid #E1E8ED; border-radius: 1px;
          text-align: center; line-height: 80rem/$baseRem; font-size: 26rem/$baseRem; color: #9B9CA6;
        }
      }
    }

    // 报名按钮
    .regiser-btn{
      border-top: 1px solid #EAEBF0; padding: 10px 0; text-align: center; margin-top: 15px;

      span{
        display: inline-block;
        font-size: 24rem/$baseRem; color: #fff;
        width: 90%; height: 62rem/$baseRem; text-align: center; line-height: 62rem/$baseRem;
        background-image: linear-gradient(-49deg, #FFA280 0%, #FD4D4F 100%);
        box-shadow: 0 5px 12px 0 rgba(255,149,121,0.48); border-radius: 98px;
      }
    }
  }

  $swiper-click-default: #FFF;
  $swiper-click-active: #FFF;

  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }

  /*选择轮播按钮*/
  .swiper-item-click{
    width: 100%; text-align: center;
    position: absolute; right: 0; bottom: 15px;

    li{
      display: inline-block;
      border-radius: 50%; margin-right: 5px;
      width: 10px; height: 10px; background-color: $swiper-click-default; opacity: 0.35;
    }

    .swiper-item-click-active{
      background-color: $swiper-click-active; opacity: 1;
    }
  }
</style>