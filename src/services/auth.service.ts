import axios from 'axios'

const axiosClient = axios.create({
  baseURL:'https://vet-rolling.onrender.com'
})

export default axiosClient