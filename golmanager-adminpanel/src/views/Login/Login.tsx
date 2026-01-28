import { useState } from 'react'
import { Alert } from '../../components'

interface LoginProps {
  onSuccess: () => void
}

function Login({ onSuccess }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedEmail = email.trim().toLowerCase()

    if (trimmedEmail === 'saviolabernal7@gmail.com' && password === 'machinazo') {
      setError('')
      setShowSuccess(true)
      return
    }

    setError('Credenciales incorrectas.')
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false)
    onSuccess()
  }
  return (
    <div className="login-page">
      <div className="login-card">
        <img className="login-logo" src="/logo.png" alt="Gol Manager" />
        <h2 className="text-4xl font-bold">
          Gol Manager
          <br />
          Admin Panel
        </h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="login-input"
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label className="login-label" htmlFor="password">
            Contraseña
          </label>
          <div className="password-field">
            <input
              className="login-input"
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="password-toggle" type="button" aria-label="Mostrar contraseña">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 5C6.5 5 2.2 9 1 12c1.2 3 5.5 7 11 7s9.8-4 11-7c-1.2-3-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <button className="login-submit" type="submit">
            Entrar
          </button>

          {error ? <p className="login-error">{error}</p> : null}
        </form>
      </div>

      <Alert
        isOpen={showSuccess}
        title="Ingreso correcto"
        message="Bienvenido al panel de administración."
        onClose={handleCloseSuccess}
        icon={<span aria-hidden="true">✓</span>}
      />
    </div>
  )
}

export default Login
