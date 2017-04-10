<template>
    <div id="app">
        <!--头部内容-->
        <div class="user-header">
            <img :src="userInfo.headimgUrl">
            <p>{{userInfo.nickName}}</p>
        </div>
        <!--积分部分-->
        <div class="integral-cont">
            <div class="integral-header arrowparent">
                <p class="arrow">积分 <router-link :to="{name:'intergral'}" tag="span" class="colororange">{{userInfo.memberPoint}}分</router-link></p>
            </div>
<!--             <div class="integral-img" v-show="!noOrder">
                <flexbox>
                    <flexbox-item>
                        <div class="flex-demo">
                            <img src="../assets/imgs/int-img1.png">
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo">
                            <img src="../assets/imgs/int-img1.png">
                        </div>
                    </flexbox-item>
                </flexbox>
            </div> -->
        </div>
        <!--订单部分-->
        <div class="integral-cont">
            <div class="integral-header arrowparent">
                <p class="arrow"><b class="colorblack">我的订单</b> <router-link :to="{name:'allIndent'}" tag="span" class="colorgray">全部订单</router-link></p>
            </div>
            <template v-if="noOrder">
                <div class="integral-img" @click="toActivityDetail">
                    <div class="activitys">
                        <img src="../assets/imgs/huodong.png">
                    </div>
                    <div class="activity-detail">
                        <h4>{{userOrder.itemTitle}}</h4>
                        <p>数量：{{userOrder.buyCount}}件</p>
                        <p>日期：2017年2月14日</p>
                    </div>
                </div>
                <div class="totle-bot">
                    <h4>总计：{{userOrder.orderPrice}}元</h4>
                    <button type="button" class="btn-success">{{userOrder.orderStatus  | textDict('indentStatus') }}</button>
                </div>
            </template>
            <div class="noOrder"  v-if="!noOrder">
                <p>暂无订单</p>
            </div>
        </div>
        <!--其他-->
        <div class="otheruser">
            <ul>
                <router-link :to="{name:'addressManager'}" tag="li"><p class="arrowparent"><span class="arrow">地址管理</span></p></router-link>
            </ul>
        </div>
        <!-- 底部导航 -->
		<div style="position:fixed;bottom:0;width:100%;background:#fff;">
		  <bottom-nav></bottom-nav>
		</div>
    </div>
</template>
<script>
import { Cell, Group, Masker, Flexbox, FlexboxItem, Panel } from 'vux'
import bottomNav from "./../components/bottomNav"
import reqData from './../../../models/uop/reqData.js'
export default {
  data() {
    return {
        userInfo:{
            headimgUrl: '',
            nickName: '',
            memberPoint: ''
        },
        orderDetail: {},
        noOrder: true,
        userOrder: {
            id: '',
            img: '',
            itemTitle: '',
            buyCount: '',
            buyDate: '',
            orderPrice: '',
            orderStatus: ''
        }
       
    }
  },
  components: {
    Group,
    Cell,
    Masker,
    Flexbox,
    FlexboxItem,
    Panel,
    bottomNav
  },
  mounted() {
    this.getUserInfo();
    this.getOrderInfo();
  },
  methods: {
    //跳转详情
    toActivityDetail() {
        this.$router.push({name: 'detailIndent', params: { id: this.userOrder.id } })
    },
    // 获取个人信息数据
    getUserInfo() {
        reqData.req({
            apiName: 'userInfo',
            params: {
            }
        }).then((res)=>{
            res = res.data
            if(res && res.code == '200'){
                var [data] = [res.data]
                this.userInfo.headimgUrl = data.headimgUrl;
                this.userInfo.nickName = data.nickName;
                this.userInfo.memberPoint = data.memberPoint;

            }
            console.log(res)
        }).catch((error)=>{

        })
    },
    // 获取订单数据
    getOrderInfo() {
        reqData.req({
            apiName: 'userOrder',
            params:{
                page: 1,
                pageSize: 1
            }
        }).then((res)=>{
            res = res.data
            if(res && res.code == '200'){
                var [data] = [res.data]
                if(data.length == 0){
                    this.noOrder = false;
                    return;
                }
                this.orderDetail = data;
                this.userOrder.id = data[0].id;
                this.userOrder.itemTitle = data[0].details[0].itemTitle;
                this.userOrder.buyCount = data[0].details[0].buyCount;
                if(data[0].orderPrice != null){
                    this.userOrder.orderPrice = data[0].orderPrice;
                }else{
                    this.userOrder.orderPrice = '0'
                }
                this.userOrder.orderStatus = data[0].orderStatus;
            }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
    $baseFontSize: 100!default;
    .arrowparent{
        position: relative;
        .arrow:after{
            content: " ";
            display: inline-block;
            height: 6px;
            width: 6px;
            border-width: 2px 2px 0 0;
            border-color: #C8C8CD;
            border-style: solid;
            -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            position: relative;
            top: -2px;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 2px;
        }
    }
    .noOrder{
        p{
            text-align: center;
            padding: 50rem / $baseFontSize;
        }
    }
    .user-header{
        background-image: url(./../assets/imgs/userbg.png);
        width: 750rem / $baseFontSize;
        height: 325rem / $baseFontSize;
        background-size: 100% 100%;
        text-align: center;
        img{
            border-radius: 50%;
            width: 136rem / $baseFontSize;
            height: 136rem / $baseFontSize;
            margin-top: 60rem / $baseFontSize;
            margin-bottom: 20rem / $baseFontSize;
        }
    }
    .m-img {
        padding-bottom: 33%;
        display: block;
        position: relative;
        max-width: 100%;
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        border-radius: 2px;
    }
    .m-title {
        color: #fff;
        text-align: center;
        text-shadow: 0 0 2px rgba(0, 0, 0, .5);
        font-weight: 500;
        font-size: 16px;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
    }

    .m-time {
        font-size: 12px;
        padding-top: 4px;
        border-top: 1px solid #f0f0f0;
        display: inline-block;
        margin-top: 5px;
    }
    .integral-cont{
        .integral-header{
            padding: 0 0 0 23rem / $baseFontSize;
            border-bottom: 1px solid #F7F8FB;
            margin: 0 46rem / $baseFontSize 0 23rem / $baseFontSize;
            font-size: 24rem / $baseFontSize;
            .colorblack{
                font-weight: normal;
                color: #000000;
            }
            p{
                // line-height: 1.2rem;
                padding: 34rem / $baseFontSize 0;
                color: #595A61;
            }
            span{
                float: right;
                margin-right: 30rem / $baseFontSize;
                &.colorgray{
                    color: #9B9FB2;
                }
                &.colororange{
                    color: #FFAF58;
                }
            }
        }
        .integral-img{
            margin: 0.3rem 46rem / $baseFontSize;
            &:after{
                content: '';
                display: block;
                clear: both;
            }
            img{
                width: 100%;
            }
            .activitys{
                float: left;
                width: 160rem / $baseFontSize;
                height: 160rem / $baseFontSize;
                img{
                    width: 100%;
                }
            }
            .activity-detail{
                float: left;
                width: 450rem / $baseFontSize;
                height: 160rem / $baseFontSize;
                padding: 20rem / $baseFontSize;
                padding-top: 0;
                box-sizing: border-box;
                h4{
                    font-weight: bold;
                    font-size: 22rem / $baseFontSize;
                }
                p{
                    margin-top: 0.2rem;
                    font-size: 20rem / $baseFontSize;
                }
            }
        }
    }
    .totle-bot{
        padding: 0 46rem / $baseFontSize;
        h4{
            float: left;
            color: #e9403b;
            margin-top: 20rem / $baseFontSize;
            font-size: 24rem / $baseFontSize;
        }
    }
    .btn-success{
        float: right;
        border: none;
        background: linear-gradient(left,#FFA280,#FD4D4F);
        background: -webkit-linear-gradient(left,#FFA280,#FD4D4F);
        font-size: 20rem / $baseFontSize;
        color: #ffffff;
        border-radius: 40rem / $baseFontSize;
        padding: 15rem / $baseFontSize 40rem / $baseFontSize;
        outline: none;
        box-shadow: 0 0 10px rgba(253, 77, 79, .5);
        -webkit-box-shadow: 0 0 10px rgba(253, 77, 79, .5);
    }
    .totle-bot:after{
        content: '';
        display: block;
        clear: both;
    }
    .otheruser{
        margin-top: 25rem / $baseFontSize;
        margin-bottom: 120rem / $baseFontSize;
        ul{
            border-top: 1px solid #EAEBF0;
            border-bottom: 1px solid #EAEBF0;
            li{
                font-size: 26rem / $baseFontSize;
                height: 110rem / $baseFontSize;
                line-height: 110rem / $baseFontSize;
                padding: 0 46rem / $baseFontSize;
                p:after{
                    content: '';
                    right: 23rem / $baseFontSize;
                }
                &:after{
                    content: '';
                    display: block;
                    // border-bottom: 1px solid #EAEBF0;
                }
                &:last-child{
                    border-bottom: none;
                }
                &:active{
                    background: #f6f6f6;
                }
            }
        }
    }
</style>