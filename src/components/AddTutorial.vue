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
      <label for="txtDescription">DESCRIÇÃO</label>
      <br />
      <textarea
        rows="4"
        cols="50"
        id="txtDescription"
        v-model="form.description"
        required
      />
      <br />
      <label for="txtLink">LINK</label>
      <br />
      <input
        :onchange="this.validateUrl()"
        type="text"
        id="txtLink"
        v-model="url"
        required
      />
      <br />
      <label for="txtThumbnail">THUMBNAIL</label>
      <br />
      <input type="text" id="txtThumbnail" v-model="form.thumbnail" required />
      <br />
      <input type="submit" value="ADD TUTORIAL" />

      <FormSteps @addStep="addStep" />
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
        description: "",
        link: "",
        thumbnail: "",
        steps: [],
        comments: [],
      },
      embedUrl: "",
      url: "",
    };
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getTutorials", "isTutoriallinkAvailable"]),
  },
  methods: {
    ...mapMutations(["SET_NEW_TUTORIAL"]),
    addTutorial() {
      if (this.isTutoriallinkAvailable(this.form.link)) {
        console.log("form", this.form);
        this.SET_NEW_TUTORIAL({
          title: this.form.title,
          category: this.form.category,
          link: this.embedUrl,
          steps: this.form.steps,
          id: this.getTutorialId(),
          description: this.form.description,
          thumbnail: this.form.thumbnail,
          comments: this.form.comments,
        });
        (this.form = {
          title: "",
          category: "",
          description: "",
          link: "",
          thumbnail: "",
          steps: [],
        }),
          alert("TUTORIAL CRIADO!");
      } else {
        alert("JÁ EXISTE ESTE TUTORIAL,TENTA DE NOVO!");
      }
    },
    addStep(step) {
      this.form.steps.push(step);
      alert("ADICIONOU UM PASSO!");
    },
    getId(url) {
      if (url.includes("youtu.be")) {
        let text = url;
        const videoSplit = text.split("https://www.youtu.be/");
        const videoId = videoSplit[1];
        return videoId;
      } else if (url.includes("youtube")) {
        let text = url;
        const videoSplit = text.split("https://www.youtube.com/watch?v=");
        const videoId = videoSplit[1];
        return videoId;
      }
    },
    validateUrl() {
      if (this.url.includes("youtube") || this.url.includes("youtu.be")) {
        const videoId = this.getId(this.url);
        this.embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    },
    getTutorialId() {
      if (this.getTutorials.length > 0) {
        return this.getTutorials[this.getTutorials.length - 1].id + 1;
      }
      return 1;
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
  text-align: center;
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
