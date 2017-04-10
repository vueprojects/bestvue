import VueRouter from 'vue-router'

var routes = [
  // 首页
  {
    name: 'index',
    path: '/',
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    name: 'reg',
    path: '/reg',
    component: resolve => require(['./views/reg'], resolve)
  },
  {
    name: 'rule',
    path: '/rule',
    component: resolve => require(['./views/rule'], resolve)
  },
  {
    name: 'signup',
    path: '/signup',
    component: resolve => require(['./views/signup'], resolve)
  },
  // 活动详情
  {
    name: 'activityDetail',
    path: '/activityDetail/:id',
    component: resolve => require(['./views/activityDetail.vue'], resolve)
  },
  // 订单部分
  {
    name: 'indent',
    path: '/indent',
    component: resolve => require(['./views/indent.vue'], resolve),
    children: [{
      name: 'allIndent',
      path: 'all',
      component: resolve => require(['./views/allIndent.vue'], resolve)
    },
    {
      name: 'detailIndent',
      path: 'detail/:id',
      component: resolve => require(['./views/detailIndent.vue'], resolve)
    }]
  },
  // 会员中心
  {
    name: 'userCenter',
    path: '/userCenter',
    component: resolve => require(['./views/userCenter.vue'], resolve)
  },
  {
    name: 'intergral',
    path: '/intergral',
    component: resolve => require(['./views/integral.vue'], resolve)
  },
  {
    name: 'information',
    path: '/information',
    component: resolve => require(['./views/information.vue'], resolve)
  },
  {
    name: 'addressManager',
    path: '/addressManager',
    component: resolve => require(['./views/addressManager.vue'], resolve)
  },
  {
    name: 'addressEdit',
    path: '/addressEdit',
    component: resolve => require(['./views/addressEdit.vue'], resolve)
  },
  // 活动页面
  {
    name: 'activity',
    path: '/activity',
    component: resolve => require(['./views/activity'], resolve)
  }
]

export default new VueRouter({
  routes
})