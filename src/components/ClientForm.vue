<template>
  <div class="containerCard">
    <div class="card">
      <div class="imageProfile"></div>
      <div class="info">
        <p class="info-username">{{ getLoggedUser.username }}</p>
        <p class="info-email">{{ getLoggedUser.email }}</p>
        <div class="password-container">
          <div>
            <p class="password-show" v-if="showPassword">
              {{ getLoggedUser.password }}
            </p>
            <input
              class="password-noshow"
              v-else
              type="password"
              id="pwd"
              name="pwd"
              value="dummy"
              disabled
            />
          </div>
          <div class="button-password" @click="this.togglePassword">
            {{ showPassword ? "🔓" : " 🔒" }}
            <div class="tooltip">
              {{
                showPassword
                  ? "Esconder palavra-passe"
                  : " Mostrar palavra-passe"
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <h2>Favoritos</h2>
      <ul class="list">
        <li
          class="list-item"
          v-for="(favorite, index) in favorites"
          :key="index"
        >
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  name: "ClientForm",
  data() {
    return {
      showPassword: false,
      favorites: [],
    };
  },
  created() {
    this.favorites = this.getFavorites();
  },
  computed: {
    ...mapGetters(["getLoggedUser", "isUser", "getTutorials"]),
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    getFavorites() {
      let favorites = [];
      this.getTutorials.forEach((tutorial) => {
        if (this.getLoggedUser.favorites.includes(tutorial.id)) {
          favorites.push(tutorial);
        }
      });
      return favorites;
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 60%;
  margin: 50px auto;
  min-height: 456px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 12px 20px 0 rgba(0, 0, 0, 0.04);
  flex-direction: column;
}
.password-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
}

.button-password {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dbe9f0;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 1);
  text-align: center;
  font-size: 22px;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  -webkit-touch-callout: none;
  user-select: none;
  position: relative;
}

.button-password:hover {
  font-size: 20px;
}
.password-show {
  width: 200px;
}
.password-noshow {
  width: 200px;
  background: transparent;
  border: none;
  text-align: center;
}
.tooltip {
  height: 46px;
  padding: 10px;
  width: 160px;
  font-size: 14px;
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.button-password:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
.info {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-username {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  line-height: 24px;
}
.info-email {
  font-size: 16px;
  font-weight: 600;
}

/* Favotires */
.main {
  margin: 4rem auto;
  width: 60%;
  cursor: pointer;
  margin-bottom: 100px;
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
  flex-wrap: wrap;
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
