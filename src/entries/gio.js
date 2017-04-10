import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'; 
import router from './../routes/gio/index';
import MintUI from 'mint-ui';

require('./../library/flexible.js');

Vue.use(VueRouter);
Vue.use(MintUI);
Vue.prototype.$http = axios;

const app=new Vue({
	router
}).$mount('#app')