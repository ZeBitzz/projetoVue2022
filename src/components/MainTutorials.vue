<template>
  <div>
    <h1>Tutoriais</h1>
    <h3>Pode filtrar os tutoriais pela categoria que deseja.</h3>
    <tr v-for="(tutorial, index) in getTutorials" :key="index">
      <td>{{ tutorial.title }}</td>
      <td>{{ tutorial.category }}</td>
      <td>{{ tutorial.link }}</td>
      <td><button></button></td>
      <td></td>
    </tr>
    <select>
      <!--
          select para as categorias dos tutoriaispçpç.pf    
        -->
    </select>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        tutorialId: "",
        userUsername: "",
      },
    };
  },
  name: "MainTutorials",
  computed: {
    ...mapGetters(["getLoggedUser", "getTutorials"]),
  },
  methods: {
    addFavorite() {},
  },
};
</script>
<style></style>
