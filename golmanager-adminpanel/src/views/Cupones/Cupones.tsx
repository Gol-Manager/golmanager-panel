import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTicketAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

interface CuponItem {
  id: string
  codigo: string
  expiraEn: string
  usosLimite: number
  usosActivados: number
  creadoEn: string
  editadoEn?: string | null
}

const cupones: CuponItem[] = [
  {
    id: '1',
    codigo: 'SUPPOR',
    expiraEn: '31/01/2027 00:00:00',
    usosLimite: 2,
    usosActivados: 2,
    creadoEn: '31/12/2025 12:18:25',
    editadoEn: '08/01/2026 04:02:47',
  },
  {
    id: '2',
    codigo: 'CENAFF',
    expiraEn: '30/03/2026 00:00:00',
    usosLimite: 45,
    usosActivados: 17,
    creadoEn: '17/09/2025 05:24:07',
    editadoEn: '22/12/2025 05:20:26',
  },
  {
    id: '3',
    codigo: 'VIÑA25',
    expiraEn: '30/06/2026 00:00:00',
    usosLimite: 2,
    usosActivados: 2,
    creadoEn: '12/09/2025 05:17:42',
    editadoEn: '22/10/2025 15:50:15',
  },
  {
    id: '4',
    codigo: 'JAVILO',
    expiraEn: '09/01/2027 00:00:00',
    usosLimite: 1,
    usosActivados: 1,
    creadoEn: '09/09/2025 04:32:45',
    editadoEn: '09/09/2025 04:40:13',
  },
  {
    id: '5',
    codigo: 'EDREEE',
    expiraEn: '20/01/2026 00:00:00',
    usosLimite: 1,
    usosActivados: 1,
    creadoEn: '18/08/2025 09:23:01',
    editadoEn: null,
  },
  {
    id: '6',
    codigo: 'GOLITO',
    expiraEn: '20/12/2026 00:00:00',
    usosLimite: 2,
    usosActivados: 2,
    creadoEn: '18/03/2025 09:45:35',
    editadoEn: '22/01/2026 09:10:32',
  },
  {
    id: '7',
    codigo: 'EZEQUU',
    expiraEn: '04/01/2026 00:00:00',
    usosLimite: 1,
    usosActivados: 1,
    creadoEn: '04/09/2024 04:58:44',
    editadoEn: '04/09/2024 04:59:02',
  },
  {
    id: '8',
    codigo: 'NETI10',
    expiraEn: '01/01/2027 00:00:00',
    usosLimite: 1,
    usosActivados: 1,
    creadoEn: '01/09/2022 14:12:47',
    editadoEn: '01/01/2024 15:24:57',
  },
]

function Cupones() {
  return (
    <section className="clientes-page cupones-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faTicketAlt} />
          </span>
          <h1>Cupones</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Cupones</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Cupones</h2>
          <button className="clientes-button" type="button">
            Crear Cupones
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
          <table className="clientes-table cupones-table">
            <thead>
              <tr>
                <th>Código Promocional</th>
                <th>Expira en</th>
                <th>Nro Usos Limite</th>
                <th>Nro Usos Activados</th>
                <th>Creado en</th>
                <th>Editado en</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cupones.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={7}>Aún no hay cupones cargados.</td>
                </tr>
              ) : (
                cupones.map((cupon) => (
                  <tr key={cupon.id}>
                    <td>{cupon.codigo}</td>
                    <td>{cupon.expiraEn}</td>
                    <td>{cupon.usosLimite}</td>
                    <td>{cupon.usosActivados}</td>
                    <td>{cupon.creadoEn}</td>
                    <td>
                      {cupon.editadoEn ? (
                        cupon.editadoEn
                      ) : (
                        <span className="cupones-pill">Nulo</span>
                      )}
                    </td>
                    <td>
                      <div className="cupones-actions">
                        <button
                          className="cupones-action-button cupones-action-button--ghost"
                          type="button"
                          aria-label={`Ver cupón ${cupon.codigo}`}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--edit"
                          type="button"
                          aria-label={`Editar cupón ${cupon.codigo}`}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button
                          className="cupones-action-button cupones-action-button--delete"
                          type="button"
                          aria-label={`Eliminar cupón ${cupon.codigo}`}
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
          <span>{cupones.length} resultados</span>
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

export default Cupones
