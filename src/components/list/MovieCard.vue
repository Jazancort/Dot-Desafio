<template>
  <div>
    <q-card class="movie-card">
      <img :src="`https://image.tmdb.org/t/p/original${poster}`" class="movie-card--img" />

      <div class="row col-auto movie-card--favorite">
        <q-btn color="grey-7" round flat icon="favorite"></q-btn>
      </div>

      <div class="movie-card--date">
        <div class="movie-card--date-text">7 de Janeiro, 2019</div>
      </div>

      <q-card-section>
        <div class="movie-card--info">
          <div class="name">{{ title }}</div>

          <div class="gender">
            <q-icon class="icon" size="sm" name="r_star" />
            <span class="icon--text">7 </span>
            <span class="gender">Gênero</span>
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
  }
}
.movie-card {
  &--favorite {
    position: absolute; /* Adiciona posicionamento absoluto */
    top: 5px; /* Define a distância do topo */
    right: 5px; /* Define a distância da direita */
  }

  &--img {
    max-height: 400px;
  }

  &--date {
    color: white;
    position: absolute; /* Adiciona posicionamento absoluto */
    text-align: center;
    top: 70%; /* Define a distância do topo */
    right: 20%;

    &-text {
      font-size: 16px;
      font-weight: 500;
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
      margin-left: 20px;
    }
  }

  &--button {
    color: white;
    background-color: #6558f5;
  }
}
</style>
