import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFutbol, faPen } from '@fortawesome/free-solid-svg-icons'

interface TipoFutbolItem {
  id: string
  nombre: string
  numberPlayers: number
  tactics: number
}

const tipos: TipoFutbolItem[] = [
  { id: '1', nombre: 'U11', numberPlayers: 11, tactics: 9 },
  { id: '2', nombre: 'U8', numberPlayers: 8, tactics: 5 },
  { id: '3', nombre: 'U7', numberPlayers: 7, tactics: 5 },
]

function TiposFutbol() {
  return (
    <section className="clientes-page juegos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faFutbol} />
          </span>
          <h1>Tipo de futbol</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Tipo de futbol</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Tipo de futbol</h2>
          <button className="clientes-button" type="button">
            Crear Tipo de futbol
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
          <table className="clientes-table juegos-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" aria-label="Seleccionar todos" />
                </th>
                <th>Nombre</th>
                <th>number_players</th>
                <th>tactics</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tipos.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay tipos cargados.</td>
                </tr>
              ) : (
                tipos.map((tipo) => (
                  <tr key={tipo.id}>
                    <td>
                      <input type="checkbox" aria-label={`Seleccionar ${tipo.nombre}`} />
                    </td>
                    <td>{tipo.nombre}</td>
                    <td>{tipo.numberPlayers}</td>
                    <td>
                      <span className="juegos-pill">{tipo.tactics}</span>
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver tipo ${tipo.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar tipo ${tipo.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
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

export default TiposFutbol
