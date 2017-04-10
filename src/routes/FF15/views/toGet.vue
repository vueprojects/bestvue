<template>
	<div>
		<div class="turntable_wrap">
			<div class="turn_outside" v-if="loadingNum < 100"></div>
			<div class="turn_inside"  v-if="loadingNum < 100"></div>
			<div class="turn_circles"  v-if="loadingNum < 100"></div>
			<div class="turntable"  v-if="loadingNum == 100"></div>
			<div class="turn_text">{{loadingNum}}%</div>
		</div>
		<div class="load_tip" v-html="loadTip"></div>
		<div class="text_center">
          <input type="button" class="submit_btn" :class="{btn_get_disable:isDisable,btn_get:isSubmit}" @click="submit">
        </div>
        <div class="rule" @click="showRule">活动规则</div>
		<marquee-list></marquee-list>
		<rule v-if="isShowRule"></rule>
	</div>
</template>
<script type="text/javascript">
	import MarqueeList from '../components/marquee'
	import Rule from '../components/rule'
	import ReqData from '../../../models/ff15/reqData'

	export default{
		components:{
			MarqueeList,
			Rule
		},
		data(){
			return{
				// 'openId':'006',
				'openId':window.sessionStorage.getItem('openId'),
				'bgImg':require("../assets/imgs/bg_wo_character_dark.png"),
				'isShowRule':false,
				'loadingNum':0,
				'loadTip':"",
				'isDisable':true,
      			'isSubmit':false
			}
		},
		mounted(){
			this.$el.parentElement.parentNode.style.background  = "url(" + this.bgImg + ")";
   			this.$el.parentElement.parentNode.style.backgroundSize = "cover";
   			this.loading();
		},
		methods:{
			loading(){
		      if(this.loadingNum == 100){
		        this.isDisable = false;
		        this.isSubmit = true;
		        this.loadTip = "恭喜你加入王者之剑<br>请点击获取你的装备";
		        this.loadingNum = 100;
		      }else{
		      	this.isDisable = true;
		        this.isSubmit = false;
		        this.loadTip = "正在注入魔力值能力...";
		        let vue = this;
		        // debugger;
		        if(this.loadingNum > 80 && this.loadingNum < 85){
		        	setTimeout(()=>{
	        		this.loadingNum ++;
			          vue.loading();
			        },500);
		        }else{
		        	setTimeout(()=>{
	        		this.loadingNum ++;
			          vue.loading();
			        },10);
		        }
		      }
		    },
			showRule(){
				this.isShowRule = true;
			},
			submit(){
				ReqData.req({
					apiName:'getAward',
					params:{
						openId:this.openId
					}
				}).then((res) => {
					// console.log(res);
					let resData = JSON.parse(res.data);
					let [code,msg,data] = [resData.code,resData.message,resData.data];

					// debugger;
					if(code == "200"){
						if(data.luckyState == "00"){//抽奖成功
							this.$router.replace({name: 'address', params:{present: data.prizeId}, query:{ paramter:this.$route.query.paramter}})
						}else if(data.luckyState == "01"){//抽奖失败
							this.$router.replace({name: 'noAddress',  query:{ paramter:this.$route.query.paramter}})
						}
					}else{
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