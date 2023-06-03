export default ($axios) => ({
  getPopularMovies: () => $axios.get('/movie/popular')
})
