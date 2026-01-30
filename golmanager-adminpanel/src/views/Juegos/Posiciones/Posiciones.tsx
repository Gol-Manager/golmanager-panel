import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash, faFutbol } from '@fortawesome/free-solid-svg-icons'

interface PosicionItem {
  id: string
  nombre: string
  prefijo: string
  numero: number
}

const posiciones: PosicionItem[] = [
  { id: '1', nombre: 'Media Punta', prefijo: 'MP', numero: 10 },
  { id: '2', nombre: 'Extremo', prefijo: 'EXT', numero: 7 },
  { id: '3', nombre: 'Lateral', prefijo: 'LAT', numero: 2 },
  { id: '4', nombre: 'Delantero', prefijo: 'DEL', numero: 9 },
  { id: '5', nombre: 'Mediocentro', prefijo: 'MED', numero: 6 },
  { id: '6', nombre: 'Defensa Central', prefijo: 'DEF', numero: 5 },
  { id: '7', nombre: 'Portero', prefijo: 'POR', numero: 1 },
]

function Posiciones() {
  return (
    <section className="clientes-page juegos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faFutbol} />
          </span>
          <h1>Posición</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Posición</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Posición</h2>
          <button className="clientes-button" type="button">
            Crear Posición
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
          <table className="clientes-table posiciones-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Nombre</th>
                <th>Prefijo</th>
                <th>Posición Num</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {posiciones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay posiciones cargadas.</td>
                </tr>
              ) : (
                posiciones.map((posicion) => (
                  <tr key={posicion.id}>
                    <td>
                      <span className="posiciones-thumb" aria-hidden="true" />
                    </td>
                    <td>{posicion.nombre}</td>
                    <td>{posicion.prefijo}</td>
                    <td>{posicion.numero}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver posición ${posicion.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar posición ${posicion.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar posición ${posicion.nombre}`}
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
          <span>{posiciones.length} resultados</span>
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

export default Posiciones
