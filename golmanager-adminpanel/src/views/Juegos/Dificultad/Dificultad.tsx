import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'

interface DificultadItem {
  id: string
  nombre: string
}

const dificultades: DificultadItem[] = [
  { id: '1', nombre: 'BAJA' },
  { id: '2', nombre: 'MEDIA' },
  { id: '3', nombre: 'ALTA' },
]

function Dificultad() {
  return (
    <section className="clientes-page juegos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h1>Dificultad</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Dificultad</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Dificultad</h2>
          <button className="clientes-button" type="button">
            Crear Dificultad
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
          <table className="clientes-table dificultad-table">
            <thead>
              <tr>
                <th>Nombres</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {dificultades.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={2}>Aún no hay dificultades cargadas.</td>
                </tr>
              ) : (
                dificultades.map((dificultad) => (
                  <tr key={dificultad.id}>
                    <td>{dificultad.nombre}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver dificultad ${dificultad.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar dificultad ${dificultad.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar dificultad ${dificultad.nombre}`}
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
          <span>{dificultades.length} resultados</span>
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

export default Dificultad
