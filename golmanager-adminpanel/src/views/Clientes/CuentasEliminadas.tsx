import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function CuentasEliminadas() {
  return (
    <section className="clientes-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h1>Cuentas eliminadas</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Cuentas eliminadas</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Cuentas eliminadas</h2>
          <button className="clientes-button" type="button">
            Crear Cuentas eliminadas
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
                <th>
                  <input type="checkbox" aria-label="Seleccionar todos" disabled />
                </th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Habilitado</th>
                <th>Temp.</th>
                <th>Equipo</th>
                <th>Tipo Cuenta</th>
                <th>User Pro</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr className="clientes-empty">
                <td colSpan={10}>Aún no hay cuentas eliminadas.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default CuentasEliminadas
