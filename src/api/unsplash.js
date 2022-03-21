import axios from "axios";


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID GyoIN5qNlq0LOIvAWbBss9MmMyXWXWqr1y-We8a6XKw'
    }})