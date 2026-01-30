import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faEye,
  faFilter,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface NotificacionTraduccionItem {
  id: string
  titulo: string
  singular: string
  plural: string
  language: string
}

const traducciones: NotificacionTraduccionItem[] = [
  {
    id: '1',
    titulo: 'jogador com mais lesões',
    singular: 'o jogador com mais lesões foi :name_player com um total de :inju...',
    plural: 'o jogador com mais lesões foi :name_player com um total de :inju...',
    language: 'pt',
  },
  {
    id: '2',
    titulo: 'joueur avec le plus de blessures',
    singular: 'le joueur avec le plus de blessures était :name_player avec un t...',
    plural: 'le joueur avec le plus de blessures était :name_player avec un t...',
    language: 'fr',
  },
  {
    id: '3',
    titulo: 'giocatore con il maggior numero di infortuni',
    singular: 'il giocatore con il maggior numero di infortuni è stato :name_pl...',
    plural: 'il giocatore con il maggior numero di infortuni è stato :name_pl...',
    language: 'it',
  },
  {
    id: '4',
    titulo: 'Spieler mit den meisten Verletzungen',
    singular: 'Der Spieler mit den meisten Verletzungen war :name_player mit in...',
    plural: 'Der Spieler mit den meisten Verletzungen war :name_player mit in...',
    language: 'de',
  },
  {
    id: '5',
    titulo: 'jugador con mas lesiones',
    singular: 'el jugador con mas lesiones fue :name_player con un total de :i...',
    plural: 'el jugador con mas lesiones fue :name_player con un total de :i...',
    language: 'es',
  },
  {
    id: '6',
    titulo: 'player with the most injuries',
    singular: 'the player with the most injuries was :name_player with a total...',
    plural: 'the player with the most injuries was :name_player with a total...',
    language: 'en',
  },
]

function NotificacionesTraducciones() {
  return (
    <section className="clientes-page notificaciones-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <h1>Traducciones de notificaciones automaticas</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Traducciones de notificaciones automaticas</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Traducciones de notificaciones automaticas</h2>
          <button className="clientes-button" type="button">
            Crear Traducciones de notificaciones automaticas
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
          <table className="clientes-table notificaciones-traducciones-table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Singular</th>
                <th>Plural</th>
                <th>Language</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {traducciones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay traducciones cargadas.</td>
                </tr>
              ) : (
                traducciones.map((item) => (
                  <tr key={item.id}>
                    <td>{item.titulo}</td>
                    <td className="notificaciones-cuerpo">{item.singular}</td>
                    <td className="notificaciones-cuerpo">{item.plural}</td>
                    <td>{item.language}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver traducción ${item.titulo}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar traducción ${item.titulo}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar traducción ${item.titulo}`}
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
          <span>{traducciones.length} resultados</span>
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

export default NotificacionesTraducciones
