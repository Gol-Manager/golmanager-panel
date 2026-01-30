import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFlagCheckered, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface CompeticionItem {
  id: string
  nombre: string
  imagen: string | null
}

const competiciones: CompeticionItem[] = [
  { id: '1', nombre: 'amistosos', imagen: null },
  { id: '2', nombre: 'copa', imagen: null },
  { id: '3', nombre: 'Liga', imagen: null },
]

function Competicion() {
  return (
    <section className="clientes-page ajustes-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faFlagCheckered} />
          </span>
          <h1>competición</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>competición</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>competición</h2>
          <button className="clientes-button" type="button">
            Crear competición
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
          <table className="clientes-table ajustes-table">
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Imagen</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {competiciones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={3}>Aún no hay competiciones cargadas.</td>
                </tr>
              ) : (
                competiciones.map((competicion) => (
                  <tr key={competicion.id}>
                    <td>{competicion.nombre}</td>
                    <td>
                      {competicion.imagen ? (
                        competicion.imagen
                      ) : (
                        <span className="cupones-pill">Vacio</span>
                      )}
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver competición ${competicion.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar competición ${competicion.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar competición ${competicion.nombre}`}
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
          <span>{competiciones.length} resultados</span>
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

export default Competicion
