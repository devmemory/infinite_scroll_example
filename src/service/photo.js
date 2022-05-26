import axios from "axios"

export default async (page, size = 10) => {
    console.log(`[api] call`, { page, size })
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${size}`

    return await axios.get(url)
}