import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'

interface SugerenciaItem {
  id: string
  fecha: string
  usuario: string
  sugerencia: string
}

const sugerencias: SugerenciaItem[] = [
  {
    id: '1',
    fecha: '20/01/2026 03:59:16',
    usuario: 'joseluis26_26@hotmail.com',
    sugerencia: 'en la versión móvil está la estadística de media de minutos jugados...',
  },
  {
    id: '2',
    fecha: '13/01/2026 13:00:54',
    usuario: 'loloawp2@gmail.com',
    sugerencia: 'Hola buenas!! Las convocatorias no deja guardarlas de ninguna manera...',
  },
  {
    id: '3',
    fecha: '10/01/2026 09:10:24',
    usuario: 'horacioramseyer0@gmail.com',
    sugerencia: 'No puedo pagar porq no me dice el valor de los impuestos',
  },
  {
    id: '4',
    fecha: '26/12/2025 13:15:01',
    usuario: 'victordj25_@hotmail.com',
    sugerencia: 'Cómo hacerse premium',
  },
  {
    id: '5',
    fecha: '03/12/2025 02:41:53',
    usuario: 'capitanyeray@gmail.com',
    sugerencia: 'Cuando marco si un jugador a tenido amarilla en el partido o a m...',
  },
  {
    id: '6',
    fecha: '17/11/2025 06:26:00',
    usuario: 'fotokoldos@hotmail.es',
    sugerencia: 'Buenos desde hace unas semanas no me funciona la parte de parti...',
  },
  {
    id: '7',
    fecha: '06/11/2025 09:23:13',
    usuario: 'safado1364@teralc.com',
    sugerencia: 'No puedo realizar la verificación en 2 pasos y menos pagar la su...',
  },
  {
    id: '8',
    fecha: '03/11/2025 04:58:32',
    usuario: 'pepluis90@gmail.com',
    sugerencia: 'Hola, nose el motivo el cual mi pago mensual se me ha rechazado...',
  },
  {
    id: '9',
    fecha: '01/11/2025 07:21:45',
    usuario: 'santoriellociro27@gmail.com',
    sugerencia: 'Aggiornamento non carica la lega. Risolvere per favore. Se no ca...',
  },
  {
    id: '10',
    fecha: '20/10/2025 06:19:05',
    usuario: 'anroes.ar@gmail.com',
    sugerencia: 'No me deja pagar la membresía, me dice que es un error OR-FGEMF...',
  },
]

function Sugerencias() {
  return (
    <section className="clientes-page sugerencias-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <h1>Sugerencia</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Sugerencia</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Sugerencia</h2>
        </div>
        <div className="clientes-card-toolbar">
          <div />
          <label className="clientes-search">
            <span className="sr-only">Buscar</span>
            <input type="search" placeholder="Buscar" />
          </label>
        </div>
        <div className="clientes-table-wrapper">
          <table className="clientes-table sugerencias-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Usuario</th>
                <th>Sugerencia</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {sugerencias.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay sugerencias cargadas.</td>
                </tr>
              ) : (
                sugerencias.map((sugerencia) => (
                  <tr key={sugerencia.id}>
                    <td>{sugerencia.fecha}</td>
                    <td>{sugerencia.usuario}</td>
                    <td className="sugerencias-text">{sugerencia.sugerencia}</td>
                    <td>
                      <input type="checkbox" aria-label={`Seleccionar sugerencia ${sugerencia.id}`} />
                    </td>
                    <td>
                      <div className="sugerencias-actions">
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar sugerencia ${sugerencia.id}`}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver sugerencia ${sugerencia.id}`}
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
          <span>{sugerencias.length} resultados</span>
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

export default Sugerencias
