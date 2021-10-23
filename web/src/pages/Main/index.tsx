import React, { useContext } from 'react'

import { Container } from './styles'
import { MessageList, LoginBox, SendMessageForm } from '../../components'
import { AuthContext } from '../../contexts/auth'
import { background } from '../../assets'

const Main: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <Container logged={!!user} src={background}>
      <MessageList />
      {(user != null) ? <SendMessageForm /> : <LoginBox />}
    </Container>
  )
}

export default Main
