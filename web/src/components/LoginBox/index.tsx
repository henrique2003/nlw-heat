import React, { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import { bannerGirl } from '../../assets'
import { Container, Strong, Link } from './styles'
import { AuthContext } from '../../contexts/auth'

const LoginBox: React.FC = () => {
  const { signInUrl } = useContext(AuthContext)

  return (
    <Container background={bannerGirl}>
      <Strong>Entre e compartilhe sua mensagem</Strong>
      <Link href={signInUrl}><VscGithubInverted size={24} />Entrar com github</Link>
    </Container>
  )
}

export default LoginBox
