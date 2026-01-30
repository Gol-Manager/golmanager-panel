import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faFilter,
  faPen,
  faUser,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface EntrenamientoUsuarioItem {
  id: string
  nombre: string
  categoria: string
  tiempo: number | null
  dificultad: 'LOW' | 'MEDIUM' | 'HIGH'
  intensidad: 'LOW' | 'MEDIUM' | 'HIGH'
}

const entrenamientosUsuarios: EntrenamientoUsuarioItem[] = [
  {
    id: '1',
    nombre: 'Acciones explosivas 1vs1',
    categoria: 'Físico - Fuerza',
    tiempo: 0,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '2',
    nombre: 'Rueda de pases juego de cara',
    categoria: 'Físico - Fuerza',
    tiempo: 0,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '3',
    nombre: 'Rueda de pases paredes',
    categoria: 'Físico - Fuerza',
    tiempo: 0,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '4',
    nombre: 'Sesión 61',
    categoria: 'Físico - Fuerza',
    tiempo: null,
    dificultad: 'HIGH',
    intensidad: 'HIGH',
  },
  {
    id: '5',
    nombre: 'Finalización tras acción coordinativa',
    categoria: 'Físico - Fuerza',
    tiempo: 0,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '6',
    nombre: 'Sesión 60',
    categoria: 'Físico - Fuerza',
    tiempo: null,
    dificultad: 'HIGH',
    intensidad: 'HIGH',
  },
  {
    id: '7',
    nombre: 'Definición y cabezazo',
    categoria: 'Físico - Fuerza',
    tiempo: 5,
    dificultad: 'MEDIUM',
    intensidad: 'LOW',
  },
  {
    id: '8',
    nombre: 'translado',
    categoria: 'Físico - Fuerza',
    tiempo: 5,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '9',
    nombre: 'translado con obstáculos y definicion',
    categoria: 'Físico - Fuerza',
    tiempo: 10,
    dificultad: 'LOW',
    intensidad: 'LOW',
  },
  {
    id: '10',
    nombre: 'circuito de pases y control',
    categoria: 'Físico - Fuerza',
    tiempo: 5,
    dificultad: 'MEDIUM',
    intensidad: 'MEDIUM',
  },
]

function EntrenamientosUsuarios() {
  return (
    <section className="clientes-page entrenamientos-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h1>Entrenamientos usuarios</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Entrenamientos usuarios</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Entrenamientos usuarios</h2>
          <button className="clientes-button" type="button">
            Crear Entrenamientos usuarios
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
              {entrenamientosUsuarios.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={7}>Aún no hay entrenamientos de usuarios cargados.</td>
                </tr>
              ) : (
                entrenamientosUsuarios.map((entrenamiento) => (
                  <tr key={entrenamiento.id}>
                    <td>
                      <span className="entrenamientos-thumb" aria-hidden="true" />
                    </td>
                    <td>{entrenamiento.nombre}</td>
                    <td>{entrenamiento.categoria}</td>
                    <td>
                      {entrenamiento.tiempo === null ? (
                        <span className="cupones-pill">Nulo</span>
                      ) : (
                        entrenamiento.tiempo
                      )}
                    </td>
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
          <span>{entrenamientosUsuarios.length} resultados</span>
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

export default EntrenamientosUsuarios
