import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faEye,
  faFilter,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface NotificacionGeneralItem {
  id: string
  titulo: string
  cuerpo: string
}

const notificaciones: NotificacionGeneralItem[] = [
  {
    id: '1',
    titulo: '¡Actualización disponible!',
    cuerpo: 'Hemos publicado una nueva actualización de Gol Manager en Androi...',
  },
  {
    id: '2',
    titulo: 'Actualización política y condiciones',
    cuerpo: 'Hemos actualizado nuestra Política de Privacidad y Condiciones d...',
  },
  {
    id: '3',
    titulo: 'Web renovada',
    cuerpo: 'https://web.golmanager.app/ Sigue utilizando Gol Manager en l...',
  },
]

function NotificacionesGenerales() {
  return (
    <section className="clientes-page notificaciones-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <h1>Notificaciones generales</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Notificaciones generales</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Notificaciones generales</h2>
          <button className="clientes-button" type="button">
            Crear Notificaciones generales
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
          <table className="clientes-table notificaciones-generales-table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Cuerpo</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {notificaciones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={3}>Aún no hay notificaciones cargadas.</td>
                </tr>
              ) : (
                notificaciones.map((notificacion) => (
                  <tr key={notificacion.id}>
                    <td>{notificacion.titulo}</td>
                    <td className="notificaciones-cuerpo">{notificacion.cuerpo}</td>
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

export default NotificacionesGenerales
