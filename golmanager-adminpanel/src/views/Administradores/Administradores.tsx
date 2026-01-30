import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'

function Administradores() {
  return (
    <section className="clientes-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUserShield} />
          </span>
          <h1>Administradores</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Administradores</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Administradores</h2>
          <button className="clientes-button" type="button">
            Crear Administradores
          </button>
        </div>
        <div className="clientes-card-toolbar">
          <div />
          <label className="clientes-search">
            <span className="sr-only">Buscar</span>
            <input type="search" placeholder="Buscar" />
          </label>
        </div>
        <div className="clientes-table-wrapper">
          <table className="clientes-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Habilitado</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr className="clientes-empty">
                <td colSpan={5}>Aún no hay administradores cargados.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Administradores
