import axios from 'axios'

const api = axios.create({
    baseURL: "https://google-search3.p.rapidapi.com/api/v1"
})

export default api;