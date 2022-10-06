import Axios from 'axios'

export const BASE_URL =
  'https://s5honfx6f0.execute-api.us-east-1.amazonaws.com/latest/api'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
