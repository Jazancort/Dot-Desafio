<template>
  <div id="movie-card">
    <q-card class="movie-card">
      <img :src="`https://image.tmdb.org/t/p/original${poster}`" class="movie-card--img" />

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

      <div class="movie-card--date">
        <div class="movie-card--date-text">7 de Janeiro, 2019</div>
      </div>

      <q-card-section>
        <div class="movie-card--info">
          <div class="name">{{ title }}</div>

          <div class="gender">
            <q-icon class="icon" size="sm" name="r_star" />
            <span class="icon--text">{{ votes }} </span>
            <div class="gender">{{ genres }}</div>
          </div>

          <div class="price">R$ 79,99</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn class="movie-card--button full-width" no-caps>Adicionar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',

  props: {
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
    }
  },

  data() {
    return {
      isFavorite: false
    }
  },

  created() {
    this.checkFavoriteStatus()
  },

  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite

      // Obtém os filmes favoritos do localStorage
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []

      if (this.isFavorite) {
        // Adiciona o filme aos favoritos
        favorites.push({ id: this.id, title: this.title, poster: this.poster, genres: this.genres })
      } else {
        // Remove o filme dos favoritos
        favorites = favorites.filter((favorite) => favorite.id !== this.id)
      }

      // Salva o array atualizado de favoritos no localStorage
      localStorage.setItem('favorites', JSON.stringify(favorites))
    },

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
