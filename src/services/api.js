import axios from 'axios'

const api = axios.create({
    baseURL: "https://google-search3.p.rapidapi.com/api/v1",
    headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': "6d2ce0374amsh1db72df4501bf49p1db917jsn1ccab734b647"
    }
})

export default api;
