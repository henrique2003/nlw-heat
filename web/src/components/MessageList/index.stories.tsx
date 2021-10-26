import MessageList from './index'

export default {
  component: MessageList,
  title: 'MessageList',
  excludeStories: /.*Data$/
}

export const Default: React.FC = () => <MessageList />
