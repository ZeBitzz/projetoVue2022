<template>
  <div>
    <br />
    <form @submit.prevent="login">
      <label for="txtUsername">USERNAME</label>
      <input type="text" id="txtUsername" v-model="username" required />
      <br />
      <label for="txtPassword">PASSWORD</label>
      <input type="password" id="txtPassword" v-model="password" required />
      <input type="submit" value="LOGIN" />
    </form>
    <h5>
      No account?
      <router-link :to="{ name: 'register' }">please create one</router-link>
    </h5>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["isUser"]),
  },
  methods: {
    login() {
      if (this.isUser(this.username, this.password)) {
        this.SET_LOGGED_USER(this.username);
        this.$router.push({ name: "home" });
      } else {
        alert("NO USER FOUND! PLEASE TRY AGAIN!");
      }
    },
    ...mapMutations(["SET_LOGGED_USER"]),
  },
};
</script>

<style lang="scss" scoped></style>
