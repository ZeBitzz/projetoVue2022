<template>
  <div>
    <form @submit.prevent="register">
      <label for="txtUsername">USERNAME</label>
      <input type="text" id="txtUsername" v-model="form.username" required />
      <label for="txtPassword">PASSWORD</label>
      <input
        type="password"
        id="txtPassword"
        v-model="form.password"
        required
      />
      <label for="txtConfirmPassword">CONFIRM PASSWORD</label>
      <input
        type="password"
        id="txtConfirmPassword"
        v-model="form.confirmpassword"
        required
      />
      <input type="submit" value="REGISTER" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmpassword: "",
        type: "regular",
      },
    };
  },
  computed: {
    ...mapGetters(["isUsernameAvailable"]),
  },
  methods: {
    register() {
      if (
        this.isUsernameAvailable(this.form.username) &&
        this.form.password == this.form.confirmpassword
      ) {
        this.SET_NEW_USER(this.form);
        this.$router.push({ name: "login" });
      } else {
        alert("USER ALREADY EXIST! PLEASE TRY AGAIN!");
      }
    },
    ...mapMutations(["SET_NEW_USER"]),
  },
};
</script>

<style lang="scss" scoped></style>
