<template>
  <div>
    <div class="image-wrapper">
      <img src="../assets/homebanner.jpg" />
      <div class="text-wrapper">
        <h1>Bom dia, {{ getLoggedUser.username }}!</h1>
        <h5>Escolha entre os tutoriais em vídeos online que temos para si</h5>
      </div>
    </div>
    <MainTutorials></MainTutorials>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MainTutorials from "../components/MainTutorials.vue";
export default {
  name: "Home",
  components: {
    MainTutorials,
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>
<style scoped>
.image-wrapper {
  height: calc(100vh - 60px);
  width: 100%;
  overflow: hidden;
}
.image-wrapper img {
  width: 100%;
  height: auto;
}
.text-wrapper {
  width: 100%;
  position: relative;
  margin-top: -10%;
}
.text-wrapper h1 {
  text-align: center;
  font-size: 3vw;
  color: var(--secondary-color);
  margin-bottom: 15px;
}
h5 {
  color: var(--secondary-color);
  font-size: 1.5vw;
  text-align: center;
}
</style>
