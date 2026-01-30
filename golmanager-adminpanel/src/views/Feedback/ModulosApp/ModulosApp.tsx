import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface ModuloItem {
  id: string
  nombre: string
}

const modulos: ModuloItem[] = [
  { id: '1', nombre: 'Pizarra' },
  { id: '2', nombre: 'Convocatorias' },
  { id: '3', nombre: 'Editor de ejercicios' },
  { id: '4', nombre: 'Temporadas' },
  { id: '5', nombre: 'Home inicio' },
  { id: '6', nombre: 'Plantilla' },
  { id: '7', nombre: 'Ejercicios' },
]

function ModulosApp() {
  return (
    <section className="clientes-page modulos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faLayerGroup} />
          </span>
          <h1>Modulo de la app</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Modulo de la app</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Modulo de la app</h2>
          <button className="clientes-button" type="button">
            Crear Modulo de la app
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
          <table className="clientes-table modulos-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" aria-label="Seleccionar todos" />
                </th>
                <th>Nombre Modulo</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {modulos.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={3}>Aún no hay módulos cargados.</td>
                </tr>
              ) : (
                modulos.map((modulo) => (
                  <tr key={modulo.id}>
                    <td>
                      <input type="checkbox" aria-label={`Seleccionar ${modulo.nombre}`} />
                    </td>
                    <td>{modulo.nombre}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver módulo ${modulo.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar módulo ${modulo.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar módulo ${modulo.nombre}`}
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
          <span>{modulos.length} resultados</span>
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

export default ModulosApp
