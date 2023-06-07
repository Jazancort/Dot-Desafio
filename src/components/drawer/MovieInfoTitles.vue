<template>
  <div :class="`movie-info-title__${gap}`" class="movie-info-title">
    <!-- IMAGEM DO FILME -->
    <div class="movie-info-title--text">Imagem</div>

    <!-- NOME DO FILME -->
    <div class="movie-info-title--text">Nome</div>

    <!-- QUANTIDADE DO FILME -->
    <div class="movie-info-title--text-qtd">Qtd</div>

    <!-- PREÇO DO FILME -->
    <div class="movie-info-title--text-price">Preço</div>
  </div>
</template>

<script>
export default {
  name: 'MovieInfoTitles',

  props: {
    gap: {
      type: String,
      default: 'medium'
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-info-title {
  display: inline-flex;
  gap: 25px;
  margin-top: 40px;
  margin-left: -5px;

  &__small {
    gap: 16px;
  }

  &__medium {
    gap: 26px;
  }

  &__big {
    gap: 45px;
  }

  &--text {
    font-size: 16px;
    font-weight: 500;
    color: #4b5c6b;
    align-self: center;

    &-qtd {
      @extend .movie-info-title--text;
      margin-left: 165px;
    }

    &-price {
      @extend .movie-info-title--text;
      margin-left: -15px;
    }

    @media (max-width: 600px) {
      &-qtd {
        @extend .movie-info-title--text;
        margin-left: 50px;
      }

      &-price {
        @extend .movie-info-title--text;
        margin-left: -0;
      }
    }
  }
}
</style>
