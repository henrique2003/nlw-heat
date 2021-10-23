import { createContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { setAuthToken } from '../../utils/set-auth-token'
import { IAuthContextData, IResponseAuthenticate, IResponseLoadUser, IUser } from './types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=f3dcebd96481e1c41baf'

  useEffect(() => {
    async function loadUser (): Promise<void> {
      const token = localStorage.getItem('@dowhile:token')

      if (token === null) return

      setAuthToken(token)

      const res = await api.get<IResponseLoadUser>('/profile')
      setUser(res.data.data)
    }

    async function singInWithGithub (code: string): Promise<void> {
      const res = await api.post<IResponseAuthenticate>('/authenticate', { code })

      setUser(res.data.data.user)

      const token = res.data.data.token

      setAuthToken(token)
      localStorage.setItem('@dowhile:token', token)
    }

    function getGithubCode (): void {
      const url = window.location.href

      const hasGithubCode = url.includes('?code=')

      if (hasGithubCode) {
        const [urlWithoutCode, githubCode] = url.split('?code=')

        singInWithGithub(githubCode)

        window.history.pushState({}, '', urlWithoutCode)
      }
    }

    loadUser()
    getGithubCode()
  }, [])

  function singOut (): void {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  return (
    <AuthContext.Provider value={{ signInUrl, user, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}
