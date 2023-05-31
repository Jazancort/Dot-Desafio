<template>
  <div class="movie-list">
    <div v-for="i in 8" :key="i" class="movie-list--card">
      <MovieCard />
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/list/MovieCard.vue'
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
    flex-basis: auto;
    margin-bottom: 50px;
    margin-top: -50px;
  }
}
</style>
