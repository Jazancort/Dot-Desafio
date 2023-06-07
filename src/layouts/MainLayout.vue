<template>
  <q-layout class="shadow-2" view="lHh Lpr lFf">
    <!-- HEADER DA APLICAÇÃO -->
    <q-header class="header">
      <q-toolbar class="header--content">
        <!-- IMAGEM DA LOGO -->
        <div class="header--logo" @click="$router.push('/')">
          <img v-if="$q.platform.is.mobile" src="dot+_small.png" class="header--logo-img" />
          <img v-else src="dot+.png" class="header--logo-img" />
        </div>

        <!-- INPUT DE PESQUISA COM MENU DE RESULTADOS -->
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

        <!-- BOTÃO DE DRAWER DE FAVORITOS -->
        <div class="header--buttons">
          <q-btn icon="favorite" size="16px" dense flat @click="openFavDrawer = true">
            <q-badge v-if="favoritesCount > 0" class="header--buttons-badge" rounded floating>
              {{ favoritesCount }}
            </q-badge>
          </q-btn>

          <!-- BOTÃO DE DRAWER DO CARRINHO -->
          <q-btn
            icon="shopping_cart"
            size="14px"
            class="q-ml-md"
            dense
            flat
            @click="openCartDrawer = true"
          >
            <q-badge v-if="cartCount > 0" class="header--buttons-badge" rounded floating>{{
              cartCount
            }}</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- DRAWER DE FAVORITOS -->
    <Favorites :openFavDrawer="openFavDrawer" @closeFav="closeFavModal" />

    <!-- DRAWER DO CARRINHO -->
    <Cart :openCartDrawer="openCartDrawer" @closeCart="closeCartModal" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Favorites from '../components/drawer/Favorites.vue'
import Cart from '../components/drawer/Cart.vue'
import { watchFavoritesCount, getFavoritesCount, getCartCount } from '../utils/localStorage'
import { watchCartCount } from '../utils/localStorage'

export default {
  name: 'MainLayout',
  components: {
    Favorites,
    Cart
  },

  data() {
    return {
      /* Valor do input de pesquisa */
      text: null,

      /* Controla o estado de exibição do Drawer de favoritos */
      openFavDrawer: false,

      /* Controla o estado de exibição do Drawer do carrinho */
      openCartDrawer: false,

      /* Mostra as opções da pesquisa */
      showOptions: false,

      /* Opções do resultado da pesquisa */
      searchOptions: [],

      /* Opções do resultado da pesquisa que vão ser mostrados */
      displayedOptions: [],

      /* Se deve carregar novas opções */
      isLoadingOptions: false,

      /* Controle do Scroll */
      scrollOffset: 200,
      scrollThrottle: 300,

      /* Contagem de itens favoritos */
      favoritesCount: null,

      /* Contagem de itens no carrinho */
      cartCount: null
    }
  },

  created() {
    /* Obtém a contagem de favoritos */
    this.favoritesCount = getFavoritesCount()

    /* Obtém a contagem do carrinho */
    this.cartCount = getCartCount()

    /* Observa a mudança na contagem de favoritos */
    watchFavoritesCount(this.handleFavoritesCountChange)

    /* Observa a mudança na contagem do carrinho */
    watchCartCount(this.handleCartCountChange)

    /* Obtém o ID da sessão do convidado armazenado localmente */
    const guestSessionId = localStorage.getItem('guest_session_id')

    /* Obtém o horário de expiração armazenado localmente */
    const expiresAt = localStorage.getItem('expires_at')

    /* Verifica se o ID da sessão do convidado existe e se o horário de expiração é posterior ao horário atual */
    if (guestSessionId && new Date(expiresAt) > new Date()) {
    } else {
      /* Cria uma nova sessão */
      this.createNewSession()
    }
  },

  methods: {
    /** Atualiza a contagem de favoritos com o valor recebido
     * @param {Number} count - Contagem de favoritos
     */
    handleFavoritesCountChange(count) {
      this.favoritesCount = count
    },

    /** Atualiza a contagem do carrinho com o valor recebido
     * @param {Number} count - Contagem de itens no carrinho
     */
    handleCartCountChange(count) {
      this.cartCount = count
    },

    /* Cria uma nova sessão */
    createNewSession() {
      this.$movie.newSession().then((response) => {
        const { guest_session_id, expires_at } = response.data
        localStorage.setItem('guest_session_id', guest_session_id)
        localStorage.setItem('expires_at', expires_at)
        localStorage.setItem('account_id', 19803367)
        this.creatSession()
      })
    },

    /* Fecha o modal do carrinho */
    closeCartModal() {
      this.openCartDrawer = false
    },

    /* Fecha o modal de favoritos */
    closeFavModal() {
      this.openFavDrawer = false
    },

    /* Realiza a pesquisa dos filmes */
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
            this.displayedOptions = this.searchOptions.slice(0, 5)
          })
          .catch(() => {
            this.$notifyError('Erro ao buscar filmes!')
          })
      } else {
        this.searchOptions = []
        this.displayedOptions = []
      }
    },

    /* Carrega mais opções para exibir */
    loadMoreOptions() {
      const startIndex = this.displayedOptions.length
      const endIndex = startIndex + 5
      if (endIndex <= this.searchOptions.length) {
        this.isLoadingOptions = true
        setTimeout(() => {
          this.displayedOptions = this.searchOptions.slice(0, endIndex)
          this.isLoadingOptions = false
        }, 500)
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
      margin-right: 5px;
      position: absolute;
      right: 0;
    }
  }
}
</style>
