import 'dotenv/config'
import axios from 'axios'

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRETS } = process.env

interface IGithubUserResponse {
  id: number
  name: string
  avatar_url: string
  login: string
}

class AuthUserService {
  public async execute (code: string): Promise<IGithubUserResponse> {
    const url = 'https://github.com/login/oauth/access_token'

    const resAccessToken = await axios.post<string>(url, null, {
      params: {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRETS,
        code
      },
      headers: {
        Accpet: 'application/json'
      }
    })

    const resultArray = resAccessToken.data.split('&')
    const accessToken = resultArray[0].replace('access_token=', '')

    const resGithubUser = await axios.get<IGithubUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })

    return resGithubUser.data
  }
}

export default AuthUserService
