import axios from "axios";

// https://vitejs.dev/guide/env-and-mode.html
export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:5000'
})