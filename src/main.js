import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Layouts
import Default from "../src/layouts/Default.vue";
import Dashboard from "../src/layouts/Dashboard.vue";

Vue.component("default-layout", Default);
Vue.component("dashboard-layout", Dashboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
