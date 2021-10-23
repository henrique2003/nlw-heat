import React, { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'

import { Container, FormLabel, FormMessage, FormSubmitButton, FormTextArea, GithubUser, Header, SingOutButton, UserImage, UserName } from './styles'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'

const SendMessageForm: React.FC = () => {
  const { user, singOut } = useContext(AuthContext)

  const [message, setMessage] = useState<string>('')

  async function onSubmit (e: FormEvent): Promise<void | boolean> {
    e.preventDefault()

    if (!message.trim()) {
      return false
    }

    await api.post('/message', { text: message })

    setMessage('')
  }

  return (
    <Container>
      <SingOutButton onClick={() => singOut()}>
        <VscSignOut size={32} />
      </SingOutButton>
      <Header>
        <UserImage>
          <img src={user?.avatar_url} alt={user?.name} />
        </UserImage>
      </Header>
      <UserName>{user?.name}</UserName>
      <GithubUser>
        <VscGithubInverted size="16" />
        {user?.login}
      </GithubUser>
      <FormMessage onSubmit={onSubmit}>
        <FormLabel htmlFor="message">Mensagem</FormLabel>
        <FormTextArea
          name="message"
          id="message"
          placeholder="Qual sua expectatica para o evento?"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />

        <FormSubmitButton type="submit">Enviar mensagem</FormSubmitButton>
      </FormMessage>
    </Container>
  )
}

export default SendMessageForm
