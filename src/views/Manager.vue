<template lang="">
  <div>
    <UserList></UserList>
    <AddTutorial></AddTutorial>
    <TutorialList></TutorialList>
  </div>
</template>
<script>
import UserList from "@/components/UserList.vue";
import AddTutorial from "@/components/AddTutorial.vue";
import TutorialList from "@/components/TutorialList.vue";

export default {
  components: {
    AddTutorial,
    UserList,
    TutorialList,
  },
};
</script>
<style lang=""></style>
