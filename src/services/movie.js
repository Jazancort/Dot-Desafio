const account_id = localStorage.getItem('account_id')
const session_id = localStorage.getItem('guest_session_id')

export default ($axios) => ({
  getPopularMovies: (params) => $axios.get(`/discover/movie?page`, { params }),

  getMovieGenres: () => $axios.get('/genre/movie/list'),

  searchMovie: (params) => $axios.get(`/search/movie`, { params }),

  newSession: () => $axios.post('/authentication/guest_session/new'),

  addToFavorite: (movieId) =>
    $axios.post(`/account/${account_id}/favorite`, null, {
      params: {
        session_id: session_id
      },
      data: {
        media_type: 'movie',
        media_id: movieId,
        favorite: true
      }
    })
})
