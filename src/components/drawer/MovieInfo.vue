<template>
  <div :class="`movie-info__${gap}`" class="movie-info">
    <!-- IMAGEM DO FILME -->
    <img
      :src="`https://image.tmdb.org/t/p/original${poster}`"
      :height="imgHeight"
      class="header--logo-img"
    />

    <!-- NOME DO FILME -->
    <div class="movie-info--text-name">{{ title }}</div>

    <!-- QUANTIDADE DO FILME -->
    <div v-if="!hasCart" class="movie-info--text">{{ quantity }}</div>

    <!-- PREÇO DO FILME -->
    <div class="movie-info--text-price">R$9,99</div>

    <!-- ICONE DE CARRINHO -->
    <div v-if="hasCart" class="movie-info--text-icon">
      <q-btn flat round color="teal-5" icon="shopping_cart" size="12px" />
    </div>

    <!-- ICONE DE LIXEIRA -->
    <div class="movie-info--text-icon">
      <q-btn flat round icon="delete" size="12px" />
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
  }
}
</script>

<style lang="scss" scoped>
.movie-info {
  display: inline-flex;
  margin-top: 15px;

  &__small {
    gap: 16px;
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
      min-width: 95px;
      max-width: 145px;
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
