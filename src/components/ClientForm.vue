<template>
  <div>
    <p>{{ getLoggedUser.username }}</p>
    <p>{{ getLoggedUser.email }}</p>
    <p>{{ getLoggedUser.password }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ClientForm",
  computed: {
    ...mapGetters(["getLoggedUser", "isUser"]),
  },
};
</script>
<style></style>
