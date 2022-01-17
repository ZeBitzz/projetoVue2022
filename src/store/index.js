import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifts: localStorage.gifts ? JSON.parse(localStorage.gifts) : [],
    users: localStorage.users
      ? JSON.parse(localStorage.users)
      : [
          {
            username: "admin",
            password: "admin",
            type: "admin",
          },
        ],
    loggedUser: null,
  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),
    isUsernameAvailable: (state) => (username) =>
      state.users.every((user) => user.username !== username),
    getLoggedUser: (state) => state.loggedUser,
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },
  },

  modules: {},
});
