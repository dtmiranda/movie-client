import axios from 'axios'


export default axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
})