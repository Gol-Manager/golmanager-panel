import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons'

interface ColaboradorItem {
  id: string
  nombre: string
  link: string
  descripcion: string
}

const colaboradores: ColaboradorItem[] = [
  {
    id: '1',
    nombre: 'Cenafe Tecnic',
    link: 'cenafe.es/cenafe-tecnic',
    descripcion: 'El Centro Nacional de Formación de Entrenadores de Fútbol ha cre...',
  },
  {
    id: '2',
    nombre: 'Academia Dani Parejo',
    link: 'www.academiadaniparejo.com',
    descripcion: 'La Academia Dani Parejo ofrece una formación técnica exclusiva e...',
  },
  {
    id: '3',
    nombre: 'Academia Deportivo Esmeralda',
    link: 'https://www.instagram.com/deportivo.esmeralda/',
    descripcion: 'Club Formativo Competitivo ?? Afiliados a la FPF - Liga Distrita...',
  },
  {
    id: '4',
    nombre: 'Gol Manager SOPORTE',
    link: 'https://t.me/+8LW87906qlUzZWM8',
    descripcion: 'Enlace al soporte si tienes problemas con la app. Te ayudaremos...',
  },
  {
    id: '5',
    nombre: 'Cenafe',
    link: 'https://www.cenafe.es/',
    descripcion: 'El Centro Nacional de Entrenadores de Fútbol (CENAFE Escuelas)...',
  },
  {
    id: '6',
    nombre: 'OLIVER',
    link: 'https://tryoliver.com/tecnologia-gps-para-equipos.html?utm_sourc...',
    descripcion: 'TECNOLOGÍA GPS PARA CONTROLAR CARGAS Y PLANIFICAR ENTRENAMIENTOS...',
  },
  {
    id: '7',
    nombre: 'INTENSITY Football',
    link: 'https://t.me/+PzovI1_XmK1jMzFk',
    descripcion: 'Academia de tecnificación en Barcelona. Gestión.intensity@gmail...',
  },
  {
    id: '8',
    nombre: 'La oficina del entrenador',
    link: 'https://www.instagram.com/entrenadores.oficina10/',
    descripcion: 'Sesiones - PDF\'S - Herramientas - Debates y muchos más ? Ed. Fi...',
  },
]

function Colaboradores() {
  return (
    <section className="clientes-page colaboradores-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <h1>Colaborador</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Colaborador</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Colaborador</h2>
          <button className="clientes-button" type="button">
            Crear Colaborador
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
          <table className="clientes-table colaboradores-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombres</th>
                <th>Link</th>
                <th>Descripcion</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {colaboradores.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={5}>Aún no hay colaboradores cargados.</td>
                </tr>
              ) : (
                colaboradores.map((colaborador) => (
                  <tr key={colaborador.id}>
                    <td>
                      <span className="colaboradores-thumb" aria-hidden="true" />
                    </td>
                    <td>{colaborador.nombre}</td>
                    <td className="colaboradores-link">{colaborador.link}</td>
                    <td className="colaboradores-descripcion">{colaborador.descripcion}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver colaborador ${colaborador.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar colaborador ${colaborador.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar colaborador ${colaborador.nombre}`}
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
          <span>{colaboradores.length} resultados</span>
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

export default Colaboradores
