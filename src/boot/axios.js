import axios from 'axios'
import movieService from '../services/movie'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000
})

const services = {
  movie: movieService(axiosInstance)
}

axiosInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${process.env.VUE_APP_API_KEY}`
  return config
})

export { axiosInstance, services }

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
  Vue.prototype.$movie = services.movie
}
