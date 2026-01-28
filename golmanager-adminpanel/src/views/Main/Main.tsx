import { useState } from 'react'
import { Header, Sidebar } from '../../components'
import { Home } from '../../views'

interface MainProps {
  userEmail: string
  onLogout: () => void
}

function Main({ userEmail, onLogout }: MainProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="main-page">
      <Header
        userEmail={userEmail}
        onLogout={onLogout}
        onMenuToggle={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <div className="main-layout">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
  )
}

export default Main
