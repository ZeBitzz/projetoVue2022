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
      <div class="comentary-wrapper">
        <textarea v-model="commentText"></textarea>
        <button type="submit" @click="addComments">Submeter</button>
      </div>
      <div
        class="comentarys-wrapper"
        v-for="(topic, index) in tutorial.comments"
        :key="index"
      >
        <p>{{ topic.username }}</p>
        <p>{{ topic.text }}</p>
        <p></p>
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
  height: 90vh;
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
  align-items: center;
  justify-content: center;
  box-shadow: 4px 12px 20px 0 rgba(0, 0, 0, 0.04);
  margin: 50px auto;
  max-width: 60%;
}

.step-card {
  display: flex;
  gap: 20px;
  align-items: center;
}
.step-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 5px;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}
.information-wrapper h4 {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
}
.information-wrapper p {
  text-align: left;
  margin-bottom: 2rem;
}
.information-wrapper {
  margin: auto 50px;
}
</style>
