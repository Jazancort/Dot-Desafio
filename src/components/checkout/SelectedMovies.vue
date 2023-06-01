<template>
  <div class="selected-movies">
    <MovieInfoTitles gap="big" />

    <div v-for="index in itemCount" :key="index">
      <MovieInfo gap="big" />
      <hr v-if="isLastItem(index) && hasLine" class="content--line" />
    </div>

    <div v-if="hasTotal" class="row total">
      <div class="col-8 total--text">Total:</div>

      <div class="col total--price">R$ 19,98</div>
    </div>

    <q-btn v-if="hasButton" class="full-width button" no-caps label="Finalizar" />
  </div>
</template>

<script>
import MovieInfo from '../drawer/MovieInfo.vue'
import MovieInfoTitles from '../drawer/MovieInfoTitles.vue'
export default {
  name: 'SelectedMovies',

  components: {
    MovieInfo,
    MovieInfoTitles
  },

  props: {
    hasTitle: {
      type: Boolean,
      default: true
    },

    hasTotal: {
      type: Boolean,
      default: true
    },

    hasButton: {
      type: Boolean,
      default: true
    },

    hasLine: {
      type: Boolean,
      default: true
    },

    imgHeight: {
      type: String,
      default: '70px'
    }
  },

  data() {
    return {
      itemCount: 2 // Defina o número de vezes que o v-for deve ocorrer dinamicamente
    }
  },

  computed: {
    isLastItem() {
      return (index) => index === this.itemCount - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.selected-movies {
  max-width: 500px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5c6b;

  .title {
    font-size: 16px;
  }

  .total {
    margin: 30px 0 0 5px;
    &--text {
      font-size: 20px;
    }

    &--price {
      font-size: 26px;
      text-align: end;
    }
  }

  .button {
    margin-top: 20px;
    height: 46px;
    color: white;
    background-color: #6558f5;
    max-width: 100%;
    font-size: 18px;
  }

  .content {
    margin-top: 5px;

    &--line {
      border: none;
      height: 2px;
      color: #9eadba;
      background-color: #9eadba;
    }

    &--itens {
      margin-top: 5%;

      &-icon {
        height: 10px;
        color: #000;
      }
    }
  }
}
</style>
