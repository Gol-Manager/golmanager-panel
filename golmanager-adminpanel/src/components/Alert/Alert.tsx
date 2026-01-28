import type { ReactNode } from 'react'

interface AlertProps {
  title: string
  message?: string
  isOpen: boolean
  onClose: () => void
  actionLabel?: string
  icon?: ReactNode
}

function Alert({
  title,
  message,
  isOpen,
  onClose,
  actionLabel = 'Continuar',
  icon,
}: AlertProps) {
  if (!isOpen) return null

  return (
    <div className="app-alert" role="dialog" aria-modal="true">
      <div className="app-alert-card">
        {icon ? <div className="app-alert-icon">{icon}</div> : null}
        <h3 className="app-alert-title">{title}</h3>
        {message ? <p className="app-alert-text">{message}</p> : null}
        <button className="login-submit" type="button" onClick={onClose}>
          {actionLabel}
        </button>
      </div>
    </div>
  )
}

export default Alert
