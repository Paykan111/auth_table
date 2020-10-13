import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from "./Vuex/store";
document.title = 'auth_table';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
