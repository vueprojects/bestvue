<template>
    <div class="integral">
        <!--标题部分-->
        <div class="integral-title">
            <h4>个人信息</h4>
            <span>INFORMATION</span>
        </div>
        <!--主题部分-->
        <div class="infor-cont">
            <ul>
                <li class="arrowparent">
                    <p>头像</p>
                    <span class="arrow"><img :src="userInfo.headimgUrl"></span>
                </li>
                <li class="arrowparent">
                    <p>昵称</p>
                    <span class="arrow">{{userInfo.nickName}}</span>
                </li>
                <li class="arrowparent">
                    <p>性别</p>
                    <span class="arrow">{{userInfo.sex == '1'?'男':'女'}}</span>
                </li>
                <!--<li class="arrowparent">
                    <p>生日</p>
                    <span class="arrow">1982年10月21日</span>
                </li>-->
                <li class="arrowparent">
                    <p>收货地址</p>
                    <span class="arrow"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import reqData from './../../../models/uop/reqData.js'
    export default {
        data() {
            return {
                userInfo: {
                    headimgUrl: '',
                    nickName: '',
                    sex: ''
                }
            }
        },
        mounted() {
            this.getUserInfo();
        },
        methods: {
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
                        this.userInfo.sex = data.sex;

                    }
                    console.log(res)
                }).catch((error)=>{

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
    .integral{
        padding: 48rem / $baseFontSize 40rem / $baseFontSize;
        .integral-title{
            margin-bottom: 100rem / $baseFontSize;
            h4{
                font-size: 30rem / $baseFontSize;
                margin-bottom: 18rem / $baseFontSize;
            }
            span{
                font-size: 24rem / $baseFontSize;
                color: #c6d1da;
            }
        }
        .infor-cont{
            ul{
                li{
                    &:first-child{
                        padding-top: 0;
                        padding-bottom: 30rem / $baseFontSize;
                        p{
                            margin-top: 55rem / $baseFontSize;
                        }
                    }
                    padding: 40rem / $baseFontSize;
                    border-bottom: 1px solid #EAEBF0;
                    p{
                        float: left;
                        color: #595A61;
                    }
                    span{
                        display: block;
                        float: right;
                        color: #9B9FB2;
                        img{
                            border-radius: 50%;
                            width: 120rem / $baseFontSize;
                            height: 120rem / $baseFontSize;
                            vertical-align: middle;
                            margin-top: 15rem / $baseFontSize;
                        }
                    }
                    b{
                        float: right;
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
</style>