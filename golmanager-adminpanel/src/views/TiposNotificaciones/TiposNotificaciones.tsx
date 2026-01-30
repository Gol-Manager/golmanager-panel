import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faEye,
  faFilter,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface TipoNotificacionItem {
  id: string
  singular: string
  imagen: string | null
}

const tipos: TipoNotificacionItem[] = [
  { id: '1', singular: 'Custom', imagen: null },
  { id: '2', singular: 'Entrenamiento', imagen: null },
  { id: '3', singular: 'Partido', imagen: null },
  { id: '4', singular: 'General', imagen: null },
]

function TiposNotificaciones() {
  return (
    <section className="clientes-page notificaciones-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <h1>Tipos de notificaciones</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Tipos de notificaciones</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Tipos de notificaciones</h2>
          <button className="clientes-button" type="button">
            Crear Tipos de notificaciones
          </button>
        </div>
        <div className="clientes-card-toolbar entrenamientos-toolbar">
          <div />
          <div className="entrenamientos-toolbar-actions">
            <label className="clientes-search">
              <span className="sr-only">Buscar</span>
              <input type="search" placeholder="Buscar" />
            </label>
            <button className="entrenamientos-filter" type="button">
              <FontAwesomeIcon icon={faFilter} />
              Filtros
            </button>
          </div>
        </div>
        <div className="clientes-table-wrapper">
          <table className="clientes-table tipos-notificaciones-table">
            <thead>
              <tr>
                <th>Singular</th>
                <th>Imagen</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tipos.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={3}>Aún no hay tipos cargados.</td>
                </tr>
              ) : (
                tipos.map((tipo) => (
                  <tr key={tipo.id}>
                    <td>{tipo.singular}</td>
                    <td>
                      {tipo.imagen ? (
                        <span>{tipo.imagen}</span>
                      ) : (
                        <span className="cupones-pill">Vacio</span>
                      )}
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver tipo ${tipo.singular}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar tipo ${tipo.singular}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar tipo ${tipo.singular}`}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="cupones-footer">
          <span>{tipos.length} resultados</span>
          <div className="cupones-pagination" role="navigation" aria-label="Paginación">
            <button type="button" disabled>
              ‹ Primera
            </button>
            <button type="button" disabled>
              ‹ Anterior
            </button>
            <button type="button" className="is-active" aria-current="page">
              1
            </button>
            <button type="button" disabled>
              Siguiente ›
            </button>
            <button type="button" disabled>
              Última ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TiposNotificaciones
