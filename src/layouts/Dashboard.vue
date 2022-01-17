<template lang="">
  <div><NavBar></NavBar> <slot></slot></div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Dashboard",
  components: {
    NavBar,
  },
};
</script>
