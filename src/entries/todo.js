import Vue from 'vue'
import VueRouter from 'vue-router'
import filters from '../filters/todo'
// require("style!./../assets/css/phone.css");

import store from './../store/todo'
import router from './../routes/example/index'
import headerComponent from './../components/headerComponent'

//使用插件
Vue.use(VueRouter);

// 加载过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

//启动应用
const app=new Vue({
	router,
	store,
	components:{
		headerComponent:headerComponent
	}
}).$mount('#app')