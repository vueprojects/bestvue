import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import * as actions from './actions'
import plugins from './plugins'
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
export default new Vuex.Store({
  state,
  mutations,
  plugins,
  actions
})
