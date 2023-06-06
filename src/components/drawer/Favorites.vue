<template>
  <q-drawer
    side="right"
    v-model="drawerRight"
    bordered
    elevated
    overlay
    :width="350"
    :min-width="500"
    :breakpoint="500"
    content-class="white"
  >
    <q-scroll-area class="fit">
      <div class="drawer">
        <div class="drawer-header">
          <span class="drawer-header--title">Meus Favoritos</span>
          <span class="drawer-header--clear" @click="clearFavorites">Esvaziar</span>
        </div>
      </div>

      <div class="drawer-content">
        <div v-for="movie in favorites" :key="movie.id">
          <MovieInfo
            :poster="movie.poster"
            :title="movie.title"
            :date="movie.release_date"
            :votes="movie.vote_average"
            :id="movie.id"
            :hasCart="true"
          />
        </div>
      </div>
    </q-scroll-area>

    <div class="drawer-close" style="top: 5px; right: 10px">
      <q-btn dense flat round icon="close" @click="drawerRight = !drawerRight" />
    </div>
  </q-drawer>
</template>

<script>
import MovieInfo from './MovieInfo'

export default {
  name: 'Favorites',

  components: {
    MovieInfo
  },

  props: {
    openFavDrawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      drawerRight: false,
      favorites: []
    }
  },

  watch: {
    openFavDrawer() {
      this.drawerRight = !this.drawerRight
      this.loadFavorites()
    }
  },

  methods: {
    loadFavorites() {
      const favoritesData = localStorage.getItem('favorites')
      if (favoritesData) {
        this.favorites = JSON.parse(favoritesData)
      } else {
        this.favorites = []
      }
    },

    clearFavorites() {
      localStorage.removeItem('favorites')
      this.favorites = []
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  margin: 14px 12px 20px 8px;

  &-close {
    position: absolute;
    height: 10px;
  }

  &-content {
    margin: 0 8px 0 8px;
  }

  &-header {
    display: flex;
    margin-top: 40px;

    &--title {
      font-weight: 500;
      color: #4b5c6b;
      font-size: 20px;
    }

    &--clear {
      cursor: pointer;
      text-decoration: underline;
      color: #710fbf;
      display: flex;
      font-size: 18px;
      align-items: flex-end;
      margin-left: auto;
    }
  }
}

.drawer-header--clear:visited {
  color: purple;
}
</style>
