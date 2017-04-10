<template>
  <div id="detail-indent">

    <!-- 顶部状态部分 -->
    <div class="status">
      <div v-show=" detail.orderStatus === '00' ">
        <span>待审核</span>
      </div>

      <div v-show=" detail.orderStatus === '01' ">
        <span>审核通过</span>
      </div>

      <div v-show=" detail.orderStatus   === '02' ">
        <span>审核不通过</span>
      </div>
    </div>

    <!-- 订单详情上部分 -->
	  <div class="top">
      <div style="padding:0 30px;width:100%;">
        <div class="title">
          <div class="img">
            <img v-bind="{'src': details.picPath}" style="width: 100%; height: 100%;" /> 
          </div>
          <div class="title-content">
            <div class="title-content-top">{{ details['itemTitle'] }}</div>
            <div class="title-content-bottom">{{ detail.orderType | textDict('indentTypes') }}</div>
          </div>
          <div class="check" @click="toActivityDetail(details.itemId)">
            <span>&nbsp;&nbsp;&gt;</span><br/><br/>
            <span>查看</span>
          </div>
        </div>
        <div class="content">
          <div class="content-item">日期：{{ details['skuDesc'] }}</div>
          <div class="content-item">电子票，{{ details['buyCount'] }}份</div>
          <div class="content-item">全国</div>
        </div>
      </div>
    </div>

    <!-- 订单详情下部分 -->
    <div class="bottom">
      <div class="title">{{ indentDetailText['indent-detail'] }}</div>
      <div class="content">
        <div class="item">
          <span style="float:left;">{{ indentDetailText['indent-person'] }}</span>
          <span style="float:right;">{{ detail['memberName'] }}, {{ detail['phone'] }}</span>
        </div>
<!--         <div class="item">
          <span style="float:left;">{{ indentDetailText['indent-type'] }}</span>
          <span style="float:right;">电子票</span>
        </div> -->
        <div class="item">
          <span style="float:left;">{{ indentDetailText['indent-total'] }}</span>
          <span style="float:right;">×{{ details['buyCount'] }}</span>
        </div>
      </div>
      <div class="indent-detail">
        <div class="item">
          <span style="float:left;">{{ indentDetailText['indent-number'] }}</span>
          <span style="float:right;">{{ details['orderNo'] }}</span>
        </div>
        <div class="item">
          <span style="float:left;">{{ indentDetailText['indent-time'] }}</span>
          <span style="float:right;">{{ detail['createTime'] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bottomNav from "./../components/bottomNav"
  import indentDetailTextJson from "./../json/indentDetailTextJson"

  import reqData from "./../../../models/uop/reqData"

  export default {
    data() {
      return {
        indentDetailText: indentDetailTextJson,
        detail: {},
        details: {}
      }
    },
    mounted() {
      this.getIndentDetail(this.$route.params.id);
    },
    methods: {
      //跳转活动详情
      toActivityDetail(id){
        this.$router.push({ name: 'activityDetail', params: { id }})
      },

      //请求订单详情
      getIndentDetail(id){
        this.$uop.loading.show({
          text: 'Loading'
        });
        //请求详情
        reqData.req({
          apiName: 'allIndent',
          url: '/order-service/orders/' + id,
          method: 'get',
        }).then((res) => {
          this.$uop.loading.hide();
          this.checkDetail(res.data);
        }).catch((err) => {
          this.$uop.loading.hide();
          this.$uop.toast.show({
            type: 'text',
            text: '系统异常',
            onShow () {
            },
            onHide () {
            }
          })
        })
      },

      //处理订单详情数据
      checkDetail(data){
        let [code, detail, msg] = [data.code, data.data, data.message];
        if( code === '200' ){
          this.detail = detail;
          this.detail['createTime'] = '2' + new Date(detail.createTime).getYear() + '-' + new Date(detail.createTime).getMonth() + '-' + new Date(detail.createTime).getDate();
          this.details = detail.details[0];
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
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "./../assets/css/sass/function.scss";
  $baseRem: 100;

  #detail-indent{

    //订单详情顶部分
    .status{
      div{
        height: cPX(80rem); font-size: cPX(24rem);
        text-align: center; line-height: cPX(80rem); 
      }

      div:nth-of-type(1){
        color: #4A4C58;
        background-image: radial-gradient(11% 45%, #EFE2E8 11%, #E9F2F2 100%);
      }

      div:nth-of-type(2){
        color: #FFF;
        background-image: linear-gradient(44deg, #8790B5 0%, #C1C9EC 100%);
        box-shadow: 0 5px 12px 0 rgba(190,197,229,0.51);
      }

      div:nth-of-type(3){
        color: #FFF;
        background-image: linear-gradient(90deg, #FF8455 0%, #FFBB65 100%);
        box-shadow: 0 5px 12px 0 rgba(255,194,121,0.68);
      }
    }

    //订单详情上部分
    .top{
      border-bottom: 3px solid #EAEBF0;

      .title{
        width: 100%; overflow: hidden; padding: 20px 0; border-bottom: 1px solid #F7F8FB;

        .img{
          float: left;
          width: 160rem/$baseRem;
          height: 160rem/$baseRem;
        }

        .title-content{
          float: left; width: 42%; margin-left: 10px;

          .title-content-top{
            width: 100%;
            word-wrap: break-word;
            font-size: 26rem/$baseRem; color: #000;
          }

          .title-content-bottom{
            padding-top: 5px;
            font-size: 22rem/$baseRem; color: #9B9FB2;
          }
        }

        .check{
          float: left;margin-top: 5px;
          border-left: 1px solid #EAEBF0; padding: 8px 15px;

          span{
            color: #9B9FB2;
          }
        }
      }

      .content{
        padding: 10px 0;
        .content-item{
          width: 100%; margin-bottom: 10px; color: #595A61;
        }
      }
    }

    //订单详情下部分
    .bottom{
      .title{
        font-size: 24rem/$baseRem; padding: 15px 30px;
      }

      .content{
        border-bottom: 1px solid #F7F8FB;

        .item{
          margin-bottom: 10px; padding:0 30px; overflow: hidden;

          span{
            font-size: 24rem/$baseRem; color: #595A61;
          }
        }
      }

      .indent-detail{
        padding:15px 0;

        .item{
          margin-bottom: 10px; padding:0 30px; overflow: hidden;

          span{
            font-size: 24rem/$baseRem; color: #595A61;
          }
        }
      }
    }

  }
</style>