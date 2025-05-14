import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6aeb3388aa4e46b98daae40db2a3a881'
    }
})