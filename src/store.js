import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

Vue.config.devtools = process.env.NODE_ENV === 'development';
export default new Vuex.Store({
  state: {
    network: "NERVE",
    selectAddress: ''
  },
  mutations: {
    changeNetwork(state, data) {
      state.network = data;
      sessionStorage.setItem("network", data);
    },
    changeSelectAddress(state, data) {
      state.selectAddress = data;
    }
  },
  getters: {
    
  },
  actions: {

  }
})
