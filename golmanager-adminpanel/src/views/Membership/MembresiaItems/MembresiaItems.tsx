import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faIdCard, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface MembresiaItemRow {
  id: string
  titulo: string
  descripcion: string
  membresia: string
}

const membresiaItems: MembresiaItemRow[] = [
  {
    id: '1',
    titulo: 'Alineación y tácticas',
    descripcion: 'Haz tu once, coloca los datos de los jugadores. Revisa en estadí...',
    membresia: 'Membership #13',
  },
  {
    id: '2',
    titulo: 'Editor tareas',
    descripcion: '- Crea tus entrenamientos, edítalos, guárdalos y colócalos en el...',
    membresia: 'Membership #14',
  },
  {
    id: '3',
    titulo: 'SIN ANUNCIOS',
    descripcion: '¡Además eliminarás los anuncios de la app!',
    membresia: 'Membership #15',
  },
  {
    id: '4',
    titulo: '2º temporada',
    descripcion: '- Si eres usuario premium y entrenas a 2 equipos el mismo año, p...',
    membresia: 'Membership #16',
  },
  {
    id: '5',
    titulo: 'Multiusuario',
    descripcion: '- Inicia sesión ahora siendo premium en hasta 5 dispositivos, pa...',
    membresia: 'Membership #17',
  },
  {
    id: '6',
    titulo: 'PDF',
    descripcion: '- Descarga tus sesiones de entrenamiento en PDF - Partidos en P...',
    membresia: 'Membership #18',
  },
]

function MembresiaItems() {
  return (
    <section className="clientes-page membresia-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faIdCard} />
          </span>
          <h1>Membresia Items</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Membresia Items</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Membresia Items</h2>
          <button className="clientes-button" type="button">
            Crear Membresia Items
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
          <table className="clientes-table membresia-items-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Descripcion</th>
                <th>Membresia 01</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {membresiaItems.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay items cargados.</td>
                </tr>
              ) : (
                membresiaItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="membresia-thumb" aria-hidden="true" />
                    </td>
                    <td>{item.titulo}</td>
                    <td className="membresia-descripcion">{item.descripcion}</td>
                    <td>{item.membresia}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver item ${item.titulo}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar item ${item.titulo}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar item ${item.titulo}`}
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
          <span>{membresiaItems.length} resultados</span>
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

export default MembresiaItems
