import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.25.1.119:3333',
})
