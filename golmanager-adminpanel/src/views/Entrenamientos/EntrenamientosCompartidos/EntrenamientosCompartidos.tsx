import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faFilter,
  faShareAlt,
  faPen,
  faStar,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface EntrenamientoCompartidoItem {
  id: string
  nombre: string
  categoria: string
  tiempo: number
  dificultad: 'LOW' | 'MEDIUM' | 'HIGH'
  intensidad: 'LOW' | 'MEDIUM' | 'HIGH'
  votos: number
  calificacion: number
}

const entrenamientosCompartidos: EntrenamientoCompartidoItem[] = [
  {
    id: '1',
    nombre: 'posesión en zonas',
    categoria: 'Físico - Fuerza',
    tiempo: 25,
    dificultad: 'MEDIUM',
    intensidad: 'LOW',
    votos: 0,
    calificacion: 0,
  },
  {
    id: '2',
    nombre: 'Tecnica',
    categoria: 'Físico - Fuerza',
    tiempo: 10,
    dificultad: 'LOW',
    intensidad: 'HIGH',
    votos: 0,
    calificacion: 0,
  },
  {
    id: '3',
    nombre: 'doble area',
    categoria: 'Físico - Fuerza',
    tiempo: 8,
    dificultad: 'LOW',
    intensidad: 'MEDIUM',
    votos: 0,
    calificacion: 0,
  },
  {
    id: '4',
    nombre: 'Blocajes y Saques rapidos.',
    categoria: 'Físico - Fuerza',
    tiempo: 15,
    dificultad: 'MEDIUM',
    intensidad: 'HIGH',
    votos: 2,
    calificacion: 3,
  },
  {
    id: '5',
    nombre: 'Triangulacion 1 VS 1 y tiro a porteria.',
    categoria: 'Físico - Fuerza',
    tiempo: 20,
    dificultad: 'HIGH',
    intensidad: 'HIGH',
    votos: 2,
    calificacion: 4,
  },
  {
    id: '6',
    nombre: 'Superioridad 3 contra 3, 2 contra 1',
    categoria: 'Global',
    tiempo: 20,
    dificultad: 'MEDIUM',
    intensidad: 'HIGH',
    votos: 12,
    calificacion: 5,
  },
  {
    id: '7',
    nombre: 'CONTROL Y CORDINACION',
    categoria: 'Táctica',
    tiempo: 30,
    dificultad: 'MEDIUM',
    intensidad: 'MEDIUM',
    votos: 4,
    calificacion: 3,
  },
  {
    id: '8',
    nombre: 'Circuito',
    categoria: 'Físico - Fuerza',
    tiempo: 15,
    dificultad: 'LOW',
    intensidad: 'MEDIUM',
    votos: 2,
    calificacion: 4,
  },
  {
    id: '9',
    nombre: 'Pases con semiglobo y definicion',
    categoria: 'Físico - Fuerza',
    tiempo: 10,
    dificultad: 'MEDIUM',
    intensidad: 'HIGH',
    votos: 6,
    calificacion: 2,
  },
]

const renderStars = (calificacion: number) =>
  Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`entrenamientos-star${index < calificacion ? ' is-active' : ''}`}
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faStar} />
    </span>
  ))

function EntrenamientosCompartidos() {
  return (
    <section className="clientes-page entrenamientos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faShareAlt} />
          </span>
          <h1>Entrenamientos compartidos</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Entrenamientos compartidos</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Entrenamientos compartidos</h2>
          <button className="clientes-button" type="button">
            Crear Entrenamientos compartidos
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
          <table className="clientes-table entrenamientos-table entrenamientos-compartidos-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Tiempo</th>
                <th>Dificultad</th>
                <th>Intensidad</th>
                <th>Votos</th>
                <th>Calificación</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {entrenamientosCompartidos.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={9}>Aún no hay entrenamientos compartidos cargados.</td>
                </tr>
              ) : (
                entrenamientosCompartidos.map((entrenamiento) => (
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
                      <span className="entrenamientos-votes">{entrenamiento.votos}</span>
                    </td>
                    <td>
                      <div className="entrenamientos-rating">
                        <span>({entrenamiento.calificacion})</span>
                        <span className="entrenamientos-stars">
                          {renderStars(entrenamiento.calificacion)}
                        </span>
                      </div>
                    </td>
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
          <span>{entrenamientosCompartidos.length} resultados</span>
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

export default EntrenamientosCompartidos
