import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  indentDetail: {},
  saveAddress: {}
}

export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_INDENT_DETAIL (state, detail) {
      state.indentDetail = detail
    },
    SAVE_ADDRESS (state, address) {
      state.saveAddress = address
    }
  }
})
