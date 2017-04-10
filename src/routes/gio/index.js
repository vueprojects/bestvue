import VueRouter from 'vue-router'
import indexComponent from './indexComponent.vue'
import events from './components/events/events.vue'
import outdoor from './components/outdoor/outdoor.vue'
import ticket from './components/ticket/ticket.vue'
import exbition from './components/exbition/exbition.vue'
import detail from './components/detail/detail.vue'

var routes = [
	{ path: '/', component: indexComponent },
	{ path: '/events', component: events },
	{ path: '/outdoor', component: outdoor },
	{ path: '/ticket', component: ticket },
	{ path: '/exbition', component: exbition },
	{ path: '/huodong/:actid', component: detail }
]
export default new VueRouter({
    routes
})
