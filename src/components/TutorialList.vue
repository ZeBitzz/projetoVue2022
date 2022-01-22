<template>
  <div class="containerTable">
    <h1>GESTÃO DE TUTORIAIS</h1>
    <h3>Esta tabela tem como função remover tutoriais!</h3>
    <table v-if="getTutorials.length">
      <tr>
        <th>#</th>
        <th>TITULO</th>
        <th>CATEGORIA</th>
        <th>LINK</th>
        <th>REMOVER</th>
      </tr>
      <tr v-for="(tutorial, index) in getTutorials" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ tutorial.title }}</td>
        <td>{{ tutorial.category }}</td>
        <td>{{ tutorial.link }}</td>
        <td>
          <i
            class="fa fa-trash"
            aria-hidden="true"
            @click="removeTutorial(tutorial.title)"
          ></i>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Tutoriallist",
  computed: {
    ...mapGetters(["getLoggedUser", "getTutorials"]),
  },
  methods: {
    ...mapMutations(["SET_REMOVE_TUTORIAL"]),
    removeTutorial(title) {
      if (confirm("DO YOU REALLY WANT TO REMOVE THIS TUTORIAL?")) {
        this.SET_REMOVE_TUTORIAL(title);
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
  padding-bottom: 3rem;
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
