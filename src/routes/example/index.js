import VueRouter from 'vue-router'
import example from './example.vue'
import TodoMVC from './TodoMVC.vue'
import loadMore from './loadMore.vue'
import vuxExp from '../wechatHome.vue'


//会员注册以及会员中心
import userRegister from '../user/userRegister.vue'
import userCenter from '../user/user.vue'

//首页以及活动
import index from '../activity/index'
import activityDetail from '../activity/activityDetail'

var routes = [
	{
	    path: '/',
	    component: example
	}, 
	{
	    path: '/todo',
	    component: TodoMVC
	}, 
	{
		path:'/vuxexp',
		component:vuxExp,
		children: [
			{
				path: 'index',
				component: index
			}
		]
	},
	{
		name: 'activityDetail',
	    path: '/detail/:id',
	    component: activityDetail
	}, 
	{
		path:'/loadMore',
		component:loadMore
	},
	// {
	// 	path:'/index',
	// 	component:index
	// },
	{
		path:'/userRegister',
		component:userRegister
	},
	{
		path:'/user',
		component:userCenter
	}
]
export default new VueRouter({
    routes
})
