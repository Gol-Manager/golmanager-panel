import { useState } from 'react'
import { Login, Main } from './views'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <Login onSuccess={() => setIsAuthenticated(true)} />
  }

  return (
    <Main userEmail="saviolabernal7@gmail.com" onLogout={() => setIsAuthenticated(false)} />
  )
}

export default App
