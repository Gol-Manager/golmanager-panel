import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faFilter,
  faLifeRing,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface SoporteItem {
  id: string
  modulo: string
  descripcion: string
  cliente: string
  version: string
  device: string
  solucionado: boolean
}

const soportes: SoporteItem[] = [
  {
    id: '1',
    modulo: 'Convocatorias',
    descripcion: 'no me deja entrar en partidos',
    cliente: 'helio_92@hotmail.com',
    version: '3.2.3',
    device: '23127PN0CG, Android',
    solucionado: false,
  },
  {
    id: '2',
    modulo: 'Plantilla',
    descripcion: 'Cuando saco los PDF de las estadísticas, me salen jugadores los...',
    cliente: 'santisanzgomez69@gmail.com',
    version: '3.2.3',
    device: 'iPhone 15, iOS',
    solucionado: false,
  },
  {
    id: '3',
    modulo: 'Home inicio',
    descripcion: 'Se colapsa todo el rato al meter los partidos, no se puede hacer...',
    cliente: 'albertoblanco56@gmail.com',
    version: '3.2.3',
    device: 'iPhone 15 Pro, iOS',
    solucionado: false,
  },
  {
    id: '4',
    modulo: 'Convocatorias',
    descripcion: 'Cuando me voy al apartado de partidos de liga para añadir uno nu...',
    cliente: 'ctecnicocerro@gmail.com',
    version: '3.2.3',
    device: 'iPhone, iOS',
    solucionado: false,
  },
  {
    id: '5',
    modulo: 'Plantilla',
    descripcion: 'Marco como que un jugador a marcado gol o le han sacado amarilla...',
    cliente: 'capitanyeray@gmail.com',
    version: '3.2.3',
    device: 'iPhone 12 Pro Max, iOS',
    solucionado: false,
  },
  {
    id: '6',
    modulo: 'Convocatorias',
    descripcion: 'no puedo hacer convocatoria ya que la aplicación no las guarda...',
    cliente: 'deliojg@hotmail.com',
    version: '3.2.3',
    device: 'SM-S921B, Android',
    solucionado: false,
  },
  {
    id: '7',
    modulo: 'Convocatorias',
    descripcion: 'No puedo hacer alineación, no se guarda la convocatoria',
    cliente: 'deliojg@hotmail.com',
    version: '3.2.3',
    device: 'SM-S921B, Android',
    solucionado: false,
  },
  {
    id: '8',
    modulo: 'Home inicio',
    descripcion: 'Que tal, no se puede realizar la verificación en 2 pasos al mo...',
    cliente: 'safado1364@teralc.com',
    version: '3.2.3',
    device: 'SM-S928B, Android',
    solucionado: false,
  },
  {
    id: '9',
    modulo: 'Home inicio',
    descripcion: 'no puedo actualizar pago no me deja',
    cliente: 'saheaa@hotmail.com',
    version: '3.2.3',
    device: 'SM-A137F, Android',
    solucionado: false,
  },
  {
    id: '10',
    modulo: 'Home inicio',
    descripcion: 'actualize lo borré lo instalé y sigue el mismo problema tengo un...',
    cliente: 'alvarogamer2005@gmail.com',
    version: '3.2.3',
    device: '23043RP34G, Android',
    solucionado: false,
  },
]

function Soporte() {
  return (
    <section className="clientes-page soporte-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faLifeRing} />
          </span>
          <h1>menu.supports</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>menu.supports</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>menu.supports</h2>
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
          <table className="clientes-table soporte-table">
            <thead>
              <tr>
                <th>Modulo</th>
                <th>Descripción</th>
                <th>Cliente</th>
                <th>Version</th>
                <th>Device</th>
                <th>Solucionado</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {soportes.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={8}>Aún no hay tickets de soporte cargados.</td>
                </tr>
              ) : (
                soportes.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.modulo}</td>
                    <td className="soporte-descripcion">{ticket.descripcion}</td>
                    <td>{ticket.cliente}</td>
                    <td>{ticket.version}</td>
                    <td>{ticket.device}</td>
                    <td>
                      <span className={`soporte-status${ticket.solucionado ? ' is-ok' : ''}`}>
                        {ticket.solucionado ? 'Sí' : 'No'}
                      </span>
                    </td>
                    <td>
                      <input type="checkbox" aria-label={`Seleccionar ticket ${ticket.id}`} />
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar ticket ${ticket.id}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar ticket ${ticket.id}`}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver ticket ${ticket.id}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
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
          <span>{soportes.length} resultados</span>
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

export default Soporte
