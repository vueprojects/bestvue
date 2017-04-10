<template>
	<div class="plrEmpty mt20">
		<group title="恭喜获得【Xbox】一套！
请填写你的姓名，电话，及快递地址，工作人员将火速与你确认领奖事宜。">
	      <x-input title="姓名" name="mobile" placeholder="请输入您的名字" ></x-input>
	      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
	      <x-input title="地址" name="mobile" placeholder="请输入您的名字" ></x-input>
	    </group>
	    <div class="mt15">
	      <x-button :text="submit001" :disabled="disable001" @click.native="submit" type="primary"></x-button>
	    </div>
	</div>
</template>
<script>
import { Group, XInput,XButton } from 'vux'

export default {
  components: {
    Group,
    XInput,
    XButton
  },
  data (){
  	return{
  		'submit001': '确认',
      	'disable001': false,
  	}
  },
  mounted () {
  	this.$el.parentElement.parentNode.style.background = '#fafafa';
    // Autosize(this.$refs.autosize.$refs.textarea)
  },
  methods:{
  	submit(){
  		console.log("确认")
  	}
  }
}
</script>