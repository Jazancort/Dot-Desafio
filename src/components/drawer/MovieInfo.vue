<template>
  <div :class="`movie-info__${gap}`" class="movie-info">
    <!-- IMAGEM DO FILME -->
    <img
      :src="`https://image.tmdb.org/t/p/original${poster}`"
      :height="imgHeight"
      class="header--logo-img"
    />

    <!-- NOME DO FILME -->
    <div :class="`movie-info--text-name__${nameSize}`" class="movie-info--text-name">
      {{ title }}
    </div>

    <!-- QUANTIDADE DO FILME -->
    <div v-if="!hasCart" class="movie-info--text-quantity">{{ quantity }}</div>

    <!-- PREÇO DO FILME -->
    <div class="movie-info--text-price">R$9,99</div>

    <!-- ICONE DE CARRINHO -->
    <div v-if="hasCart" class="movie-info--text-icon">
      <q-btn flat round color="teal-5" icon="shopping_cart" size="12px" @click="addToCart" />
    </div>

    <!-- ICONE DE LIXEIRA -->
    <div class="movie-info--text-icon">
      <q-btn flat round icon="delete" size="12px" @click="removeItem" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieInfo',

  props: {
    hasCart: {
      type: Boolean,
      default: false
    },

    imgHeight: {
      type: String,
      default: '50px'
    },

    gap: {
      type: String,
      default: 'small'
    },

    nameSize: {
      type: String,
      default: 'small'
    },

    title: {
      type: String,
      default: ''
    },

    date: {
      type: String,
      default: ''
    },

    poster: {
      type: String,
      default: ''
    },

    genres: {
      type: String,
      default: ''
    },

    votes: {
      type: Number,
      default: null
    },

    id: {
      type: Number,
      default: null
    },

    quantity: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      drawerRight: false
    }
  },

  methods: {
    addToCart() {
      const movie = {
        id: this.id,
        title: this.title,
        quantity: 1,
        poster: this.poster
      }

      let cart = JSON.parse(localStorage.getItem('cart')) || []

      // Verifica se o filme já está no carrinho
      const movieIndex = cart.findIndex((item) => item.id === movie.id)

      if (movieIndex !== -1) {
        // Remove o filme do carrinho caso já exista
        cart.splice(movieIndex, 1)
      } else {
        // Adiciona o filme ao carrinho caso não exista
        cart.push(movie)
      }

      this.removeFromFavorites()

      // Salva o carrinho atualizado no localStorage
      localStorage.setItem('cart', JSON.stringify(cart))
    },

    removeItem() {
      if (!this.hasCart) {
        this.removeFromCart()
      } else {
        this.removeFromFavorites()
      }
    },

    removeFromCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || []

      const updatedCart = cart.filter((cart) => cart.id !== this.id)

      localStorage.setItem('cart', JSON.stringify(updatedCart))
    },

    removeFromFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []

      const updatedFavorites = favorites.filter((favorite) => favorite.id !== this.id)

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-info {
  display: inline-flex;
  margin-top: 15px;

  &__small {
    gap: 18px;
  }

  &__medium {
    gap: 20px;
  }

  &__big {
    gap: 28px;
  }

  &--text {
    font-size: 14px;
    font-weight: 500;
    color: #4b5c6b;
    align-self: center;

    &-name {
      @extend .movie-info--text;
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &__small {
        width: 145px;
      }

      &__medium {
        width: 200px;
      }

      &__big {
        width: 275px;
      }
    }

    &-quantity {
      @extend .movie-info--text;
      width: 15px;
    }

    &-icon {
      @extend .movie-info--text;
      margin-left: -10px;
    }

    &-price {
      @extend .movie-info--text;
      min-width: 20px;
    }
  }
}
</style>
