import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    justArrived: []
  },
  mutations: {
    setProducts(state, justArrived) {
      state.justArrived = justArrived;
    }
  },
  actions: {},
  modules: {}
});
