<template>
<div>
	<header>测试控制台<button v-on:click='submit'>刷新</button></header>
	<div id='console-panel' v-text='consoleTxt'>
		
	</div>
</div>
</template>
<style scoped>
	
</style>
<script>
import unit from '../servers/unit'
export default{
	data(){
		return{
			indexList:[],
			consoleTxt:'faw'
		}
	},
	created(){
		
	},
	methods:{
		async submit(){
			this.consoleTxt=await unit();
		}
	}
}
</script>