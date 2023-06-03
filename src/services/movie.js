export default ($axios) => ({
  getPopularMovies: (params) => $axios.get(`/discover/movie?page`, { params }),

  getMovieGenres: () => $axios.get('/genre/movie/list'),

  searchMovie: (params) => $axios.get(`/search/movie`, { params })
})
