import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

interface MembresiaItem {
  id: string
  titulo: string
  descripcion: string
}

const membresias: MembresiaItem[] = [
  {
    id: '1',
    titulo: 'PDF para todo',
    descripcion: '- Descarga tus sesiones de entrenamiento en PDF - Partidos en P...',
  },
  {
    id: '2',
    titulo: 'Plantilla ilimitada',
    descripcion: '- Plantilla ilimitada: Crea todos los jugadores que necesites pa...',
  },
  {
    id: '3',
    titulo: 'Crea una segunda temporada',
    descripcion: '- Si eres usuario premium y entrenas a 2 equipos el mismo año, p...',
  },
  {
    id: '4',
    titulo: 'Comparador de estadísticas',
    descripcion: '- Siendo premium además podrás usar un comparador de jugadores c...',
  },
  {
    id: '5',
    titulo: 'Editor de ejercicios',
    descripcion: '- Crea tus entrenamientos, edítalos, guárdalos y colócalos en el...',
  },
  {
    id: '6',
    titulo: 'Alineaciones y Tácticas',
    descripcion: '- Registra los datos de tus jugadores de cada partido, formación...',
  },
]

function MembresiaTextoImagen() {
  return (
    <section className="clientes-page membresia-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faIdCard} />
          </span>
          <h1>Membresia Texto e Imagen</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Membresia Texto e Imagen</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Membresia Texto e Imagen</h2>
          <button className="clientes-button" type="button">
            Crear Membresia Texto e Imagen
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
          <table className="clientes-table membresia-table">
            <thead>
              <tr>
                <th>Icono</th>
                <th>Título</th>
                <th>Descripcion</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {membresias.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={4}>Aún no hay membresías cargadas.</td>
                </tr>
              ) : (
                membresias.map((membresia) => (
                  <tr key={membresia.id}>
                    <td>
                      <span className="membresia-thumb" aria-hidden="true" />
                    </td>
                    <td>{membresia.titulo}</td>
                    <td className="membresia-descripcion">{membresia.descripcion}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver membresía ${membresia.titulo}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar membresía ${membresia.titulo}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar membresía ${membresia.titulo}`}
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
          <span>{membresias.length} resultados</span>
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

export default MembresiaTextoImagen
