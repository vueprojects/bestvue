<template>
<div>
	<header>项目索引页列表</header>
	<ul>
		<li v-for='list in indexList' ><a  v-bind:href="list.url" target="_blank" ><i class="iconfont">&#xe805;</i>{{list.name}}</a></li>
	</ul>
</div>
</template>
<style scoped>
	@font-face {
	font-family: 'iconfont';  /* project id 232080 */
	src: url('//at.alicdn.com/t/font_72fnm2mh4hx5hfr.eot');
	src: url('//at.alicdn.com/t/font_72fnm2mh4hx5hfr.eot?#iefix') format('embedded-opentype'),
	url('//at.alicdn.com/t/font_72fnm2mh4hx5hfr.woff') format('woff'),
	url('//at.alicdn.com/t/font_72fnm2mh4hx5hfr.ttf') format('truetype'),
	url('//at.alicdn.com/t/font_72fnm2mh4hx5hfr.svg#iconfont') format('svg');
	}

	.iconfont {
	font-family:"iconfont" !important;
	font-size:20px;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	}

    #app > div{margin:20px auto; max-width: 400px}
    header{font-weight: bold; font-size: 18px; line-height: 40px; background-color: #efefef; padding-left: 20px;}
	header i{font-weight: normal;}
	ul{padding-left:0; margin-top: 0; }
    ul > li{list-style-type: decimal; line-height:32px; list-style-type: none;border-bottom: 1px solid #ddd;}
	ul >li > a {text-decoration: none;color: #000; display:block;padding-left: 20px}
	ul > li > a:hover{box-shadow: 0 1px 6px 1px #ccc;}
 
   
</style>
<script>
var projectsConfig = require('./../../config/projectsConfig')
var projects = projectsConfig.projects;
export default{
	data(){
		return{
			indexList:[]
		}
	},
	created(){
		const _this=this;
		projects.forEach(function(obj,index){
			_this.indexList.push({url:'/'+obj.name+'.html',name:obj.name_cn})
		})
	}
}
</script>