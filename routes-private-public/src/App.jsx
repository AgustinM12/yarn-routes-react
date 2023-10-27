import { AuthUser } from './context/authContext'
import { AppRouter } from './routers/AppRouter'

function App() {

  return (

    <AuthUser>

      <AppRouter />

    </AuthUser>

  )
}

export default App
