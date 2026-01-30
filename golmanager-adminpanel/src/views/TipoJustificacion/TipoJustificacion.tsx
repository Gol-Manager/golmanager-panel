import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'

interface JustificacionItem {
  id: string
  nombre: string
  descripcion: string
  orden: number
  verEntrenamiento: boolean
  verConvocatoria: boolean
}

const justificaciones: JustificacionItem[] = [
  {
    id: '1',
    nombre: 'Otros',
    descripcion: 'Otras razones',
    orden: 9,
    verEntrenamiento: true,
    verConvocatoria: true,
  },
  {
    id: '2',
    nombre: 'Decisión técnica',
    descripcion: 'Decision del entrenador.',
    orden: 8,
    verEntrenamiento: false,
    verConvocatoria: true,
  },
  {
    id: '3',
    nombre: 'Dar de baja por lesión',
    descripcion: 'Jugador no puede participar por lesión',
    orden: 7,
    verEntrenamiento: true,
    verConvocatoria: false,
  },
  {
    id: '4',
    nombre: 'Sanción',
    descripcion: 'Jugador sancionado no puede jugar',
    orden: 6,
    verEntrenamiento: false,
    verConvocatoria: true,
  },
  {
    id: '5',
    nombre: 'Estudios',
    descripcion: 'descripcion estudios',
    orden: 5,
    verEntrenamiento: true,
    verConvocatoria: false,
  },
  {
    id: '6',
    nombre: 'Viaje',
    descripcion: 'descripcion viaje',
    orden: 4,
    verEntrenamiento: true,
    verConvocatoria: true,
  },
  {
    id: '7',
    nombre: 'Sin justificación',
    descripcion: 'descripcion sin justificacion',
    orden: 3,
    verEntrenamiento: true,
    verConvocatoria: false,
  },
  {
    id: '8',
    nombre: 'Lesión',
    descripcion: 'descripcion lesión',
    orden: 2,
    verEntrenamiento: true,
    verConvocatoria: true,
  },
  {
    id: '9',
    nombre: 'Enfermedad',
    descripcion: 'descripcion enfermedad',
    orden: 1,
    verEntrenamiento: true,
    verConvocatoria: true,
  },
]

function TipoJustificacion() {
  return (
    <section className="clientes-page justificacion-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h1>Tipo de Justificación</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Tipo de Justificación</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Tipo de Justificación</h2>
          <button className="clientes-button" type="button">
            Crear Tipo de Justificación
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
          <table className="clientes-table justificacion-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombres</th>
                <th>Descripcion</th>
                <th>Orden en vista</th>
                <th>ver en entrenamiento</th>
                <th>ver en convocatoria</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {justificaciones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={7}>Aún no hay tipos de justificación cargados.</td>
                </tr>
              ) : (
                justificaciones.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="justificacion-thumb" aria-hidden="true" />
                    </td>
                    <td>{item.nombre}</td>
                    <td className="justificacion-descripcion">{item.descripcion}</td>
                    <td>{item.orden}</td>
                    <td>
                      <span
                        className={`justificacion-pill${item.verEntrenamiento ? ' is-yes' : ' is-no'}`}
                      >
                        {item.verEntrenamiento ? 'Si' : 'No'}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`justificacion-pill${item.verConvocatoria ? ' is-yes' : ' is-no'}`}
                      >
                        {item.verConvocatoria ? 'Si' : 'No'}
                      </span>
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver tipo ${item.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar tipo ${item.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar tipo ${item.nombre}`}
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
          <span>{justificaciones.length} resultados</span>
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

export default TipoJustificacion
