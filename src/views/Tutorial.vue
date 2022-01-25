<template lang="">
  <div class="main-wrapper">
    <div class="blue-container">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="tutorial.link"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="white-container">
      <div class="information-wrapper">
        <h4>{{ tutorial.title }}</h4>
        <p>{{ tutorial.category }}</p>
        <p>{{ tutorial.description }}</p>
      </div>
      <h4>Passos</h4>
      <div
        class="steps-wrapper"
        v-for="(step, index) in tutorial.steps"
        :key="index"
      >
        <div class="step-card">
          <div class="step-number">{{ index }}</div>
          <div class="step-info">
            <p>{{ step.description }}</p>
            <span>{{ step.timestamp }}</span>
          </div>
        </div>
      </div>
      <h4>Comentários</h4>

      <div
        class="comentarys-wrapper"
        v-for="(topic, index) in tutorial.comments"
        :key="index"
      >
        <h5>{{ topic.username }}</h5>
        <p>{{ topic.text }}</p>
        <p></p>
      </div>
      <div class="comentary-wrapper">
        <textarea v-model="commentText"></textarea>
        <button type="submit" @click="addComments">Submeter</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "tutorial",
  data() {
    return {
      tutorial: {},
      commentText: "",
    };
  },
  created() {
    this.tutorial = this.getTutorial(this.$route.params.id);
    console.log(this.tutorial);
  },
  computed: {
    ...mapGetters(["getTutorial", "getLoggedUser", "getTutorials"]),
  },
  methods: {
    ...mapMutations(["SET_TUTORIAL_COMMENTS"]),
    addComments() {
      this.SET_TUTORIAL_COMMENTS({
        username: this.getLoggedUser.username,
        tutorialId: parseInt(this.$route.params.id),
        text: this.commentText,
      });
    },
  },
};
</script>
<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 140vh;
}
.blue-container {
  background-color: var(--primary-color);
  position: relative;
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
.embed-responsive.embed-responsive-16by9 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 35%;
}

.embed-responsive-item {
  width: 1080px;
  height: 540px;
}
.white-container {
  padding-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: center;
  box-shadow: 4px 12px 20px 0 rgba(0, 0, 0, 0.04);
  margin: 50px auto;
  max-width: 60%;
}

.step-card {
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 5px 50px;
}
.step-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 5px;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.information-wrapper p {
  text-align: left;
  margin-bottom: 1rem !important;
}
.information-wrapper {
  margin: auto 50px;
}
.information-wrapper h4 {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin: auto !important;
}
h4 {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin: auto 50px;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
h5 {
  text-align: left;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.comentarys-wrapper {
  gap: 20px;
  align-items: center;
  margin: 5px 50px;
}
.comentary-wrapper {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin: 5px 50px;
  flex-direction: column;
}
button {
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.5rem 2.5rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}
textarea {
  resize: none;
  height: 100px;
  width: 300px;
}
</style>
