import { api } from '../services/api'

export function setAuthToken (token: string): void {
  api.defaults.headers.common.authorization = `Bearer ${token}`
}
