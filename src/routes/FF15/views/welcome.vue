<template>
    <div id="container">
        <div class="top"></div>
        <div class="bottom">
            <scroller lock-y :scrollbar-x=false class="scrollbottom">
                <div class="box1">
                    <div class="box1-item" v-for="(item,index) in list">
                        <img class="previewer-demo-img" :src='item.src' width='192' @click="show(index)">
                    </div>
                </div>
            </scroller>
            <previewer :list="list" ref="previewer" :options="options"></previewer>
            <div class="btn" @click="press" v-bind:class="{ btn_opening:btn_opening, 'btn_opening_press': btn_opening_press }">
            </div>
        </div>
        <x-dialog v-model="showNoScroll" class="dialog-demo" :scroll="false">
            <div class="">
                <p>最终幻想世界的入口</p>
                <p>需要扫描二维码才能进入……</p>
                <img src="../assets/imgs/smallcode.jpg" style="width:70%">
            </div>
            <!-- <span class="vux-close" @click="showNoScroll=false"></span> -->
        </x-dialog>
    </div>
</template>
<script>
    import reqData from './../../../models/ff15/reqData'
    import { XDialog, Scroller, Previewer } from 'vux'

    export default {
        beforeCreate() {
            this.list = [
                {
                    src: require('../assets/imgs/award-1_large.png'),
                    w: 340,
                    h: 340
                }, {
                    src: require('../assets/imgs/award-2_large.png'),
                    w: 340,
                    h: 340
                }, {
                    src: require('../assets/imgs/award-3_large.png'),
                    w: 340,
                    h: 340
                }, {
                    src: require('../assets/imgs/award-4_large.png'),
                    w: 340,
                    h: 340
                }, {
                    src: require('../assets/imgs/award-5_large.png'),
                    w: 340,
                    h: 340
                }
            ]
            this.options = {
                getThumbBoundsFn(index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
        },
        data() {
            return {
                btn_opening: true,
                btn_opening_press: false,
                codeNo: '',
                showNoScroll: false,
            }
        },
        created() {
            const oauth2State = JSON.parse(sessionStorage.getItem('oauth2State') || '{}')
            this.codeNo=oauth2State.code
        },
        components: {
            XDialog,
            Scroller,
            Previewer
        },
        methods: {
            show(index) {
                this.$refs.previewer.show(index)
            },
            press() {
                this.btn_opening_press = true;
                this.btn_opening = false;
                this.$uop.loading.show({
                    text: '加载中'
                })

                reqData.req({
                    apiName: 'homeServer',
                    params: {
                        code: this.codeNo
                    }
                }).then((res) => {
                    res = res.data
                    //需要把默认进入场景放入query里面
                    if (res && res.code == '200') {
                        const [data] = [res.data]

                        if (data.openId) {
                            window.sessionStorage.setItem('openId', data.openId)
                        }
                        if (data.paramter) {
                            // 此处应该根据返回的场景值给出相应的二维码 
                            window.sessionStorage.setItem('paramter', data.paramter)
                        }
                        this.$uop.loading.hide();
                        // 判断是否关注微信号
                        if (data.followState == '01') {
                            this.showNoScroll = true;
                            return;
                        }
                        // 判断是否已注册
                        if (data.registerState == '01') {
                            this.$router.push({ path: '/reg', query: { paramter: data.paramter } });
                            return;
                        }
                        // 判断是否抽奖
                        if (data.prizeState == '02') {
                            this.$router.push({ path: '/toget', query: { paramter: data.paramter } })
                            return;
                        }
                        // 已经抽奖并中奖
                        if (data.prizeState == '00') {
                            // debugger;
                            reqData.req({
                                apiName: 'getAddressMessage',
                                params: {
                                    openId: data.openId
                                }
                            }).then((res) => {
                                this.$uop.loading.hide();
                                let reprsentData = JSON.parse(res.data).data;
                                this.$router.push({ name: 'address', params: { present: reprsentData.prize.prizeId }, query: { paramter: data.paramter, questionState: data.questionState } });
                            }).catch((res) => {
                                this.$uop.loading.hide();
                                this.$uop.toast.show({
                                    type: 'text',
                                    text: '系统异常'
                                })
                            })
                        }
                        // 已经抽奖未中奖
                        if (data.prizeState == '01') {

                            this.$router.push({ path: '/noAddress', query: { paramter: data.paramter, questionState: data.questionState } });
                        }
                    } else {
                        this.$uop.loading.hide();
                        this.$uop.toast.show({
                            type: 'text',
                            text: '请求失败'
                        })
                    }
                }).catch((err) => {
                    this.$uop.loading.hide();
                    this.$uop.toast.show({
                        type: 'text',
                        text: '系统异常'
                    })
                    console.error(err)
                })
            }
        }
    }

</script>
<style lang="less">
    @baseFontSize: 100;
    #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('../assets/imgs/bg_w_character.png') no-repeat center;
        background-size: cover;
    }
    
    .top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 498rem / @baseFontSize;
        background: url('../assets/imgs/title_head.png') no-repeat top center;
        background-size: cover;
    }
    
    .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 398rem / @baseFontSize;
    }
    
    .btn {
        width: 726rem/@baseFontSize;
        height: 222rem / @baseFontSize;
        position: absolute;
        bottom: 48rem / @baseFontSize;
        left: 50%;
        margin-left: -363rem / @baseFontSize
    }
    
    .btn_opening {
        background: url('../assets/imgs/btn_opening.png') no-repeat center;
        background-size: cover;
    }
    
    .btn_opening_press {
        background: url('../assets/imgs/btn_opening_press.png') no-repeat center;
        background-size: cover;
    }
    
    .dialog-demo {
        .weui_dialog {
            background-color: transparent!important;
            width: 698rem / @baseFontSize;
            height: 684rem / @baseFontSize;
            background-image: url('../assets/imgs/dia_home_error.png')!important;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding-top: 80rem / @baseFontSize;
            p {
                font-size: 32rem / @baseFontSize;
                color: #fff;
                line-height: 180%;
                text-align: center;
                padding-left: 60rem / @baseFontSize;
                &+p {
                    margin-bottom: 20rem / @baseFontSize;
                }
            }
        }
        .dialog-title {
            line-height: 30px;
            color: #666;
        }
        .img-box {
            height: auto;
            padding-bottom: 20px;
            overflow: hidden;
        }
        .vux-close {
            margin-top: 8px;
            margin-bottom: 8px;
        }
        .dialog-txt {
            padding: 10px;
            text-align: left;
            line-height: 30px;
        }
    }
    
    .box1 {
        height: 192rem / @baseFontSize;
        position: relative;
        width: 3000rem / @baseFontSize;
    }
    
    .box1-item {
        display: inline-block;
        float: left;
        margin-left: 15rem / @baseFontSize;
        text-align: center;
        background: rgba(255, 255, 255, 0.30);
        border: 4rem / @baseFontSize solid #ffadad;
        box-shadow: 0 0 16rem / @baseFontSize 0 #ca383b, inset 0 0 16rem / @baseFontSize 0 #ca383b;
        width: 192rem / @baseFontSize;
        height: 192rem / @baseFontSize;
        img {
            width: 192rem / @baseFontSize;
            height: 192rem / @baseFontSize;
            float: left;
        }
    }
    
    .scrollbottom {
        bottom: 60rem / @baseFontSize;
    }
</style>