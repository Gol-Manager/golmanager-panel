import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFlag, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface LocalidadItem {
  id: string
  nombre: string
  imagen: string | null
}

const localidades: LocalidadItem[] = [
  { id: '1', nombre: 'visitante', imagen: null },
  { id: '2', nombre: 'local', imagen: null },
]

function Localidad() {
  return (
    <section className="clientes-page ajustes-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faFlag} />
          </span>
          <h1>Localidad</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Localidad</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Localidad</h2>
          <button className="clientes-button" type="button">
            Crear Localidad
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
              {localidades.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={3}>Aún no hay localidades cargadas.</td>
                </tr>
              ) : (
                localidades.map((localidad) => (
                  <tr key={localidad.id}>
                    <td>{localidad.nombre}</td>
                    <td>
                      {localidad.imagen ? (
                        localidad.imagen
                      ) : (
                        <span className="cupones-pill">Nulo</span>
                      )}
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver localidad ${localidad.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar localidad ${localidad.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar localidad ${localidad.nombre}`}
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
          <span>{localidades.length} resultados</span>
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

export default Localidad
