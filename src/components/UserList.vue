<template>
  <div class="containerTable">
    <h1>GESTÃO DE UTILIZADORES</h1>
    <h3>Esta tabela tem como função remover utilizadores da aplicação!</h3>
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
          <i
            class="fa fa-trash"
            aria-hidden="true"
            @click="removeUser(user.username)"
          ></i>
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
<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}

th,
td,
tr {
  border: 2px solid #052638;
  padding: 30px;
}

.containerTable {
  padding-top: 3rem;
}
.containerForm {
  padding-top: 3rem;
}
h1 {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
  text-align: center;
}
h3 {
  font-size: 20px;
  padding-bottom: 20px;
  text-align: center;
}

i {
  cursor: pointer;
}
</style>
