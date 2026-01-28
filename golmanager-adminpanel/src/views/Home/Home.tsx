import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUsers } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <section className="home">
      <div className="home-card">
        <div className="home-card-media">
          <div className="home-card-icon home-card-icon--gear" aria-hidden="true">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
        <div className="home-card-content">
          <h2>Bienvenido al Sistema de Gestión</h2>
          <p>
            Desde el sistema de gestión GolManager, puede administrar sus clientes, administradores,
            ejercicios y la administración general de la app GolManager.
          </p>
        </div>
      </div>

      <div className="home-metric">
        <div className="home-metric-illustration" aria-hidden="true">
          <div className="metric-icon metric-icon-primary metric-icon-large">
            <FontAwesomeIcon icon={faUsers} />
          </div>
        </div>
        <div className="home-metric-content">
          <span className="home-metric-label">Posee hasta el momento</span>
          <span className="home-metric-value">28329</span>
          <span className="home-metric-sub">Usuarios usando la app</span>
        </div>
      </div>
    </section>
  )
}

export default Home
