import 'dotenv/config'
import { sign } from 'jsonwebtoken'

const generateToken = (id: string): string => {
  const token = sign({ id }, process.env.JWT_SECRET_ID, { expiresIn: '1d' })

  return token
}

export default generateToken
