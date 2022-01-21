<template lang="">
  <div></div>
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
