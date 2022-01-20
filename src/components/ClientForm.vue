<template>
  <div class="containerCard">
    <div class="card">
      <div class="imageProfile"></div>
      <div class="info">
        <p>{{ getLoggedUser.username }}</p>
        <p>{{ getLoggedUser.email }}</p>
        <p>{{ getLoggedUser.password }}</p>
      </div>
    </div>
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
<style>
.card {
  max-width: 50%;
  margin: 50px auto;
  min-height: 456px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 12px 20px 0 rgba(0, 0, 0, 0.04);
  flex-direction: column;
}
</style>
