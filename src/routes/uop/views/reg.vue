<template>
	<div class="reg">
        <div class="logo">
            <img src="../assets/imgs/logo.png" alt="logo">
        </div>
        <h1>欢迎加入小红巢</h1>
        <h2>小红巢，东方明珠会员之家</h2>
        <div class="reg_form">
            <div>
                <input class="tel_input" :class="{error:isErr}" type="text" placeholder="手机号码" parten = "[0-9]*" maxlength="11" v-model.trim="userphone" @focus = "onFocus($event)" @blur = "onBlur($event)" @keyup = "onKeyup($event)">
            </div>
            <div class="code_div">
                <input class="code_input" :class="{error:isErr}" type="text" placeholder="验证码" parten = "[0-9]*" maxlength="6" v-model.trim="validcode"  @focus = "onFocus($event)" @blur = "onBlur($event)" @keyup = "onKeyup($event)">
                <input class="send_btn" type="button" :value="codeText" :disabled="isDisable" @click = "getCodeData">
            </div>
            <div class="err_text" v-if="isShowErr"><i class="icon_warn">!</i>{{errText}}</div>
            <input type="button" class="login_btn" value="登录" :disabled="isSubmit" @click = "regSubmit">
            <div class="rule_text">
                <input type="checkbox" id="checkRule" checked />
                <label for="checkRule"><span></span></label>
                <router-link to="/rule" >条件条款和个人隐私政策</router-link>
            </div>
        </div>
	</div>
</template>
<script>
import regJs from '../methods/reg'
import reqData from '../../../models/uop/reqData'

export default {
    data(){
        return{
            // openId: 'orCI-wwRn3c2RnEZORh40iGTugNs',
            openId: JSON.parse(window.localStorage.getItem('userStatus')).openid,
            bgImg: require('../assets/imgs/loginBg.png')
        }
    },
    mixins:[regJs],
    mounted(){
        const body = this.$el.parentElement.parentElement;
        body.style.background = '#f5f5f5 url( '+ this.bgImg + ') no-repeat';
        body.style.backgroundSize = '100%';
    },
    methods:{
        getCodeData(){
            let vue = this;
            setTimeout(() => {
                vue.$uop.loading.hide()
            },2000);

            reqData.req({
                apiName: 'regCodeData',
                params: {
                    'phoneNo': String(this.userphone),
                    'openId': this.openId
                }
            }).then((res) => {
                console.log(res);
                // debugger;
                let regData = res.data;
                let [code,data,msg] = [regData.code, regData.data, regData.message];
                if (code == 200) {
                    this.getCode();
                } else {
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
        },
        regSubmit(){
            // let enterType = window.sessionStorage.getItem('type')
            let enterType = this.$route.query.type;
            let vue = this;
            this.$uop.loading.show({
                text: '加载中'
            })
            setTimeout(() => {
                vue.$uop.loading.hide()
            },1000)
            reqData.req({
                apiName:'regSubmit',
                params:{
                    'phoneNo': this.userphone,
                    'verifyCode': this.validcode,
                    'openId': this.openId
                }
            }).then((res) => {
                console.log(res);
                const resData = res.data;
                const [code, data, msg] = [resData.code, resData.data, resData.message];
                if(code == 200 && !this.isSubmit){
                    // console.log("注册成功");
                   let userStatuses = JSON.parse(window.localStorage.getItem('userStatus'));
                    userStatuses.registerState = '00';
                    window.localStorage.setItem('userStatus',JSON.stringify(userStatuses));
                    this.$router.back();
                    // if (enterType == 'actDetail') { // 来源我要报名 → 报名页面
                    //     this.$router.push({path:'/signup',query:{id:this.$route.query.id}})
                    // } else if (enterType == 'personCenter') { // 来源我的 → 个人中心
                    //     this.$router.push({path:'/userCenter'})
                    // }
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
    }
}
</script>
