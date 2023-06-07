<template>
  <div id="movie-card">
    <q-card class="movie-card">
      <!-- POSTER DO FILME -->
      <img :src="`https://image.tmdb.org/t/p/original${poster}`" class="movie-card--img" />

      <!-- BOTÃO DE ADICIONAR AOS FAVORITOS -->
      <div class="row col-auto movie-card--favorite">
        <q-btn
          :color="isFavorite ? 'red-7' : 'grey-7'"
          :ripple="false"
          icon="favorite"
          round
          flat
          @click="toggleFavorite"
        ></q-btn>
      </div>

      <!-- DATA DO FILME -->
      <div class="movie-card--date">
        <div class="movie-card--date-text">{{ formattedDate }}</div>
      </div>

      <q-card-section>
        <!-- TITULO DO FILME -->
        <div class="movie-card--info">
          <div class="name">{{ title }}</div>

          <div class="gender">
            <!-- NOTAS DO FILME -->
            <q-icon class="icon" size="sm" name="r_star" />
            <span class="icon--text">{{ votes }} </span>

            <!-- GÊNEROS DO FILME -->
            <div class="gender">{{ genres }}</div>
          </div>

          <!-- PREÇO DO FILME -->
          <div class="price">R$ 9,99</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <!-- BOTÃO DE ADICIONAR AO CARRINHO -->
        <q-btn class="movie-card--button full-width" no-caps @click="addToCart()">Adicionar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { watchFavoritesCount } from '../../utils/localStorage'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default {
  name: 'MovieCard',

  props: {
    /* Título do filme */
    title: {
      type: String,
      default: ''
    },

    /* Data de lançamento do filme */
    date: {
      type: String,
      default: ''
    },

    /* URL do pôster do filme */
    poster: {
      type: String,
      default: ''
    },

    /* Gêneros do filme */
    genres: {
      type: String,
      default: ''
    },

    /* Total de votos recebidos pelo filme */
    votes: {
      type: Number,
      default: null
    },

    /* ID do filme */
    id: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      /* Controla se o filme foi adicionado aos favoritos */
      isFavorite: false
    }
  },

  computed: {
    /* Retorna a data formatada no formato "d 'de' MMMM, yyyy" */
    formattedDate() {
      const data = new Date(this.date.replace(/-/g, '/'))
      return format(data, "d 'de' MMMM, yyyy", { locale: ptBR })
    }
  },

  created() {
    /* Verifica o status de favorito */
    this.checkFavoriteStatus()

    /* Observa a mudança na contagem de favoritos e chama a função checkFavoriteStatus */
    watchFavoritesCount(this.checkFavoriteStatus)
  },

  methods: {
    /* Cria um objeto de filme com as informações fornecidas */
    createMovieObject(id, title, poster, genres) {
      return {
        id: id,
        title: title,
        poster: poster,
        genres: genres,
        quantity: 1
      }
    },

    /* Adiciona o filme ao carrinho */
    addToCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || []

      const movieExists = cart.find((movie) => movie.id === this.id)

      if (movieExists) {
        /* Se o filme já estiver no carrinho, incrementa a quantidade */
        movieExists.quantity++
      } else {
        /* Se o filme ainda não estiver no carrinho, adiciona as informações */
        cart.push(this.createMovieObject(this.id, this.title, this.poster, this.genres))
      }

      localStorage.setItem('cart', JSON.stringify(cart))
    },

    /* Alterna o status de favorito */
    toggleFavorite() {
      if (this.isFavorite) {
        /* Remove o filme dos favoritos */
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        favorites = favorites.filter((favorite) => favorite.id !== this.id)
        localStorage.setItem('favorites', JSON.stringify(favorites))
      } else {
        /* Adiciona o filme aos favoritos */
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        favorites.push({ id: this.id, title: this.title, poster: this.poster, genres: this.genres })
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }

      this.isFavorite = !this.isFavorite
    },

    /* Verifica o status de favorito */
    checkFavoriteStatus() {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []
      this.isFavorite = favorites.some((favorite) => favorite.id === this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .q-card__actions {
    padding: 0;
  }
  .q-btn--rectangle {
    border-radius: 0;
  }
  .q-card__section--vert {
    padding: 4px;
    /* max-height: 85px; */
    min-height: 90px;
  }
}

.movie-card {
  &--favorite {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &--img {
    max-height: 500px;
  }

  &--date {
    color: white;
    position: absolute;
    top: 74%;
    left: 50%;
    transform: translate(-50%, -50%);

    &-text {
      font-size: 16px;
      font-weight: 500;
      text-shadow: 2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black;
    }
  }

  &--info {
    text-align: center;
    color: #293845;
    font-weight: 500;
    font-size: 14px;

    .name {
      font-size: 16px;
      font-weight: 700;
    }

    .icon {
      padding-bottom: 6px;
      &--text {
        font-size: 17px;
        font-weight: 700;
      }
    }

    .gender {
      margin-bottom: 5px;
    }
  }

  &--button {
    color: white;
    background-color: #6558f5;
  }
}
</style>
