// src/utils/api.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mvp-tutor-ia-api.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
})
