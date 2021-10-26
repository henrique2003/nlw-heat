import LoginBox from './index'

export default {
  component: LoginBox,
  title: 'LoginBox',
  excludeStories: /.*Data$/
}

export const Default: React.FC = () => <LoginBox />
