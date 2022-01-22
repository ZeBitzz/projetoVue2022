import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tutorials: localStorage.tutorials ? JSON.parse(localStorage.tutorials) : [],
    users: localStorage.users
      ? JSON.parse(localStorage.users)
      : [
          {
            username: "admin",
            password: "admin",
            email: "admin@gmail.com",
            type: "admin",
            favorites: [],
          },
        ],
    loggedUser: localStorage.loggedUser
      ? JSON.parse(localStorage.loggedUser)
      : null,
  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),
    isUsernameAvailable: (state) => (username) =>
      state.users.every((user) => user.username !== username),
    isTutoriallinkAvailable: (state) => (link) =>
      state.tutorials.every((tutorial) => tutorial.link !== link),
    getLoggedUser: (state) => state.loggedUser,
    getUsers: (state) => state.users,
    getTutorials: (state) => state.tutorials,
    getCategories: (state) => {
      let categories = [];
      state.tutorials.forEach((tutorial) => {
        if (!categories.includes(tutorial.category)) {
          categories.push(tutorial.category);
        }
      });
      return categories;
    },
    getTutorial: (state) => (tutorialId) => {
      let index = state.tutorials.findIndex(
        (tutorial) => tutorial.id == tutorialId
      );
      return state.tutorials[index];
    },
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
    SET_REMOVE_USER(state, payload) {
      let index = state.users.findIndex((user) => user.username === payload);
      state.users.splice(index, 1);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },
    SET_NEW_TUTORIAL(state, payload) {
      console.log("payload", payload);
      state.tutorials.push(payload);
      localStorage.tutorials = JSON.stringify(state.tutorials);
    },
    SET_REMOVE_TUTORIAL(state, payload) {
      let index = state.tutorials.findIndex(
        (tutorial) => tutorial.title === payload
      );
      state.tutorials.splice(index, 1);
      localStorage.tutorials = JSON.stringify(state.tutorials);
    },
    SET_NEW_FAVOURITE(state, payload) {
      let index = state.users.findIndex(
        (user) => user.username === state.loggedUser.username
      );
      console.log(state.users[index]);
      state.users[index].favorites.push(payload);
      localStorage.users = JSON.stringify(state.users);
      localStorage.loggedUser = JSON.stringify(state.users[index]);
    },
    SET_REMOVE_FAVOURITE(state, payload) {
      let index = state.users.findIndex(
        (user) => user.username === state.loggedUser.username
      );
      let indexFav = state.users[index].favorites.findIndex(
        (tutorialid) => tutorialid === payload
      );
      state.users[index].favorites.splice(indexFav, 1);
      localStorage.users = JSON.stringify(state.users);
      localStorage.loggedUser = JSON.stringify(state.users[index]);
    },
  },
  modules: {},
});
