<template>
    <div class="integral">
        <!--标题部分-->
        <div class="integral-title">
            <h4>我的积分</h4>
            <span>MY CREDITS</span>
        </div>
        <!--主题部分-->
        <div class="integral-totle">
            <div class="line-title">
                <h4>总分</h4>
            </div>
            <p>{{memberPoint}}分</p>
        </div>
        <div class="inte-history">
            <ul>
                <li v-for="list in logList">
                    <p>{{list.createTime.substring(0,10)}}</p>
                    <p>
                        <span>{{list.pointSource}}</span>
                        <b>{{list.point}}分</b>
                    </p>
                </li>
            </ul>
        </div>
        <!--更多活动-->
        <div class="integral-more">
            <p>小红巢积分是小红巢用户在小红巢网站中注册、签到、分享等相关活动情况给予的奖励，仅可在小红巢网站中使用。积分作为用户参与活动时的条件，不同活动有对应的积分要求。</p>
        </div>
    </div>
</template>
<script>
    import reqData from './../../../models/uop/reqData.js'
    export default {
        data() {
            return {
                memberPoint: 0,
                logList: []
            }
        },
        mounted() {
            this.getIntegral();
        },
        methods: {
            getIntegral() {
                reqData.req({
                    apiName: 'integralManager',
                    params: {
                    }
                }).then((res)=>{
                    res = res.data
                    if(res && res.code == '200' && res.data.pointData){
                        var [data, logData] = [res.data, res.data.logData]
                        this.memberPoint = data.pointData.memberPoint;
                        for(var i=0; i<logData.length; i++){
                            switch (logData[i].pointSource){
                                case 'register':
                                    logData[i].pointSource = '注册获取';
                                default:
                            }
                        }
                        this.logList = logData;
                    }
                    console.log(res)
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    $baseFontSize: 100!default;
    .integral{
        padding: 48rem / $baseFontSize 40rem / $baseFontSize;
        .integral-title{
            margin-bottom: 130rem / $baseFontSize;
            h4{
                font-size: 30rem / $baseFontSize;
                margin-bottom: 18rem / $baseFontSize;
            }
            span{
                font-size: 24rem / $baseFontSize;
                color: #c6d1da;
            }
        }
        .integral-totle{
            border-bottom: 1px solid #EAEBF0;
            padding-bottom: 30rem / $baseFontSize;
            .line-title{
                float: left;
                border-left: 4px solid #9B9FB2;
                padding-left: 26rem / $baseFontSize;
                h4{
                    font-size: 30rem / $baseFontSize;
                }
            }
            p{
                float: right;
                color: #FFAF58;
                font-size: 30rem / $baseFontSize;
            }
            &:after{
                content: '';
                display: block;
                clear: both;
            }
        }
        .inte-history{
            &:after{
                content: '';
                display: block;
                clear: both;
            }
            ul{
                li{
                    font-size: 24rem / $baseFontSize;
                    padding: 40rem / $baseFontSize 0;
                    border-bottom: 1px solid #EAEBF0;
                    p:first-child{
                        float: left;
                        color: #595A61;
                    }
                    p:last-child{
                        float: right;
                        span{
                            color: #9B9FB2;
                            margin-right: 24rem / $baseFontSize;
                        }
                        b{
                            color: #FFAF58;
                        }
                    }
                    &:after{
                        content: '';
                        display: block;
                        clear: both;
                    }
                }
            }
        }
    }
    .integral-more{
        margin-top: 30rem / $baseFontSize;
        background-image: radial-gradient(11% 45%, #EFE2E8 11%, #E9F2F2 100%);
        border-radius: 10px;
        width: 680rem / $baseFontSize;
        line-height: 220rem / $baseFontSize;
        p{
            color: #4A4C58;
            padding: 30rem / $baseFontSize;
            font-size: 26rem / $baseFontSize;
            text-align: left;
            line-height: 50rem / $baseFontSize;
        }
    }
</style>
