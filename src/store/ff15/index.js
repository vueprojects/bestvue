import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  addressMessage: {
  	name: '',
  	phone: '',
  	address: ''
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },

    INSERT_ADDRESS_MESSAGE(state, message){
    	console.log(message);
      state.addressMessage = message
    }
  }
})
