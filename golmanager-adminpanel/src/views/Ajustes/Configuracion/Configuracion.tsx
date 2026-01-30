import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

function Configuracion() {
  return (
    <section className="clientes-page configuracion-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faCog} />
          </span>
          <h1>Configuración</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Configuración</span>
          <span>/</span>
          <span>Editar</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Cambiar Configuración</h2>
        </div>
        <div className="configuracion-card">
          <h3>PAGOS</h3>
          <label className="configuracion-field">
            <span>Tiempo de uso gratis (dias)</span>
            <input type="text" defaultValue="6" />
            <small>
              Tiempo en dias que tiene el usuario para usar la app de forma gratuita, luego de este tiempo se le pedira pagar.
            </small>
          </label>
          <label className="configuracion-field">
            <span>Version de la app *</span>
            <input type="text" defaultValue="3.5" />
            <small>
              Tiempo en dias que tiene el usuario para usar la app de forma gratuita, luego de este tiempo se le pedira pagar.
            </small>
          </label>
          <label className="configuracion-checkbox">
            <input type="checkbox" />
            <span>Disponible En Ios</span>
          </label>
          <label className="configuracion-checkbox">
            <input type="checkbox" />
            <span>Disponible En Android</span>
          </label>
        </div>
        <div className="configuracion-footer">
          <button className="configuracion-link" type="button">
            Volver al listado
          </button>
          <button className="configuracion-save" type="button">
            Guardar cambios
          </button>
        </div>
      </div>
    </section>
  )
}

export default Configuracion
