<template>
  <ul class="nav">
    <router-link class="nav-brand" :to="{ name: 'home' }">
      <img src="../assets/tutvideos.png" alt=""
    /></router-link>
    <router-link :to="{ name: 'profile' }">
      <li><i class="fas fa-user"></i></li>
    </router-link>
    <router-link :to="{ name: 'manager' }">
      <li v-if="getLoggedUser.type == 'admin'"><i class="fas fa-cog"></i></li>
    </router-link>
    <li @click="logout"><i class="fas fa-door-open"></i></li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
  methods: {
    ...mapMutations(["SET_LOGGED_USER", "SET_LOGOUT"]),
    logout() {
      this.SET_LOGOUT();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
img {
  margin-right: auto;
  height: 40px;
  width: auto;
}

html,
body,
ul,
li {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-weight: 100;
  text-align: right;
}

.nav-brand {
  margin-right: auto;
}
.nav {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  position: sticky;
  z-index: 10;
  background: #fff;
  height: 60px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
}

.nav li {
  display: inline-block;
  list-style: none;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  transition: transform 0.3s ease-out;
}

.nav li:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.nav-link {
  color: #000;
  text-decoration: none;
}
</style>
