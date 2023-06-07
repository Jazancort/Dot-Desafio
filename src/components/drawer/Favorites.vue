<template>
  <!-- DRAWER DOS FAVORITOS -->
  <q-drawer
    v-model="drawerRight"
    :width="365"
    :min-width="500"
    :breakpoint="500"
    :no-swipe-backdrop="$q.platform.is.mobile ? false : true"
    behavior="mobile"
    side="right"
    content-class="white"
    bordered
    elevated
    no-swipe-open
    overlay
    @hide="closeFav"
  >
    <q-scroll-area class="fit">
      <div class="drawer">
        <div class="drawer-header">
          <!-- TITULO DO DRAWER -->
          <span class="drawer-header--title">Meus Favoritos</span>

          <!-- LIMPA OS FAVORITOS -->
          <span v-if="favorites.length > 0" class="drawer-header--clear" @click="clearFavorites">
            Esvaziar
          </span>
        </div>
      </div>

      <div class="drawer-content">
        <div v-for="movie in favorites" :key="movie.id">
          <!-- CARDS DOS FILMES -->
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

    <!-- BOTÃO DE FECHAR O DRAWER -->
    <div class="drawer-close" style="top: 5px; right: 10px">
      <q-btn dense flat round icon="close" @click="closeFav" />
    </div>
  </q-drawer>
</template>

<script>
import { watchFavoritesCount } from '../../utils/localStorage'
import MovieInfo from './MovieInfo'

export default {
  name: 'Favorites',

  components: {
    MovieInfo
  },

  props: {
    /* Indica se o drawer de favoritos está aberto */
    openFavDrawer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      /* Controla o estado de exibição do drawer */
      drawerRight: false,

      /* Filmes nos favoritos */
      favorites: []
    }
  },

  created() {
    /* Observa a contagem de favoritos e chama a função loadFavorites */
    watchFavoritesCount(this.loadFavorites)
  },

  watch: {
    /* Observa a propriedade openFavDrawer e executa ações quando o valor mudar */
    openFavDrawer(newVal) {
      this.drawerRight = newVal

      /* Chama a função loadFavorites */
      this.loadFavorites()
    }
  },

  methods: {
    /* Fecha o drawer de favoritos */
    closeFav() {
      this.drawerRight = false
      this.$emit('closeFav')
    },

    /* Carrega os favoritos do armazenamento local */
    loadFavorites() {
      /* Obtém os dados de favoritos do armazenamento local */
      const favoritesData = localStorage.getItem('favorites')
      if (favoritesData) {
        /* Converte os dados de favoritos para o formato adequado */
        this.favorites = JSON.parse(favoritesData)
      } else {
        /* Caso não haja dados de favoritos, define como uma lista vazia */
        this.favorites = []
      }
    },

    /* Limpa a lista de favoritos */
    clearFavorites() {
      /* Remove os favoritos do armazenamento local */
      localStorage.removeItem('favorites')

      /* Limpa a lista de favoritos */
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
