import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faUser } from '@fortawesome/free-solid-svg-icons'

interface TacticaItem {
  id: string
  nombre: string
  tipoFutbol: string
  teamsF7: number
  teamsF8: number
  teamsF11: number
}

const tacticas: TacticaItem[] = [
  { id: '1', nombre: '4-3-2-1', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 13 },
  { id: '2', nombre: '4-3-3', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 437 },
  { id: '3', nombre: '5-3-2', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 48 },
  { id: '4', nombre: '4-4-2', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 374 },
  { id: '5', nombre: '4-2-3-1', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 401 },
  { id: '6', nombre: '4-1-4-1', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 154 },
  { id: '7', nombre: '3-5-2', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 137 },
  { id: '8', nombre: '3-4-3', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 91 },
  { id: '9', nombre: '3-1-4-1-1', tipoFutbol: 'U11', teamsF7: 0, teamsF8: 0, teamsF11: 26 },
  { id: '10', nombre: '3-1-3', tipoFutbol: 'U8', teamsF7: 0, teamsF8: 30, teamsF11: 0 },
  { id: '11', nombre: '2-3-2', tipoFutbol: 'U8', teamsF7: 0, teamsF8: 56, teamsF11: 0 },
  { id: '12', nombre: '4-2-1', tipoFutbol: 'U8', teamsF7: 0, teamsF8: 37, teamsF11: 0 },
]

function Tacticas() {
  return (
    <section className="clientes-page juegos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h1>Tacticas</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Tacticas</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Tacticas</h2>
          <button className="clientes-button" type="button">
            Crear Tacticas
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
          <table className="clientes-table tacticas-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo de futbol</th>
                <th>teams.F7</th>
                <th>teams.F8</th>
                <th>teams.F11</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tacticas.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={6}>Aún no hay tácticas cargadas.</td>
                </tr>
              ) : (
                tacticas.map((tactica) => (
                  <tr key={tactica.id}>
                    <td>{tactica.nombre}</td>
                    <td>{tactica.tipoFutbol}</td>
                    <td>
                      <span className="juegos-pill">{tactica.teamsF7}</span>
                    </td>
                    <td>
                      <span className="juegos-pill">{tactica.teamsF8}</span>
                    </td>
                    <td>
                      <span className="juegos-pill">{tactica.teamsF11}</span>
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver táctica ${tactica.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar táctica ${tactica.nombre}`}
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
          <span>{tacticas.length} resultados</span>
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

export default Tacticas
