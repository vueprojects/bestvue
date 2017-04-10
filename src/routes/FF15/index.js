import VueRouter from 'vue-router'
import welcome from './views/welcome.vue'
import cardGet from './views/cardGet.vue'
import cardLost from './views/cardLost.vue'
import Reg from './views/register'
import ClickToGet from './views/toGet'
import PrizeDraw from './views/prizeDraw'
import Questionnaire from './views/questionnaire'
import Address from './views/address'
import noAddress from './views/noAddress'
import addressSuccess from './views/addressSuccess'
import research from './components/research/research.vue'

var routes = [
  {
    name: 'index',
    path: '/',
    component: welcome
  },
  {
    name: 'reg',
    path: '/reg',
    component: Reg
  },
  {
    name: 'toget',
    path: '/toget',
    component: ClickToGet
  },
  {
    name: 'prizedraw',
    path: '/prizedraw',
    component: PrizeDraw
  },
  {
    name: 'questionnaire',
    path: '/questionnaire',
    component: Questionnaire
  },
  {
    name: 'welcome',
    path: '/welcome',
    component: welcome
  },
  {
    name: 'cardGet',
    path: '/cardGet',
    component: cardGet
  },
  {
    name: 'cardLost',
    path: '/cardLost',
    component: cardLost
  },
  {
    name: 'address',
    path: '/address/:present',
    component: Address
  },
  {
    name: 'noAddress',
    path: '/noAddress',
    component: noAddress
  },
  {
    name: 'addressSuccess',
    path: '/addressSuccess/:type',
    component: addressSuccess
  },
  {
    name: 'research',
    path: '/research/:qid',
    component: research
  }
]
export default new VueRouter({
  routes
})
