import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL
})
export default ({ Vue }) => {
  Vue.prototype.$axios = api
}
export { api }
