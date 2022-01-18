<template lang="">
  <div>
    <p>USERS LIST</p>
    <table v-if="getUsers.length">
      <tr>
        <th>#</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>REMOVER</th>
      </tr>
      <tr v-for="(user, index) in getUsers" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button @click="removeUser(user.username)">X</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "UserList",
  computed: {
    ...mapGetters(["getLoggedUser", "getUsers", "isUser"]),
  },
  methods: {
    ...mapMutations(["SET_REMOVE_USER"]),
    removeUser(username) {
      if (confirm("DO YOU REALLY WANT TO REMOVE THIS USER?")) {
        this.SET_REMOVE_USER(username);
      }
    },
  },
};
</script>
<style lang=""></style>
