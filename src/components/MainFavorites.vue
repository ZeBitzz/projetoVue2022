<template lang="">
  <div class="main">
    <h2>Favoritos</h2>
    <ul class="list">
      <li class="list-item" v-for="(favorite, index) in favorites" :key="index">
        <router-link
          class="routerFav"
          :to="{ name: 'tutorial', params: { id: favorite.id } }"
        >
          <div class="img-wrapper">
            <img :src="favorite.thumbnail" :alt="favorite.title" />
          </div>
          <div class="info-favorite">
            <div class="details-favorite">
              <p>{{ favorite.category }}</p>
              <h4>{{ favorite.title }}</h4>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MainTutorials",
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    this.favorites = this.getFavorites();
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getTutorials"]),
  },
  methods: {
    getFavorites() {
      let favorites = [];
      this.getTutorials.forEach((tutorial) => {
        if (this.getLoggedUser.favorites.slice(0, 3).includes(tutorial.id)) {
          favorites.push(tutorial);
        }
      });
      return favorites;
    },
  },
};
</script>
<style scoped>
.main {
  margin: 4rem auto;
  width: 60%;
  cursor: pointer;
}
.main h2 {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.list {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.list-item {
  display: flex;
  width: 100%;
  border: 1px solid whitesmoke;
  border-radius: 4px;
  box-shadow: 4px 12px 20px 0 rgba(0, 0, 0, 0.04);
  width: calc(calc(100%-2rem) / 3);
}
.img-wrapper {
  height: 140px;
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
.info-favorite {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  width: 60%;
  box-sizing: border-box;
}
.details-favorite * {
  text-align: left;
  margin-bottom: 0.5rem !important;
}
.details-favorite h4 {
  font-weight: bold;
  font-size: 1.25rem;
}
.routerFav {
  width: 100%;
  display: flex;
  text-decoration: none;
}
</style>
