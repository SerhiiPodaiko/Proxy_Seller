import axios from 'axios'

const processBuild =
    process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_DEV_API_URL

const API = axios.create({
    baseURL: `${(processBuild || '').replace(/\/$/, '')}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default API