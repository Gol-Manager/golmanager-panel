import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faDumbbell,
  faEye,
  faFutbol,
  faPen,
  faToolbox,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

interface MaterialItem {
  id: string
  nombre: string
  icono: typeof faCircle
  color: string
}

const materiales: MaterialItem[] = [
  { id: '1', nombre: 'Bosu', icono: faToolbox, color: '#e6f4ea' },
  { id: '2', nombre: 'Bandas elasticas', icono: faDumbbell, color: '#f1f5f9' },
  { id: '3', nombre: 'Escalera', icono: faToolbox, color: '#e2f2ff' },
  { id: '4', nombre: 'Balón medicinal', icono: faFutbol, color: '#e6f4ea' },
  { id: '5', nombre: 'Portería mini (pequeña)', icono: faFutbol, color: '#f1f5f9' },
  { id: '6', nombre: 'Portería Grande Extra', icono: faFutbol, color: '#e6f4ea' },
  { id: '7', nombre: 'Aros', icono: faCircle, color: '#f1f5f9' },
  { id: '8', nombre: 'Petos', icono: faToolbox, color: '#e2f2ff' },
]

function MaterialesEntrenamiento() {
  return (
    <section className="clientes-page materiales-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faToolbox} />
          </span>
          <h1>Material</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Material</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Material</h2>
          <button className="clientes-button" type="button">
            Crear Material
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
          <table className="clientes-table materiales-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Nombre</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {materiales.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={3}>Aún no hay materiales cargados.</td>
                </tr>
              ) : (
                materiales.map((material) => (
                  <tr key={material.id}>
                    <td>
                      <span
                        className="materiales-thumb"
                        style={{ backgroundColor: material.color }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={material.icono} />
                      </span>
                    </td>
                    <td>{material.nombre}</td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver material ${material.nombre}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar material ${material.nombre}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar material ${material.nombre}`}
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
          <span>{materiales.length} resultados</span>
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

export default MaterialesEntrenamiento
