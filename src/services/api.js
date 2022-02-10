import axios from 'axios'
import env from '../env.json'

const api = axios.create({
    baseURL: "https://google-search3.p.rapidapi.com/api/v1",
    headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': env.RAPID_API_KEY
    }
})

export default api;