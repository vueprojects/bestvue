<template>
    <div class="signup">
        <div v-if="!showAddressList">
            <div class="part_one">
                <div class="item_pic" v-if="title">
                    <img :src="picPath" alt="">
                    <div class="item_text">
                        <h3>{{title}}</h3>
                        <p>类型:{{actType}}</p>
                    </div>
                </div>
                <div class="address" :class="hasAddress ? 'has_address':'no_address'" @click="getAddressList">
                    <div v-if="hasAddress">
                        <h4>{{addressInfo.username}} {{addressInfo.tel}}</h4>
                        <p>{{addressInfo.address}}</p>
                    </div>
                    <div v-else>
                        <b class="icon_add">+</b>
                        <span>添加地址</span>
                    </div>
                </div>
                <div class="choose_attribute" v-if="attributeList" v-for="(attribute,index) of attributeList" >
                    <h4>{{attribute.attrName}}</h4>
                    <div class="attribute_list">
                        <span :class="{checked:itemIndex==0}" @click="checkAttribute($event,index,item)" v-for="(item,itemIndex) of attribute.attributeItemList" :data-itemid = "item.attrItemId">{{item.attrItemValue}}</span>
                    </div>
                </div>
                <!--<div class="choose_date_wrap">
                    <h4>选择日期</h4>
                    <div class="date">
                        <input class="choose_date" type="date" v-model="startDate" @change="changeDate($event,0)"/>
                        <input class="choose_date" type="date" v-model="endDate"  @change="changeDate($event,1)"/>
                    </div>
                </div>-->
                <div class="item_num"  v-if="title">
                    数量
                    <div class="choose_num">
                        <input type="button" class="num_btn minus" value="-" @click="changeCount(0)" :disabled="minusDisabled" />
                        <input type="number" class="num" v-model="count" @keyup="inputNum"/>
                        <input type="button" class="num_btn add" value="+" @click="changeCount(1)" :disabled="addDisabled" />
                    </div>
                </div>
            </div>
            <div class="part_two">
                <!-- <div class="distribution_way">
                    配送方式
                    <div clas="way">快递</div>
                </div> -->
                <ul>
                    <li><span>配送方式</span><div class="distribution_way">{{distributionDefault}}</div></li>
                    <li>
                        <span>备注</span>
                        <textarea v-model="remarkCon"></textarea>
                    </li>
                </ul>
                <!-- <group>
                    <popup-picker :title="distributionTit" :data="" v-model="distributionDefault"  @on-change="distributionWayChange"></popup-picker>
                    <x-input title="备注" placeholder="请填写备注内容" novalidate :icon-type="iconType" :show-clear="false" placeholder-align="right"></x-input>
                </group> -->
            </div>
            <div class="tip" v-show="isOnTime == '1'">{{isOnTimeText}}</div>
            <div class="tip" v-show="isOnTime != '1' && isSignup == '1'">{{isSignupText}}</div>
        </div>
        <div class="signup_submit_btn_wrap">
            <button class="signup_submit_btn" :disabled="isOnTime == '1' || isSignup == '1'"  @click = "signupSubmit">立即报名</button>
        </div>

        <signup-success v-if="isSuc"></signup-success>
        <address-list v-if="showAddressList"></address-list>
    </div>
</template>
<script>
    import SignupSuccess from '../components/signupPop'
    import addressList from '../components/addressList'
    // import { Group, PopupPicker, XTextarea, XInput } from 'vux'
    import reqData from '../../../models/uop/reqData'

    export default{
        components:{
            // Group,
            // DatetimeRange,
            // PopupPicker,
            // XTextarea,
            // XInput,
            SignupSuccess,
            addressList
        },
        data(){
            return{
                // openId: 'orCI-wwRn3c2RnEZORh40iGTugNs',
                // openId: JSON.parse(window.localStorage.getItem('userStatus')).openid,
                'itemID': this.$route.query.id,
                // 'itemID': 'cc819a1c-f62e-4870-91bb-0885fd68f8e8',
                'orderId':'',//订单id
                'goodsId':'',//商品id
                'skuId':'',
                'isSignup':'', // 0未报名，1已报名
                'isSignupText':'此活动您已报名,不能重复报名',
                'isOnTime':'',// 0在活动时间，1不在活动时间范围内
                'isOnTimeText':'此活动已不在活动时间范围内',
                'title': '',
                'picPath': '',
                'actType': '',
                'hasAddress':false,
                'showAddressList':false,
                'addressInfo':{
                    'addressId':'',
                    'username':'',
                    'tel': '',
                    'address': '',
                },
                "attributeList": [],
                // "attributeList": [
                //     {
                //         "attrName": "日期",
                //         "attributeItemList": [
                //             {
                //                 "attrItemId": "111",
                //                 "attrItemValue": "2017-03-29"
                //             },
                //             {
                //                 "attrItemId": "112",
                //                 "attrItemValue": "2017-03-30"
                //             }
                //         ]
                //     },
                //     {
                //         "attrName": "场次",
                //         "attributeItemList": [
                //             {
                //                 "attrItemId": "113",
                //                 "attrItemValue": "10:00-11:00"
                //             }
                //         ]
                //     }
                // ],
                 "skuMap":'',
                // "skuMap": {
                //     "111113": {
                //         "skuName": "2017-03-29 10:00-11:00",
                //         "skuCode": "111113",
                //         "limitCount": 100
                //     },
                //     "112113": {
                //         "skuName": "2017-03-30 10:00-11:00",
                //         "skuCode": "112113",
                //         "limitCount": 100
                //     }
                // },
                'chooseDateList':[],
                'skuMapId':[],
                'dateId':'',
                'chooseDate':'',
                'timeId':'',
                'chooseTime':'',
                'minusDisabled': true,
                'addDisabled':true,
                'count': 1,
                // 'distributionTit': '配送方式',
                'distributionDefault': '详见详情',
                // 'distributionDefault': ['快递'],
                // 'distributionWays': [['快递', '自取']],
                'distributionWaysState':'00',// 00快递 01自取
                'distributionWay': '',
                'remarkCon':'',
                'isSuc': false,
                'submitDisabled':true
            }
        },
        mounted(){
			this.$el.parentElement.parentElement.style.background = "#fff";
            // this.distributionWay = this.distributionDefault.join();
            
            this.$nextTick(() => {
                console.log(this);
                this.getSignupData();
                this.getAddressData();
                this.getIsSignup();
                // debugger;

                // let storeAddress = this.$store.state.saveAddress;
                // if(storeAddress.id && this.addressInfo.addressId){
                //     this.hasAddress = true;
                //     this.addressInfo.addressId = storeAddress.id;
                //     this.addressInfo.username = storeAddress.consignee;
                //     this.addressInfo.tel = storeAddress.phone;
                //     this.addressInfo.address = storeAddress.address;
                // }else{
                //     this.hasAddress = false;
                // }

            })
            // setTimeout(() => {
            //     console.log("isSignup---" + this.isSignup + ',isOnTime------' + this.isOnTime)
            // },2000)
		},
        activated(){
            // debugger;
            // let storeAddress = this.$store.state.saveAddress;
            // if(storeAddress.id && this.addressInfo.addressId){
            //     this.hasAddress = true;
            //     this.addressInfo.addressId = storeAddress.id;
            //     this.addressInfo.username = storeAddress.consignee;
            //     this.addressInfo.tel = storeAddress.phone;
            //     this.addressInfo.address = storeAddress.address;
            // }else{
            //     this.hasAddress = false;
            // }
        },
        computed:{
            updateAddress(){
                return this.$store.state.saveAddress;
            }
        },
        methods:{
            // 获取是否已报名
            getIsSignup(){
                reqData.req({
                    url: '/order-service/participates/member/'+ this.itemID,
                    apiName:'isSignup',
                    // params:{
                    //     // itemID:this.$route.query.id
                    //     itemID:'2815efa2-ae95-41d8-b106-24d9f725ef57'
                    // }
                }).then((res)=>{
                    // debugger;
                    console.log(res)
                    const resData = res.data;
                    if(resData){
                        const [code, data, msg] = [resData.code, resData.data, resData.message];
                         if(resData && code == 200){
                            this.isSignup = data;
                        }else{
                            console.log(msg);
                            this.$uop.loading.hide();
                            this.$uop.toast.show({
                                type:'text',
                                text: msg
                            })
                        }
                    }
                })

            },
            getSignupData() {
                // debugger;
                this.$uop.loading.show({
                    text: '加载中'
                })
                setTimeout(() => {
                    this.$uop.loading.hide()
                },1000)
                reqData.req({
                    apiName:'signupData',
                    params:{
                        // itemID:this.$route.query.id
                        itemID:this.itemID
                    }
                }).then((res) => {
                    // debugger;
                    // console.log(res);
                    const resData = res.data;
                    if(resData){
                        const [code, data, msg] = [resData.code, resData.data, resData.message];
                        if(code == 200){
                            this.goodsId = data.id;
                            // this.skuId = data.id;
                            this.isOnTime = data.isOnTime;
                            this.title = data.title;
                            this.picPath = data.imagePath;
                            this.actType = data.itemCategoryName;
                            this.attributeList = data.attributeList;
                            this.skuMap = data.skuMap;
                            let chooseDateList = [];
                            for(let itemFirst of data.attributeList){
                                // console.log(itemFirst.attributeItemList[0].attrItemValue);
                                chooseDateList.push(itemFirst.attributeItemList[0].attrItemValue);
                                console.log( chooseDateList)
                            }
                            if(chooseDateList.join().indexOf(',') !=-1){
                                this.chooseDateList = chooseDateList.join().replace(/,/,'');
                            }else{
                                this.chooseDateList = chooseDateList.join()
                            }
                            console.log(this.chooseDateList);
                             let attrItemIds = [],skuMap;
                             for(let itemFirst of data.attributeList){
                                // console.log(itemFirst.attributeItemList[0].attrItemValue);
                                attrItemIds.push(itemFirst.attributeItemList[0].attrItemId);
                                console.log( attrItemIds)
                            }
                            // this.skuId = attrItemIds.join();
                            if(attrItemIds.join().indexOf(',')!=-1){
                                skuMap = attrItemIds.join().replace(/,/,'');
                            }else{
                                skuMap = attrItemIds.join();
                            }
                            this.skuId = data.skuMap[skuMap]['skuId'];
                            console.log(this.skuId)


                            // this.chooseDateList = 
                        }else{
                            console.log(msg);
                            this.$uop.loading.hide();
                            this.$uop.toast.show({
                                type:'text',
                                text: msg
                            })
                        }
                    }
                }).catch((err) =>{
                    console.log(err);
                    this.$uop.loading.hide();
                    this.$uop.toast.show({
                        type:'text',
                        text: '获取数据系统异常'
                    })
                })
            },
            getAddressData(){
                reqData.req({
                    apiName: 'getAddress',
                }).then((res)=>{
                    // this.$uop.loading.hide()
                    // debugger;
                    console.log(res)
                    let resData = res.data
                    let [code, msg, data] = [resData.code, resData.message, resData.data]
                    if(resData && code == '200' && data.length > 0){
                        // this.addressInfo = res.data;
                        
                        for(let value of data){
                            // console.log(value);
                            if(value.isDefault == '00'){ //00为默认地址 01是未默认
                                this.hasAddress = true;
                                this.addressInfo.addressId = value.id;
                                this.addressInfo.addressId = value.id;
                                this.addressInfo.username = value.consignee;
                                this.addressInfo.tel = value.phone;
                                this.addressInfo.address = value.address;
                            }
                        }
                    }else{
                        this.hasAddress = false;
                        console.log(msg);
                    }
                }).catch((err) => {
                    console.log(err);
                    this.$uop.loading.hide();
                    this.$uop.toast.show({
                        type:'text',
                        text: '获取地址系统异常'
                    })
                })
            },
            // 选择地址
            getAddressList(){
                // this.$router.push({name:'addressManager',query:{enterWay:'signup'}});
                // this.hasAddress = true;
                this.showAddressList = true;
            },
            // 选择时间和场次
            checkAttribute(obj,index,item){
                // debugger;
                // console.log(obj)
                let len = obj.currentTarget.parentElement.children.length;
                for(let i=0; i<len; i++){
                    obj.currentTarget.parentElement.children[i].className = '';
                }
                if(obj.currentTarget.className == 'checked'){
                    obj.currentTarget.className = ''
                }else{
                     obj.currentTarget.className = 'checked'
                }
                // let objType = obj.currentTarget.parentElement.previousElementSibling.textContent;
                this.chooseDateList[index] = item.attrItemValue;
                // console.log(this.chooseDateList);
                // console.log('chooseDateList----'+this.chooseDateList.length);
                // console.log('attributeList----'+this.attributeList.length);
                // let sattrItemId = [];
                this.skuMapId[index]= item.attrItemId;
                // let skuMapId = this.skuMapId[index].join();
                
                if(this.chooseDateList.length == this.attributeList.length){
                    
                    if(this.skuMapId.join().indexOf != -1){
                        this.skuId = this.skuMap[this.skuMapId.join().replace(/,/,'')]['skuId'];
                    }else{
                        this.skuId = this.skuMap[this.skuMapId.join()]['skuId'];
                    }
                    
                    console.log(this.skuId)
                    // this.addDisabled = false;
                }else{
                    this.minusDisabled = true;
                    this.addDisabled = true;
                    // this.showAddressList = true;
                }
            },
            // 数量输入
            inputNum(){
                let limitCount = 1;
                if(this.chooseDateList.length != this.attributeList.length){
                    this.minusDisabled = true;
                    this.addDisabled = true;
                    this.$uop.toast.show({
                        type:'text',
                        text: '请选择日期和场次'
                    })
                    this.count = 1;
                }else{
                    this.addDisabled = false;
                    if(this.count < 2 && this.count !== ""){
                        this.count = 1;
                        this.minusDisabled = true;
                    }else if(this.count > limitCount){
                        this.minusDisabled = false;
                        this.addDisabled = true
                        this.count = limitCount;
                        this.$uop.toast.show({
                            type:'text',
                            text: '最多只能选择' + limitCount + '个'
                        })
                    }else{
                        this.minusDisabled = false;
                    }
                }
            },
            // 加减数量
            changeCount(way){
                let limitCount = 1;
                if(this.chooseDateList.length != this.attributeList.length){
                    this.minusDisabled = true;
                    this.addDisabled = true;
                }else{
                    this.addDisabled = false;
                    if (way > 0) {
                        if(this.count > limitCount){
                            this.addDisabled = true;
                            this.$uop.toast.show({
                                type:'text',
                                text: '最多只能选择' + limitCount + '个'
                            })
                        }else{
                            this.count ++;
                            this.addDisabled = false;
                            this.minusDisabled = false;
                        }
                    } else {
                        if(this.count > 0){
                            this.minusDisabled = false;
                            this.count --;
                        }else{
                            this.count = 0;
                            this.minusDisabled = true
                        }
                    }
                }
            },
            // 配送方式选择
            distributionWayChange (val) {
		    //   console.log('val change', val)
            //   this.distributionWay = val.join();
              this.distributionWaysState = '0' + this.distributionWays[0].indexOf(val.join()).toString();
		    },
            // 提交报名
            signupSubmit(){
                // debugger;
                let list = {
                    // skuId: this.$route.query.id,
                    id:this.goodsId,
                    skuId: this.skuId,
                    title: this.title,
                    picPath: this.picPath,
                    receiveAddressId: this.addressInfo.addressId,
                    skuDesc: this.chooseDateList.join(),
                    count: this.count,
                    distribution: this.distributionWaysState,
                    remark: this.remarkCon
                }
                // console.log(list);
                if(this.isOnTime == 1){
                    this.$uop.toast.show({
                        type:'text',
                        text: '此活动不在活动时间范围内'
                    })
                }else if(this.count < 1 ){
                    this.$uop.toast.show({
                        type:'text',
                        text: '数量不能小于1'
                    })

                }else if(this.chooseDateList.length < 1){
                    this.$uop.toast.show({
                        type:'text',
                        text: '请选择日期或场次'
                    })
                }else if(!this.hasAddress){
                    console.log('has_address---'+ this.hasAddress);
                    this.$uop.toast.show({
                        type:'text',
                        text: '请添加收货地址'
                    })
                }else{
                    let vue = this;
                    this.$uop.loading.show({
                        text: '加载中'
                    })
                    setTimeout(() => {
                        vue.$uop.loading.hide()
                    },1000)
                    console.log(list);

                    reqData.req({
                        apiName:'submitSignup',
                        params:list
                    }).then((res) => {
                        // debugger;
                        const resData = res.data;
                        const [code,msg,data]= [resData.code,resData.message,resData.data]
                        console.log(res);
                        if(code == 200){
                            this.orderId = data;
                            this.$uop.loading.hide();
                            this.submitDisabled = false;
                            this.isSuc = true;
                        }else{
                            console.log(msg);
                            this.$uop.toast.show({
                                type:'text',
                                text: msg
                            })
                        }
                    }).catch((err) => {
                        console.log(err);
                        this.$uop.loading.hide();
                        this.$uop.toast.show({
                            type:'text',
                            text: '系统异常'
                        })
                    })
                }
            },
        }
    }
</script>
<style lang="scss">
    $baseFontSize:100;
    .weui-cells{
        font-size: 26rem / $baseFontSize !important;
    }
    .weui-label{
    //    color: #595A61;
    }
    .vux-popup-picker-select span{
        color: #595A61;
    }
</style>