<template>
  <div>
    <ClientForm></ClientForm>
    <UserFavList></UserFavList>
  </div>
</template>
<script>
import ClientForm from "../components/ClientForm.vue";
import UserFavList from "../components/UserFavList.vue";
export default {
  name: "Profile",
  components: {
    ClientForm,
    UserFavList,
  },
};
</script>
<style></style>
