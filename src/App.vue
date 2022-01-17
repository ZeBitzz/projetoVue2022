<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import "@fortawesome/fontawesome-free/css/all.css";
const default_layout = "default";
export default {
  components: {
    Footer,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>
<style>
@import "../assets/styles/variables.css";
@import "../assets/styles/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: f5f5f5;
}
</style>
