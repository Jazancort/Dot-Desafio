<template>
  <div class="movie-info-title">
    <!-- IMAGEM DO FILME -->
    <div class="movie-info-title--text">Imagem</div>

    <!-- NOME DO FILME -->
    <div class="movie-info-title--text">Nome</div>

    <!-- QUANTIDADE DO FILME -->
    <div class="movie-info-title--text-qtd">Qtd</div>

    <!-- PREÇO DO FILME -->
    <div class="movie-info-title--text">Preço</div>
  </div>
</template>

<script>
export default {
  name: 'MovieInfoTitles',

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.movie-info-title {
  display: inline-flex;
  gap: 25px;
  margin-top: 40px;

  &--text {
    font-size: 16px;
    font-weight: 500;
    color: #4b5c6b;
    align-self: center;

    &-qtd {
      @extend .movie-info-title--text;
      margin-left: 50px;
    }
  }
}
</style>
