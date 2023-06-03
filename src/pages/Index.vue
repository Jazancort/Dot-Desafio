<template>
  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-list--card">
      <MovieCard
        :movies="movies"
        :poster="movie.poster_path"
        :title="movie.title"
        :date="movie.release_date"
      />
    </div>
  </div>
</template>

<script>
import { throws } from 'assert'
import MovieCard from '../components/list/MovieCard.vue'
export default {
  name: 'PageIndex',

  components: {
    MovieCard
  },

  data() {
    return {
      movies: [] // Certifique-se de inicializar a propriedade 'movies' como um array vazio
    }
  },

  created() {
    this.fetchMovies()
  },

  methods: {
    fetchMovies() {
      this.$movie
        .getPopularMovies()
        .then((response) => {
          console.log(response.data.results)
          this.movies = response.data.results
        })
        .catch((error) => {
          console.error(error)
        })
    }
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

  @media (max-width: 600px) {
    margin: 40px 40px 0 40px;
  }

  &--card {
    width: 250px;
    flex-basis: auto;
    margin-bottom: 50px;
    margin-top: -50px;

    @media (max-width: 600px) {
      width: 100%;
      margin-bottom: 0px;
      margin-top: 0;
    }
  }
}
</style>
