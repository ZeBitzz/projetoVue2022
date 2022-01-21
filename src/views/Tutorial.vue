<template lang="">
  <div class="main-wrapper">
    <div class="blue-container">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="tutorial.link"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="white-container"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "tutorial",
  data() {
    return {
      tutorial: {},
    };
  },
  created() {
    this.tutorial = this.getTutorial(this.$route.params.id);
    console.log(this.tutorial);
  },
  computed: {
    ...mapGetters(["getTutorial"]),
  },
};
</script>
<style lang=""></style>
