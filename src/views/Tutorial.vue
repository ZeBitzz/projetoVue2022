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
        <p>{{ tutorial.category }}</p>
        <h4>{{ tutorial.title }}</h4>
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
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "tutorial",
  data() {
    return {
      tutorial: {},
    };
  },
  created() {
    this.tutorial = this.getTutorial(this.$route.params.id);
    console.log(this.tutorial);
  },
  computed: {
    ...mapGetters(["getTutorial"]),
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
</style>
