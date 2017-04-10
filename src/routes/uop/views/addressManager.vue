<template>
    <div class="">
        <!--标题部分-->
        <div class="integral">
            <div class="integral-title">
                <h4>管理收货地址</h4>
                <!--<span>ADDRESS</span>-->
            </div>
            <div class="address-cont">
                <ul>
                    <li v-for="address in addressList">
                        <div class="address-left" @click="chooseAddress(address)">
                            <p><span>{{address.isDefault == '00' ? '[默认]':''}}</span><span>{{address.consignee}}</span><span>{{address.phone}}</span></p>
                            <p>{{address.province}} {{address.city}} {{address.county}}</p>
                            <p>{{address.address}}</p>
                        </div>
                        <div class="address-check">
                            <div class="address-default">
                                <label @click="setDefault(address.id)">
                                    <i :class="address.isDefault == '00'?'icon-uop_checkbox_black_clicked':'icon-uop_checkbox'"></i><span>设为默认地址</span>
                                </label> 
                                <p>
                                    <label @click="editAddress(address.id)">
                                        <i class="icon-uop_edit"></i><span>编辑地址</span>
                                    </label>
                                    <label @click="addressDel(address.id, address.isDefault)">
                                        <i class="icon-uop_delete red"></i><span>删除地址</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </li>
                    <!-- <li v-for="address in addressList">
                        <div class="address-left" @click="chooseAddress(address)">
                            <p><span>{{address.consignee}}</span><span>{{address.phone}}</span></p>
                            <p>上海市 浦东新区</p>
                            <p>{{address.address}}</p>
                        </div>
                        <div class="address-check">
                            <div class="address-default">
                                <label>
                                    <i class="icon-uop_checkbox"></i><span>设为默认地址</span>
                                </label>
                                <p>
                                    <label>
                                        <i class="icon-uop_edit"></i><span>编辑地址</span>
                                    </label>
                                    <label>
                                        <i class="icon-uop_delete red"></i><span>删除地址</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </li> -->
                    <!-- <li>
                        <div class="address-left" @click="chooseAddress($event)">
                            <p><span>张婕</span><span>13802833246</span></p>
                            <p>上海市 浦东新区</p>
                            <p>东方路2000号新世纪花苑3号楼1902室</p>
                        </div>
                        <div class="address-check">
                            <div class="address-default">
                                <label>
                                    <i class="icon-uop_checkbox"></i><span>设为默认地址</span>
                                </label>
                                <p>
                                    <label>
                                        <i class="icon-uop_edit"></i><span>编辑地址</span>
                                    </label>
                                    <label>
                                        <i class="icon-uop_delete red"></i><span>删除地址</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
        <div v-transfer-dom>
            <confirm v-model="show" :title="删除操作"
            @on-cancel="onCancel"
            @on-confirm="onConfirm"
            @on-show="onShow"
            @on-hide="onHide">
                <p style="text-align:center;"> 确定删除？</p>
            </confirm>
        </div>
        <div class="address-pad">
            <button type="button" class="btn-addressyes" @click="addNewAddress">添加新地址</button>
        </div>
    </div>
</template>
<script>
    import { Confirm, TransferDomDirective as TransferDom } from 'vux'
    import reqData from './../../../models/uop/reqData.js'
    export default {
        directives: {
            TransferDom
        },
        components: {
            Confirm
        },
        data() {
            return {
                addressList: [],
                show: false,
                deleteId:'',
                deleteDelft: ''
                // addressList: [
                //     {
                //         'consignee':'Fiona',
                //         'phone':'15212345678',
                //         'address':'东方路2000号新世纪花苑3号楼1902室'
                //     },
                //     {
                //         'consignee':'Amanda',
                //         'phone':'22222',
                //         'address':'东方路2000号新世纪花苑3号楼1902室'
                //     }
                // ]
            }
        },
        mounted() {
            this.getAddress();
        },
        activated(){
            this.getAddress();
        },
        methods: {
            onCancel () {
                console.log('on cancel')
            },
            onConfirm () {
                reqData.req({
                    apiName: 'addAddress',
                    method: 'delete',
                    params: {
                        id: this.deleteId,
                        isDefault: this.deleteDelft
                    }
                }).then((res)=>{
                    this.$uop.loading.hide()
                    this.getAddress()
                }).catch((error)=>{
                    this.$uop.loading.hide();
                    this.$uop.toast.show({
                        type: 'text',
                        text: '系统异常'
                    })
                })
            },
            onHide () {
                console.log('on hide')
            },
            onShow () {
                console.log('on show')
            },
            // 获取地址数据
            getAddress(){
                this.btn_opening_press = true;
                this.btn_opening = false;
                this.$uop.loading.show({
                    text: '加载中'
                })
                reqData.req({
                    apiName: 'getAddress',
                    params:{
                    }
                }).then((res)=>{
                    this.$uop.loading.hide()
                    res = res.data
                    if(res && res.code == '200'){
                        this.addressList = res.data;
                    }
                })
            },
            // 设置默认   
            setDefault(id) {
                this.btn_opening_press = true;
                this.btn_opening = false;
                this.$uop.loading.show({
                    text: '加载中'
                })
                reqData.req({
                    apiName: 'setDefault',
                    params: {
                        id: id
                    }
                }).then((res)=>{
                    this.$uop.loading.hide()
                    this.getAddress()
                }).catch((error)=>{
                    this.$uop.loading.hide();
                    this.$uop.toast.show({
                        type: 'text',
                        text: '系统异常'
                    })
                })
                console.log(id)
            },
            // 编辑地址
            editAddress(id) {
                this.$router.push({name:'addressEdit',query:{id:id, type:'edit'}})
            },
            // 删除地址
            addressDel(id, defaults) {
                this.deleteId = id;
                this.deleteDelft = defaults;
                this.show = true;
            },
            // 添加新地址
            addNewAddress() {
                this.$router.push({name:'addressEdit'})
            },
            chooseAddress(address){
                if(this.$route.query.enterWay == 'signup'){
                    this.$store.commit('SAVE_ADDRESS',address);
                    this.$router.back();
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
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
        .address-cont{
            font-size: 28rem / $baseFontSize;
            margin-bottom: 100rem / $baseFontSize;
            ul{
                li{
                    position: relative;
                    padding: 20rem / $baseFontSize 0;
                    border-bottom: 8px solid #EAEBF0;
                    .address-left{
                        width: 100%;
                        box-sizing: border-box;
                        -webkit-box-sizing: border-box;
                        border-bottom: 1px solid #EAEBF0;
                        padding-bottom: 15rem / $baseFontSize; 
                        p{
                            font-size: 26rem / $baseFontSize;
                            padding: 15rem / $baseFontSize;
                            color: #595A61;
                            &:first-child{
                                span{
                                    font-size: 28rem / $baseFontSize;
                                    margin-right: 14rem / $baseFontSize;
                                    &:first-child{
                                        color: #EA403B;
                                    }
                                    &:last-child{
                                        margin-left: 30rem / $baseFontSize;
                                        color: #9B9FB2;
                                    }
                                }
                            }
                        }
                    }
                    .address-right{
                        width: 20%;
                        position: absolute;
                        top: 50%;
                        right: 0;
                        margin-top: 10rem / $baseFontSize;
                        transform: translateY(-50%);
                        text-align: center;
                        height: 119rem / $baseFontSize;
                        color: #9B9FB2;
                        img{
                            width: 26rem / $baseFontSize;
                            height: 26rem / $baseFontSize;
                            margin-bottom: 15rem / $baseFontSize;
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
        .address-check{
                padding: 35rem / $baseFontSize 15rem / $baseFontSize;
                padding-bottom: 10rem / $baseFontSize;
                .address-default{
                    p{
                        float: right;
                    }
                    label{
                        float: left;
                        margin-right: 20rem / $baseFontSize;
                    }
                    i{
                        float: left;
                        &.red{
                            color: red;
                        }
                    }
                    span{
                        font-size: 24rem / $baseFontSize;
                        margin-left: 15rem / $baseFontSize;
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
            position: fixed;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
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
</style>