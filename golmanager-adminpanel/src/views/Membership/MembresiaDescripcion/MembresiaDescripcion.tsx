import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faIdCard, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface MembresiaDescripcionItem {
  id: string
  titulo: string
  descripcion: string
}

const membresiasDescripcion: MembresiaDescripcionItem[] = [
  {
    id: '1',
    titulo: 'Gol Manager Premium',
    descripcion: 'Hazte miembro premium y disfruta de todas las ventajas, además n...',
  },
]

function MembresiaDescripcion() {
  return (
    <section className="clientes-page membresia-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faIdCard} />
          </span>
          <h1>Membresia Description</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Membresia Description</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Membresia Description</h2>
          <button className="clientes-button" type="button">
            Crear Membresia Description
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
          <table className="clientes-table membresia-desc-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Descripcion</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {membresiasDescripcion.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={4}>Aún no hay descripciones cargadas.</td>
                </tr>
              ) : (
                membresiasDescripcion.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="membresia-thumb" aria-hidden="true" />
                    </td>
                    <td>{item.titulo}</td>
                    <td className="membresia-descripcion">{item.descripcion}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver membresía ${item.titulo}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar membresía ${item.titulo}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar membresía ${item.titulo}`}
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
          <span>{membresiasDescripcion.length} resultados</span>
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

export default MembresiaDescripcion
