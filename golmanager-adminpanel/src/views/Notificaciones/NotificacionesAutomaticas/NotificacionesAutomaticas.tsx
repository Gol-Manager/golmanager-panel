import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faEye,
  faFilter,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface NotificacionAutomaticaItem {
  id: string
  titulo: string
  singular: string
  plural: string
  imagen: string | null
}

const notificaciones: NotificacionAutomaticaItem[] = [
  {
    id: '1',
    titulo: 'jugador con mas lesiones',
    singular: 'el jugador con mas lesiones fue :name_player con un total de :i...',
    plural: 'el jugador con mas lesiones fue :name_player con un total de :i...',
    imagen: 'image-1',
  },
  {
    id: '2',
    titulo: 'su ultimo resultado',
    singular: 'su ultimo resultado fue :goals - :goals_rival contra :name_rival',
    plural: 'su ultimo resultado fue :goals - :goals_rival contra :name_rival',
    imagen: 'image-2',
  },
  {
    id: '3',
    titulo: 'ultimo entrenamiento',
    singular: 'su ultimo entrenamiento fue el dia :date_last_training',
    plural: 'su ultimo entrenamiento fue el dia :date_last_training',
    imagen: null,
  },
  {
    id: '4',
    titulo: 'su proximo partido',
    singular: 'su proximo partido es el dia :date_next_match a las :time_next_m...',
    plural: 'su proximo partido es el dia :date_next_match a las :time_next_m...',
    imagen: null,
  },
  {
    id: '5',
    titulo: 'jugadores lesionados',
    singular: 'usted tiene :num jugador lesionado',
    plural: 'usted tiene :num jugadores lesionados',
    imagen: null,
  },
]

function NotificacionesAutomaticas() {
  return (
    <section className="clientes-page notificaciones-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <h1>Notificación mensajes automaticos</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Notificación mensajes automaticos</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Notificación mensajes automaticos</h2>
          <button className="clientes-button" type="button">
            Crear Notificación mensajes automaticos
          </button>
        </div>
        <div className="clientes-card-toolbar entrenamientos-toolbar">
          <div />
          <div className="entrenamientos-toolbar-actions">
            <label className="clientes-search">
              <span className="sr-only">Buscar</span>
              <input type="search" placeholder="Buscar" />
            </label>
            <button className="entrenamientos-filter" type="button">
              <FontAwesomeIcon icon={faFilter} />
              Filtros
            </button>
          </div>
        </div>
        <div className="clientes-table-wrapper">
          <table className="clientes-table notificaciones-automaticas-table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Singular</th>
                <th>Plural</th>
                <th>Imagen</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {notificaciones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay notificaciones cargadas.</td>
                </tr>
              ) : (
                notificaciones.map((notificacion) => (
                  <tr key={notificacion.id}>
                    <td>{notificacion.titulo}</td>
                    <td className="notificaciones-cuerpo">{notificacion.singular}</td>
                    <td className="notificaciones-cuerpo">{notificacion.plural}</td>
                    <td>
                      {notificacion.imagen ? (
                        <span className="notificaciones-image">{notificacion.imagen}</span>
                      ) : (
                        <span className="cupones-pill">Nulo</span>
                      )}
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver notificación ${notificacion.titulo}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar notificación ${notificacion.titulo}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar notificación ${notificacion.titulo}`}
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
          <span>{notificaciones.length} resultados</span>
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

export default NotificacionesAutomaticas
