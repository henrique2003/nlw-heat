import { GlobalStyle } from './styles/global'
import { Main } from './pages'
import { AuthProvider } from './contexts/auth'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Main />
    </AuthProvider>
  )
}

export default App
