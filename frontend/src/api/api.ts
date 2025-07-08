import axios from "axios";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const api = axios.create({
    baseURL: `${BACKEND_URL}`,
    timeout: 60000
})