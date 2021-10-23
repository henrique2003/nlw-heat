import React from 'react'
import { IMessage } from './interfaces'

import { Container, MessageContent, MessageUser, MessageUserImage } from './styles'

interface IMessageProps {
  message: IMessage
}

const Message: React.FC<IMessageProps> = ({ message }) => {
  return (
    <Container>
      <MessageContent>{message.text}</MessageContent>
      <MessageUser>
        <MessageUserImage>
          <img src={message.user.avatar_url} alt={message.user.name} />
        </MessageUserImage>
        <span>{message.user.name}</span>
      </MessageUser>
    </Container>
  )
}

export default Message
