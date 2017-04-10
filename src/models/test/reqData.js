import axios from 'axios'
import _ from 'lodash'
import test from './testData'
import axiosConfig from './../axiosConfig.js'

const $ajax = axios.create(axiosConfig)
const requestApi={
	test:{
		url:'/test/home',
		method:'post',
		params:{
			tparams:'params'
		}
	},
	list: {
		url: '/test/list',
		method: 'get',
		params: {}
	},
	activityDetail: {
		url: '/test/detail',
		method: 'post',
		params: {}
	},
	sendCode:{
		url: '/test/sendCode',
		method:'post',
		params:{
			phone: '18221529523',
			openId: 'abcdefg'
		}
	},
	register:{
		url: '/test/register',
		method:'post',
		params:{
			phone: '18221529523',
			code:'1234',
			openId: 'abcdefg'
		}
	},
	gio:{
		url: '/test/gio',
		method:'post',
		params:{}
	}

}

function getReqObj(p){
	var req_obj = requestApi[p.apiName];
	req_obj=_.merge({},req_obj,p)
	if(req_obj.method==='post'){
		req_obj.data=_.merge({},req_obj.data,req_obj.params)
		delete req_obj.params
	}
	return req_obj;
}
export default {
	req:function(p){
		const req_obj=getReqObj(p);
		if(__STAGE__=='dev'){
			req_obj.apiName=p.apiName;
			return test(req_obj)
		}
		console.log(req_obj)
		delete req_obj.apiName
		return $ajax(req_obj)
	}
}