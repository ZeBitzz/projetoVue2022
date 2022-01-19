<template>
  <div class="containerForm">
    <h1>ADICIONAR TUTORIAL</h1>
    <h3>Este formulário tem como função adicionar tutoriais!</h3>

    <form @submit.prevent="addTutorial">
      <label for="txtTutorial">TUTORIAL</label>
      <br />
      <input type="text" id="txtTutorial" v-model="form.title" required />
      <br />
      <label for="txtCategory">CATEGORIA</label>
      <br />
      <input type="text" id="txtCategory" v-model="form.category" required />
      <br />
      <label for="txtLink">LINK</label>
      <br />
      <input type="text" id="txtLink" v-model="form.link" required />
      <br />
      <input type="submit" value="ADD TUTORIAL" />
      <FormSteps @add-step="addStep" />
      <ul
        class="containerStep"
        v-for="(step, index) in form.steps"
        :key="index"
      >
        <li>Título:{{ step.title }}</li>
        <li>Frame Temporal: {{ step.timestamp }}</li>
        <li>Descrição: {{ step.description }}</li>
      </ul>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import FormSteps from "../components/FormSteps.vue";
export default {
  components: {
    FormSteps,
  },
  name: "AddTutorial",
  data() {
    return {
      form: {
        title: "",
        category: "",
        link: "",
        steps: [],
      },
      formStep: { title: "", timestamp: "", description: "" },
    };
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getTutorial", "isTutoriallinkAvailable"]),
  },
  methods: {
    ...mapMutations(["SET_NEW_TUTORIAL"]),
    addTutorial() {
      if (this.isTutoriallinkAvailable(this.form.link)) {
        this.SET_NEW_TUTORIAL({
          title: this.form.title,
          category: this.form.category,
          link: this.form.link,
          steps: this.form.steps,
        });
        this.form.steps = [];
        alert("TUTORIAL CREATED!");
      } else {
        alert("TUTORIAL ALREADY EXIST! PLEASE TRY AGAIN!");
      }
    },
    addStep(step) {
      this.form.steps.push(step);
    },
  },
};
</script>
<style scoped>
li {
  border: 1px dotted #052638;
}
ul {
  margin-left: auto;
  margin-right: auto;
}
.containerStep {
  padding-top: 1rem;
  width: 50%;
  padding-bottom: 1rem;
}
.containerForm {
  padding-top: 3rem;
}
h1 {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
h3 {
  font-size: 20px;
  padding-bottom: 20px;
}

/* form style */

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
