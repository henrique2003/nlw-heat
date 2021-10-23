import React, { useEffect, useState } from 'react'

import { logo } from '../../assets'
import { Container, Logo, List } from './styles'
import Message from './Message'
import { api } from '../../services/api'
import { IMessage } from './Message/interfaces'
import { socket } from '../../services/socket'

const messagesQueue: IMessage[] = []

socket.on('new_message', (newMessage: IMessage) => {
  messagesQueue.push(newMessage)
})

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1]
        ].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    async function getMessages (): Promise<void> {
      try {
        const res = await api.get<{ data: IMessage[] }>('/last/messages')

        setMessages(res.data.data)
      } catch (error) {}
    }

    getMessages()
  }, [])

  return (
    <Container>
      <Logo src={logo} alt="DoWhile 2021" />
      <List>
        {messages.length > 0 && messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </List>
    </Container>
  )
}

export default MessageList
