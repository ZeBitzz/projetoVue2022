<template>
  <div class="registerForm">
    <br />
    <br />
    <div class="containerResgister">
      <form @submit.prevent="register">
        <label for="txtUsername">USERNAME</label>
        <br />
        <input type="text" id="txtUsername" v-model="form.username" required />
        <br />
        <label for="txtEmaiç">EMAIL</label>
        <br />
        <input type="text" id="txtEmial" v-model="form.email" required />
        <br />
        <label for="txtPassword">PASSWORD</label>
        <br />
        <input
          type="password"
          id="txtPassword"
          v-model="form.password"
          required
        />
        <br />
        <label for="txtConfirmPassword">CONFIRM PASSWORD</label>
        <br />
        <input
          type="password"
          id="txtConfirmPassword"
          v-model="form.confirmpassword"
          required
        />
        <br />
        <input type="submit" value="REGISTER" />
      </form>
    </div>
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
        email: "",
        type: "regular",
        favorites: [],
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

<style scoped>
@import "../assets/styles/variables.css";
a {
  color: var(--primary-color);
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: var(--primary-color);
  border: none;
  color: var(--secondary-color);
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 20px;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 30px 20px 10px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"],
input[type="email"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 5px;
  width: 10%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
.registerForm {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
