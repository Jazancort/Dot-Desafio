<template>
  <div class="movie-list" ref="movieList">
    <div v-for="movie in movies" :key="movie.id" class="movie-list--card">
      <MovieCard
        :poster="movie.poster_path"
        :title="movie.title"
        :date="movie.release_date"
        :genres="getMovieGenre(movie.genre_ids)"
        :votes="movie.vote_average"
        :id="movie.id"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/list/MovieCard.vue'

export default {
  name: 'PageIndex',

  components: {
    MovieCard
  },

  data() {
    return {
      movies: [],
      genres: [],
      currentPage: 1,
      loading: false,
      offset: 200 // Define o offset desejado, em pixels
    }
  },

  created() {
    this.fetchMovies()
    this.fetchGenres()
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    fetchMovies() {
      this.$movie
        .getPopularMovies({ page: this.currentPage })
        .then((response) => {
          this.movies = this.movies.concat(response.data.results)
          this.loading = false
        })
        .catch(() => {
          this.$notifyError('Erro ao buscar filmes!')
        })
    },

    fetchGenres() {
      this.$movie
        .getMovieGenres()
        .then((response) => {
          this.genres = response.data.genres
        })
        .catch(() => {
          this.$notifyError('Erro ao buscar generos!')
        })
    },

    getMovieGenre(genreIds) {
      const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id)).slice(0, 4)

      return movieGenres.map((genre) => genre.name).join(', ')
    },

    handleScroll() {
      const movieList = this.$refs.movieList
      const scrollPosition = window.pageYOffset + window.innerHeight
      const movieListHeight = movieList.offsetHeight

      if (scrollPosition >= movieListHeight - window.innerHeight - this.offset && !this.loading) {
        this.loading = true
        this.currentPage++
        this.fetchMovies()
      }
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
    margin: 40px 20px 0 20px;
  }

  &--card {
    max-height: 500px;
    width: 350px;
    flex-basis: auto;
    margin-bottom: 200px;
    margin-top: -50px;

    @media (max-width: 600px) {
      width: 100%;
      margin-bottom: 150px;
      margin-top: 0;
    }

    &:last-child {
      @media (max-width: 600px) {
        margin-bottom: 150px;
      }
    }
  }
}
</style>
