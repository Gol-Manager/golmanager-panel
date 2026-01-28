import { useEffect, useRef, useState } from 'react'

interface HeaderProps {
  userEmail: string
  onLogout: () => void
  onMenuToggle: () => void
}

function Header({ userEmail, onLogout, onMenuToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className="main-header">
      <div className="main-header-left">
        <img className="brand-logo" src="/logo.png" alt="Gol Manager" />
        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menú"
          onClick={onMenuToggle}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className="main-header-right" ref={menuRef}>
        <button
          className="user-menu-button"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-haspopup="menu"
          aria-expanded={isMenuOpen}
        >
          <span className="user-email">{userEmail}</span>
          <div className="user-avatar" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>

        {isMenuOpen ? (
          <div className="user-menu" role="menu">
            <button className="user-menu-item" type="button" role="menuitem" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Header
