<template>
  <q-layout class="shadow-2" view="lHh Lpr lFf">
    <!-- Header da aplicação -->
    <q-header class="header">
      <q-toolbar class="header--content">
        <!-- IMAGEM DA LOGO -->
        <div class="header--logo" @click="$router.push('/')">
          <img v-if="$q.platform.is.mobile" src="dot+_small.png" class="header--logo-img" />
          <img v-else src="dot+.png" class="header--logo-img" />
        </div>

        <div class="header--input">
          <q-input
            ref="searchInput"
            v-model="text"
            debounce="500"
            label="Pesquisar"
            bg-color="white"
            color="blue-grey-6"
            class="header--input__big"
            outlined
            @input="handleSearchInput"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>

            <q-menu v-model="showOptions" fit no-focus>
              <q-list v-if="searchOptions.length > 0" bordered dense separator class="header--list">
                <q-infinite-scroll
                  @load="loadMoreOptions"
                  :offset="scrollOffset"
                  :throttle="scrollThrottle"
                  :disabled="isLoadingOptions"
                >
                  <q-item v-for="option in displayedOptions" :key="option.id" clickable>
                    <q-item-section avatar>
                      <q-avatar square>
                        <img :src="option.poster" alt="Movie Poster" />
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{ option.title }}</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item v-if="isLoadingOptions">
                    <q-item-section>
                      <q-spinner-hourglass color="primary" size="24px" />
                    </q-item-section>
                  </q-item>
                </q-infinite-scroll>
              </q-list>
            </q-menu>
          </q-input>
        </div>

        <div class="header--buttons">
          <q-btn icon="favorite" size="16px" dense flat @click="actionFavDrawer()">
            <q-badge class="header--buttons-badge" rounded floating>4</q-badge>
          </q-btn>

          <q-btn
            icon="shopping_cart"
            size="14px"
            class="q-ml-md"
            dense
            flat
            @click="actionCartDrawer()"
          >
            <q-badge class="header--buttons-badge" rounded floating>4</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <Favorites :openFavDrawer="openFavDrawer" />
    <Cart :openCartDrawer="openCartDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Favorites from '../components/drawer/Favorites.vue'
import Cart from '../components/drawer/Cart.vue'

export default {
  name: 'MainLayout',
  components: {
    Favorites,
    Cart
  },

  data() {
    return {
      text: null,
      openFavDrawer: false,
      openCartDrawer: false,
      showOptions: false,
      searchOptions: [],
      displayedOptions: [],
      isLoadingOptions: false,
      scrollOffset: 200,
      scrollThrottle: 300
    }
  },

  methods: {
    actionFavDrawer() {
      this.openFavDrawer = !this.openFavDrawer
      this.openCartDrawer = false
    },

    actionCartDrawer() {
      this.openCartDrawer = !this.openCartDrawer
      this.openFavDrawer = false
    },

    handleSearchInput() {
      if (this.text) {
        this.$movie
          .searchMovie({ page: 1, query: this.text })
          .then((response) => {
            this.searchOptions = response.data.results.map((movie) => ({
              id: movie.id,
              title: movie.title,
              poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`
            }))
            this.displayedOptions = this.searchOptions.slice(0, 5) // Mostra apenas os primeiros 5 resultados
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        this.searchOptions = []
        this.displayedOptions = []
      }
    },

    loadMoreOptions() {
      const startIndex = this.displayedOptions.length
      const endIndex = startIndex + 5
      if (endIndex <= this.searchOptions.length) {
        this.isLoadingOptions = true
        setTimeout(() => {
          this.displayedOptions = this.searchOptions.slice(0, endIndex)
          this.isLoadingOptions = false
        }, 500) // Simulação de uma carga assíncrona para carregar mais resultados. Ajuste conforme necessário.
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #d1efec;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &--logo {
    cursor: pointer;
    margin-left: 40px;
    margin-right: -20px;

    &-img {
      height: 50px;
    }
  }

  &--list {
    min-width: 100px;
  }

  &--input {
    background-color: #d1efec;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &__options {
      max-height: 400px;
      overflow-y: auto;
    }

    &__wrapper {
      position: relative;
      display: inline-block;
    }

    &__no-options {
      padding: 10px;
      text-align: center;
    }

    &__big {
      width: 100%;
      max-width: 500px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Adicionando sombra */
    }
  }

  &--buttons {
    margin-right: 40px;

    &-badge {
      padding: 5px 5px 3px 5px;
      color: black;
      background-color: #fdf3d3;
    }
  }
}

@media (max-width: 600px) {
  .header {
    &--logo {
      margin-left: 0px;
      margin-right: 10px;
    }

    &--list {
      max-width: 200px;
    }

    &--input {
      max-width: 200px;
      height: 20px;
    }

    &--buttons {
      margin-right: 15px;
      position: absolute;
      right: 0;
    }
  }
}
</style>
