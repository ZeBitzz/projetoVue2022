<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="txtTitle">TITULO</label>
      <input type="text" id="txtTitle" v-model="formStep.title" required />
      <label for="txtFrame">FRAME TEMPORAL</label>
      <input type="text" id="txtFrame" v-model="formStep.timestamp" required />
      <label for="txtDescription">DESCRIÇÃO</label>
      <input
        type="text"
        id="txtDescription"
        v-model="formStep.description"
        required
      />
      <input type="submit" value="ADD STEP" />
    </form>
  </div>
</template>
<script>
export default {
  name: "FormSteps",
  data() {
    return {
      formStep: { title: "", timestamp: "", description: "" },
    };
  },

  methods: {
    submitForm() {
      this.$emit("add-step", this.formStep);
    },
  },
};
</script>
<style></style>
