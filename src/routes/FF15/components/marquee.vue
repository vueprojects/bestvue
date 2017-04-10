<template>
	<div class="marquee_wrap">
      <div :class="{ red: isRed }" :style="{ transform: 'translateY(' + top + 'px)' }" class="item-box">
      	<div v-for="item in marqueeInfo" class="item">
      		<!-- <span>恭喜【{{item.title}}****{{item.number}}】 幸运获取到 [{{item.prize}}] 装备</span> -->
      		<span>{{item.text}}</span>
      	</div>
      </div>
    </div>
</template>
<script type="text/javascript">

	export default{
		components:{
		},
		data (){
			return{
				top:0,
				index:0,
				isRed: true,
				check: false,
				marqueeInfo:[
			        {
			          'number':'1755',
			          'prize':'限量版卫衣',
			          'title': '130',
			          'text': '恭喜【130****1755】幸运获取到【限量版卫衣】装备'
			        },
			        {
			          'number':'2978',
			          'prize':'主题台历',
					  'title': '150',
					  'text': '恭喜【150****2978】幸运获取到【主题台历】装备'
			        },
			        {
			          'number':'3417',
			          'prize':'游戏鼠标',
			          'title': '186',
			          'text': '恭喜【186****3417】幸运获取到【游戏鼠标】装备'
			        },
			        {
			          'number':'5671',
			          'prize':'限量版卫衣',
			          'title': '130',
			          'text': '恭喜【130****5671】幸运获取到【限量版卫衣】装备'
			        },
			        {
			          'number':'1755',
			          'prize':'限量版卫衣',
			          'title': '130',
			          'text': '恭喜【130****1755】幸运获取到【限量版卫衣】装备'
			        },
			        {
			          'number':'2978',
			          'prize':'主题台历',
			          'title': '150',
			          'text': '恭喜【150****2978】幸运获取到【主题台历】装备'
			        },
			        {
			          'number':'3417',
			          'prize':'游戏鼠标',
			          'title': '186',
			          'text': '恭喜【186****3417】幸运获取到【游戏鼠标】装备'
			        }
		      	]
			}
		},
		mounted(){
			setInterval(this.rand, 2000);
		},
		methods:{
			rand(){
				if(this.top === -100){
					this.isRed = false;
					this.top = 0;
					this.check = true;
					return;
				}
				if(this.check){
					let index = (-this.top)/25;
					let randomObj = this.getRandom();
					let length = Math.floor(this.marqueeInfo.length/2)
					switch(index){
						case 0:
						  if(this.index % 36 == 0){
						  	this.marqueeInfo[length] = { text: '今日ＸＢＯＸ还未抽出，加油！！！' };
						  }else{
							this.marqueeInfo[length] = randomObj;
						  }	
						  break;
						case 1:
						  this.marqueeInfo[index - 1] = randomObj;
						  this.marqueeInfo[length + 1] = randomObj;
						  break;
						case 2:
						  this.marqueeInfo[index - 1] = randomObj;
						  this.marqueeInfo[length + 2] = randomObj;
						  break;
						case 3:
						  this.marqueeInfo[index - 1] = randomObj;
						  this.marqueeInfo[length + 3] = randomObj;
						  break;
					}
				}
				this.isRed = true;
				this.top -= 25;
				this.index ++;
			},
			getRandom(){
				let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
				let prize = ['限量版卫衣','主题台历','游戏鼠标'][Math.floor(Math.random()*3)];
				let title = ['130', '133', '135', '137', '138', '139', '150', '152', '182', '186', '189'][Math.floor(Math.random()*11)];
				let number = '';
				for(let i = 0; i < 4; i ++){
					number += numberArr[Math.floor(Math.random()*9 + 1)];
				}
				let text = '恭喜【'+ title +'****'+ number +'】幸运获取到【'+ prize +'】装备'
				return {number, prize, title, text};
			},
			onClick (i) {
				
		    }
		}
	}
</script>
