import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { namespace } from './getSuffix';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    namespaced: true,
    [namespace]: {
      state: {
        count: 10,
      },
      mutations: {
        increment(state) {
          state.count++;
        },
      },
    },
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
