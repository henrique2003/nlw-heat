import SendMessageForm from './index'

export default {
  component: SendMessageForm,
  title: 'SendMessageForm',
  excludeStories: /.*Data$/
}

export const Default: React.FC = () => <SendMessageForm />
