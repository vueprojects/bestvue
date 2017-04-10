<template>
    <div class="integral">
        <!--标题部分-->
        <div class="integral-title">
            <h4>{{addandedit}}收货地址</h4>
            <!--<span>EDIT ADDRESS</span>-->
        </div>
        
        <div class="infor-cont">
            <ul>
                <li class="arrowparent">
                    <p>收货人名</p>
                    <input type="text" class="int-right" v-model="address.consignee" placeholder="请输入姓名">
                </li>
                <li class="arrowparent">
                    <p>手机号码</p>
                    <input type="number" class="int-right" v-model="address.phone" placeholder="请输入手机号码">
                </li>
                <li class="arrowparent" style="padding: 0">
                    <group label-align="right">
                        <x-address title="所在地区"  v-model="addressValue" raw-value :list="addressData" value-text-align="left" placeholder="请选择所在城市"></x-address>
                    </group>
                </li>
                <li class="arrowparent">
                    <p>街道地址</p>
                    <input type="text" class="int-right" v-model="address.address" placeholder="请输入街道地址">
                </li>
            </ul>
        </div>
        <div class="address-pad">
            <button type="button" @click="addToEdit" class="btn-addressyes">{{$route.query.id?'确认修改':'新增地址'}}</button>
        </div>
    </div>
</template>
<script>
    import { Group, ChinaAddressData, XAddress,  Value2nameFilter as value2name } from 'vux'
    import reqData from './../../../models/uop/reqData.js'
    export default {
        components: {
            Group,
            XAddress
        },
        mounted() {
            this.$el.parentElement.parentElement.style.background = '#ffffff';
            if(this.$route.query.id){
                this.addandedit = '编辑'
                this.pushAddress()
            }
        },
        data () {
            return {
                addressData: ChinaAddressData,
                addressValue: [],
                btnText:'',
                addandedit: '新增',
                address: {
                    phone: '',
                    consignee: '',
                    province: '',
                    city: '',
                    county: '',
                    address: '',
                    addressCode: ''
                }
            }
        },
        methods: {
            // 新增方法
            addToEdit() {
                window.clearTimeout(this.tId)
                this.tId = window.setTimeout(()=> {
                    var sMobile = /^1[34578]\d{9}$/
                    if(this.address.consignee == ''){
                        this.$uop.toast.show({
                            type:'text',
                            text: '请填写收货人名'
                        })
                        return;
                    }
                    if(this.address.phone == ''){
                        this.$uop.toast.show({
                            type:'text',
                            text: '请填写手机号'
                        })
                        return;
                    }
                    // debugger
                    if(!sMobile.test(this.address.phone) ||  this.address.phone.length != 11){
                        this.$uop.toast.show({
                            type:'text',
                            text: '手机号输入错误'
                        })
                        return;
                    }
                    if(this.addressValue.length == 0){
                        this.$uop.toast.show({
                            type:'text',
                            text: '请选择所在地区'
                        })
                        return;
                    }
                    if(this.address.address == ''){
                        this.$uop.toast.show({
                            type:'text',
                            text: '请填写街道地址'
                        })
                        return;
                    }

                    this.btn_opening_press = true;
                    this.btn_opening = false;
                    this.$uop.loading.show({
                        text: '加载中'
                    })
                    this.address.addressCode = this.addressValue.join(",");
                    var valueAdd = this.getName(this.addressValue)
                    var provien = valueAdd.split(" ")
                    this.address.province = provien[0]
                    this.address.city = provien[1]
                    this.address.county = provien[2]
                    if(this.$route.query.id){
                        this.address.id = this.$route.query.id
                        reqData.req({
                            apiName: 'addAddress',
                            method: 'put',
                            data: this.address
                        }).then((res)=>{
                            this.$uop.loading.hide()
                            this.$router.back();
                        })
                    }else{
                        reqData.req({
                            apiName: 'addAddress',
                            data: this.address
                        }).then((res)=>{
                            this.$uop.loading.hide()
                            this.$router.back();
                        })
                    }
                }, 10)
            },
            // 编辑地址填充
            pushAddress() {
                this.btn_opening_press = true
                this.btn_opening = false
                this.$uop.loading.show({
                    text: '加载中'
                })
                reqData.req({
                    apiName: 'addAddress',
                    url:'/member-service/address/'+ this.$route.query.id +'/address',
                    method: 'get',
                    params: {
                        
                    }
                }).then((res)=>{
                    this.$uop.loading.hide()
                    res = res.data
                    if(res && res.code == '200'){
                        this.address.consignee = res.data.consignee
                        this.address.phone = res.data.phone
                        // debugger
                        this.addressValue = res.data.addressCode.split(",")
                        // this.addressValue[1] = res.data.city
                        // this.addressValue[2] = res.data.county
                        console.log(this.addressValue)
                        this.address.address = res.data.address
                    }
                })
            },
            // 转换
            getName (value) {
                return value2name(value, this.addressData)
            }
        }
    }
</script>
<style lang="scss">                                
    $baseFontSize: 100!default;
    .integral{
        padding: 48rem / $baseFontSize 40rem / $baseFontSize;
        .integral-title{
            margin-bottom: 80rem / $baseFontSize;
            h4{
                font-size: 30rem / $baseFontSize;
                margin-bottom: 18rem / $baseFontSize;
            }
            span{
                font-size: 24rem / $baseFontSize;
                color: #c6d1da;
            }
        }
        .arrowparent .weui-cells .vux-cell-box:before{
            border-top: none!important;
        }
        .arrowparent .weui-cells:before{
            border-top: none!important;
        }
        .arrowparent .weui-cells:after{
            border-bottom: none!important;
        }
        .arrowparent .weui-label{
            font-size: 30rem / $baseFontSize;
            color: #595A61;
        }
        .arrowparent .vux-popup-picker-value{
            font-size: 30rem / $baseFontSize;
        }
        .arrowparent .weui-cells{
            margin-top: 0;
            padding: 15rem / $baseFontSize 5rem / $baseFontSize;
        }
        .arrowparent .vux-popup-picker-select span{
            font-size: 35rem / $baseFontSize;
            float: none;
            padding-right: 10rem / $baseFontSize;
            margin-left: 70rem / $baseFontSize;
        }
        .int-right{
            height: 40rem / $baseFontSize;
            line-height: 40rem / $baseFontSize;
            outline: none;
            float: right;
        }
        .infor-cont{
            ul{
                li{
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
        .address-pad{
            padding: 20rem / $baseFontSize;
            .btn-addressyes{
                border: none;
                width: 100%;
                padding: 30rem / $baseFontSize;
                background-image: linear-gradient(90deg, #F4F4F6 0%, #DAD8E0 100%);
                box-shadow: 0 5px 12px 0 #F3F2F6;
                border-radius: 100px;
                outline: none;
                font-family: 'HYQiHei-FZS';
                font-size: 26rem / $baseFontSize;
                color: #8F92A0;
                box-sizing: border-box;
            }
        }
    }
</style>