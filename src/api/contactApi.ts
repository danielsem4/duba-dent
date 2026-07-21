import api from '@/lib/axios'

export interface ContactPayload {
  name: string
  email: string
  message: string
}

/**
 * Stub for the contact-form submission endpoint. Wire this to a real backend
 * (or a serverless function) when available. Kept here to demonstrate the
 * `src/api` layer role: plain async functions wrapping the axios client.
 */
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  await api.post('/contact', payload)
}
