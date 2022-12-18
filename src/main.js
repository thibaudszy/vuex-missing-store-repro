import App from './App.vue';
import { createStore } from 'vuex';
 import { namespace } from './getSuffix';
import { createApp } from 'vue';

const store = createStore({
  modules:{
    [namespace] : {
      state: () => ({ count: 10 })
  }
  
}})


const app = createApp(App);

// Install the store instance as a plugin
app.use(store)

app.mount('#app')