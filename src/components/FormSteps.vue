<template>
  <div>
    <h1>ADICIONAR PASSOS</h1>
    <h3>Adiciona aqui os passos para o tutorial!</h3>
    <form @submit.prevent="submitForm">
      <label for="txtTitle">TITULO</label>
      <br />
      <input type="text" id="txtTitle" v-model="formStep.title" required />
      <br />
      <label for="txtFrame">FRAME TEMPORAL</label>
      <br />
      <input type="text" id="txtFrame" v-model="formStep.timestamp" required />
      <br />
      <label for="txtDescription">DESCRIÇÃO</label>
      <br />
      <input
        type="text"
        id="txtDescription"
        v-model="formStep.description"
        required
      />
      <br />
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
      this.$emit("addStep", this.formStep);
      this.formStep = { title: "", timestamp: "", description: "" };
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
h3 {
  font-size: 20px;
  padding-bottom: 20px;
}
input[type="text"],
select {
  width: 10%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
}

input[type="submit"] {
  background-color: var(--primary-color);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  -webkit-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: background-color 300ms linear;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

div {
  padding: 20px;
}
</style>
