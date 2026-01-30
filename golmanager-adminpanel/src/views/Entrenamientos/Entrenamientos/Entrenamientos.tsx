import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faFilter,
  faPen,
  faRunning,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface EntrenamientoItem {
  id: string
  nombre: string
  categoria: string
  tiempo: number
  dificultad: 'LOW' | 'MEDIUM' | 'HIGH'
  intensidad: 'LOW' | 'MEDIUM' | 'HIGH'
}

const entrenamientos: EntrenamientoItem[] = [
  {
    id: '1',
    nombre: 'Rueda de pases con paredes paredes y coordinación 2',
    categoria: 'Técnica',
    tiempo: 10,
    dificultad: 'LOW',
    intensidad: 'HIGH',
  },
  {
    id: '2',
    nombre: 'Cuadrado con pared y reacción coordinación',
    categoria: 'Técnica',
    tiempo: 6,
    dificultad: 'LOW',
    intensidad: 'MEDIUM',
  },
  {
    id: '3',
    nombre: 'Rondo + presión y finalización en miniporterías',
    categoria: 'Global',
    tiempo: 15,
    dificultad: 'LOW',
    intensidad: 'HIGH',
  },
  {
    id: '4',
    nombre: 'Posesión, recuperación y gol en miniporterías',
    categoria: 'Global',
    tiempo: 15,
    dificultad: 'MEDIUM',
    intensidad: 'MEDIUM',
  },
  {
    id: '5',
    nombre: 'Pases con doble finalización a la vez.',
    categoria: 'Definición (Finalización)',
    tiempo: 15,
    dificultad: 'LOW',
    intensidad: 'MEDIUM',
  },
  {
    id: '6',
    nombre: 'Rueda de pases con paredes y finalización',
    categoria: 'Definición (Finalización)',
    tiempo: 15,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '7',
    nombre: 'Rueda de pases con tiro (rotación numerada)',
    categoria: 'Definición (Finalización)',
    tiempo: 10,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
]

function Entrenamientos() {
  return (
    <section className="clientes-page entrenamientos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faRunning} />
          </span>
          <h1>Entrenamientos</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Entrenamientos</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Entrenamientos</h2>
          <button className="clientes-button" type="button">
            Crear Entrenamientos
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
          <table className="clientes-table entrenamientos-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Tiempo</th>
                <th>Dificultad</th>
                <th>Intensidad</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {entrenamientos.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={7}>Aún no hay entrenamientos cargados.</td>
                </tr>
              ) : (
                entrenamientos.map((entrenamiento) => (
                  <tr key={entrenamiento.id}>
                    <td>
                      <span className="entrenamientos-thumb" aria-hidden="true" />
                    </td>
                    <td>{entrenamiento.nombre}</td>
                    <td>{entrenamiento.categoria}</td>
                    <td>{entrenamiento.tiempo}</td>
                    <td>{entrenamiento.dificultad}</td>
                    <td>{entrenamiento.intensidad}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver entrenamiento ${entrenamiento.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar entrenamiento ${entrenamiento.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar entrenamiento ${entrenamiento.nombre}`}
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
          <span>{entrenamientos.length} resultados</span>
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

export default Entrenamientos
