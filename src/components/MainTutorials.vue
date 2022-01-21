<template>
  <div class="main">
    <h2>Tutoriais</h2>
    <p>Pode filtrar os tutoriais pela categoria que deseja.</p>
    <div class="select-wrapper">
      <select class="select-categories" v-model="selectedCategory">
        <option value="" disabled>SELECIONA CATEGORIA</option>
        <option v-for="(category, index) in getCategories" :key="index">
          {{ category }}
        </option>
      </select>
    </div>
    <ul class="list">
      <li
        class="list-item"
        v-for="(tutorial, index) in filteredTutorials"
        :key="index"
      >
        <div class="img-wrapper">
          <img :src="tutorial.thumbnail" :alt="tutorial.title" />
        </div>
        <div class="info-tutorial">
          <div class="details-tutorial">
            <p>{{ tutorial.category }}</p>
            <h4>{{ tutorial.title }}</h4>
            <p>{{ tutorial.description }}</p>
          </div>
          <div class="button-wrapper">
            <button><i class="far fa-heart"></i></button>
            <router-link
              :to="{ name: 'tutorial', params: { id: tutorial.id } }"
            >
              <button class="direction-button">Ver mais</button>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        tutorialId: "",
        userUsername: "",
      },
      tutorials: [],
      selectedCategory: "",
    };
  },
  name: "MainTutorials",
  created() {
    this.tutorials = this.getTutorials;
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getTutorials", "getCategories"]),
    filteredTutorials() {
      if (this.selectedCategory !== "") {
        return this.tutorials.filter(
          (tutorial) => tutorial.category === this.selectedCategory
        );
      }
      return this.tutorials;
    },
  },
  methods: {
    addFavorite() {},
  },
};
</script>
<style scoped>
.main {
  margin: 4rem auto;
  width: 60%;
}
.main h2 {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.main p {
  text-align: left;
  margin-bottom: 2.5rem;
}
.list {
  /*   margin: 0 auto; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.list-item {
  display: flex;
  width: 100%;
  border: 1px solid whitesmoke;
  border-radius: 4px;
  box-shadow: 4px 12px 20px 0 rgba(0, 0, 0, 0.04);
}
.img-wrapper {
  height: 280px;
  width: 40%;
  overflow: hidden;
  position: relative;
}
.img-wrapper img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: auto;
}
.info-tutorial {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  width: 60%;
  box-sizing: border-box;
}
.button-wrapper {
  align-self: flex-end;
  display: flex;
  align-items: center;
}
.details-tutorial * {
  text-align: left;
  margin-bottom: 0.5rem !important;
}
.details-tutorial h4 {
  font-weight: bold;
  font-size: 1.25rem;
}
.button-wrapper button {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
}
.button-wrapper .direction-button {
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.5rem 2.5rem;
  border-radius: 4px;
}
.button-wrapper i {
  color: var(--primary-color);
  font-size: 1.25rem;
}
.select-categories {
  border-radius: 4px;
  border-color: whitesmoke;
  padding: 0.5rem;
}
.select-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
}
</style>
