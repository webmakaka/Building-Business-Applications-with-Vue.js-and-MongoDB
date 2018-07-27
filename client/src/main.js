// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import axios from 'axios';

// Vuex store
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/api'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
