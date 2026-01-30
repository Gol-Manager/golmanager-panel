import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFlag, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface PaisItem {
  id: string
  nombre: string
  codigo: string
}

const paises: PaisItem[] = [
  { id: '1', nombre: 'Albania', codigo: 'AL' },
  { id: '2', nombre: 'Andorra', codigo: 'AD' },
  { id: '3', nombre: 'Angola', codigo: 'AO' },
  { id: '4', nombre: 'Argentina', codigo: 'AR' },
  { id: '5', nombre: 'Argentina', codigo: 'AR' },
  { id: '6', nombre: 'Armenia', codigo: 'AM' },
  { id: '7', nombre: 'Australia', codigo: 'AU' },
  { id: '8', nombre: 'Austria', codigo: 'AT' },
]

function Pais() {
  return (
    <section className="clientes-page ajustes-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faFlag} />
          </span>
          <h1>País</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>País</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>País</h2>
          <button className="clientes-button" type="button">
            Crear País
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
          <table className="clientes-table pais-table">
            <thead>
              <tr>
                <th>Bandera</th>
                <th>Nombre</th>
                <th>Codigo</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {paises.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={4}>Aún no hay países cargados.</td>
                </tr>
              ) : (
                paises.map((pais) => (
                  <tr key={pais.id}>
                    <td>
                      <span className="pais-flag" aria-hidden="true" />
                    </td>
                    <td>{pais.nombre}</td>
                    <td>{pais.codigo}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver país ${pais.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar país ${pais.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar país ${pais.nombre}`}
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
          <span>{paises.length} resultados</span>
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

export default Pais
