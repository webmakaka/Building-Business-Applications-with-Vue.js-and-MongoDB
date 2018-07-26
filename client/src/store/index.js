import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import transactions from './modules/transactions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    transactions
  }
});
