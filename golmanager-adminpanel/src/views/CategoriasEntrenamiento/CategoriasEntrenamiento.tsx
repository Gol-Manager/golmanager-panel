import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDumbbell,
  faEye,
  faFutbol,
  faPen,
  faRunning,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface CategoriaItem {
  id: string
  nombre: string
  descripcion: string
  icono: typeof faFutbol
  color: string
}

const categorias: CategoriaItem[] = [
  {
    id: '1',
    nombre: 'Definición (Finalización)',
    descripcion:
      'Tareas basados en la definición del equipo. El objetivo principal es mejorar la finalización.',
    icono: faFutbol,
    color: '#7ddc5c',
  },
  {
    id: '2',
    nombre: 'Global',
    descripcion:
      'Genéricos, integrados o juegos: tareas en las que se entrenan diferentes conceptos.',
    icono: faFutbol,
    color: '#c7f7a1',
  },
  {
    id: '3',
    nombre: 'Táctica',
    descripcion:
      'Ejercicios basados en posiciones en el campo o diferentes situaciones de juego.',
    icono: faDumbbell,
    color: '#f1f5f9',
  },
  {
    id: '4',
    nombre: 'Técnica',
    descripcion:
      'Tareas individuales o colectivos basados en el trabajo técnico de cada jugador.',
    icono: faFutbol,
    color: '#e2f2ff',
  },
  {
    id: '5',
    nombre: 'Físico - Fuerza',
    descripcion: 'Ejercicios basados en mejorar la condición física o la fuerza.',
    icono: faRunning,
    color: '#e0f7ff',
  },
]

function CategoriasEntrenamiento() {
  return (
    <section className="clientes-page categorias-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faFutbol} />
          </span>
          <h1>Categoría</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Categoría</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Categoría</h2>
          <button className="clientes-button" type="button">
            Crear Categoría
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
          <table className="clientes-table categorias-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {categorias.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={4}>Aún no hay categorías cargadas.</td>
                </tr>
              ) : (
                categorias.map((categoria) => (
                  <tr key={categoria.id}>
                    <td>
                      <span
                        className="categorias-thumb"
                        style={{ backgroundColor: categoria.color }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={categoria.icono} />
                      </span>
                    </td>
                    <td>{categoria.nombre}</td>
                    <td className="categorias-description">{categoria.descripcion}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver categoría ${categoria.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar categoría ${categoria.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar categoría ${categoria.nombre}`}
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
          <span>{categorias.length} resultados</span>
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

export default CategoriasEntrenamiento
