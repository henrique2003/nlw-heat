import Message from './index'

export default {
  component: Message,
  title: 'Message',
  excludeStories: /.*Data$/
}

export const taskData = {
  id: '1',
  text: 'title task',
  created_at: 'date task',
  user_id: '2',
  user: {
    id: '2',
    name: 'henrique',
    github_id: 123213123,
    avatar_url: 'https://github.com/henrique2003.png',
    login: 'login task'
  }
}

export const Deafult: React.FC = () => <Message message={{ ...taskData }} />
