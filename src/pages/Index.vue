<template>
  <div class="movie-list">
    <div v-for="i in 8" :key="i" class="movie-list--card">
      <MovieCard />
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
export default {
  name: 'PageIndex',
  components: {
    MovieCard
  }
}
</script>

<style lang="scss" scoped>
.movie-list {
  margin: 100px 300px 0px 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;

  &--card {
    width: 250px;
    flex-basis: auto; /* Configuração para 4 elementos por fileira */
    margin-bottom: 50px; /* Adiciona um espaçamento no final dos itens da fileira */
    margin-top: -50px; /* Adiciona um espaçamento no final dos itens da fileira */
  }
}
</style>
