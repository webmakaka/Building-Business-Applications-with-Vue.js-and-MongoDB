const state = {
  email: '',
  userId: null,
  isLoggedIn: false,
  loginError: ''
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
};

const actions = {
  logInUser({ commit }, payload) {
    // We'll call into the API in the next module :)

    console.log(payload);

    if (payload.email === 'test1@user.com' && payload.password === 'test111') {
      // Simulate getting back a valid userId from API call...
      payload.userId = '5a777f0a75f64a1698221d98';
      commit('logInUser', payload);
    } else {
      commit('loginError');
    }
  }
};

const mutations = {
  logInUser(state, payload) {
    state.email = payload.email;
    state.userId = payload.userId;
    state.isLoggedIn = true;
  },
  loginError(state) {
    state.isLoggedIn = false;
    state.loginError = 'Email and/or Password are invalid. Login failed.';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
