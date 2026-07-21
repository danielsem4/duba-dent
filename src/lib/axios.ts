import axios from 'axios'

/**
 * Base HTTP client. No auth interceptor — this is a public landing-page app.
 * Point `VITE_API_URL` at a backend when one exists (e.g. a contact form endpoint).
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  headers: { 'Content-Type': 'application/json' },
})

export default api
