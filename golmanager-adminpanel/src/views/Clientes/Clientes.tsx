import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface ClienteItem {
  id: string
  nombre: string
  email: string
}

function Clientes() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const clientes: ClienteItem[] = []

  const allSelected = clientes.length > 0 && selectedIds.size === clientes.length
  const selectedCount = selectedIds.size

  const selectedEmails = useMemo(() => {
    if (selectedIds.size === 0) return []
    return clientes.filter((cliente) => selectedIds.has(cliente.id)).map((cliente) => cliente.email)
  }, [clientes, selectedIds])

  const toggleSelectAll = () => {
    if (clientes.length === 0) return
    if (allSelected) {
      setSelectedIds(new Set())
      return
    }
    setSelectedIds(new Set(clientes.map((cliente) => cliente.id)))
  }

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handlePrimaryAction = async () => {
    if (selectedCount === 0) {
      return
    }
    const emails = selectedEmails.join(', ')
    if (!emails) return
    try {
      await navigator.clipboard.writeText(emails)
    } catch {
      // Clipboard access can fail; fallback to a simple prompt.
      window.prompt('Copiar correos', emails)
    }
  }

  return (
    <section className="clientes-page">
      <header className="clientes-header">
        <div className="clientes-title">
          <span className="clientes-title-icon" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h1>Clientes</h1>
        </div>
        <div className="clientes-breadcrumb">
          <span>ESTÁS AQUÍ:</span>
          <span>Home</span>
          <span>/</span>
          <span>Clientes</span>
        </div>
      </header>

      <div className="clientes-card">
        <div className="clientes-card-header">
          <h2>Clientes</h2>
          <button className="clientes-button" type="button" onClick={handlePrimaryAction}>
            {selectedCount > 0 ? 'Copiar correos' : 'Crear Clientes'}
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
          <table className="clientes-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    aria-label="Seleccionar todos"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                    disabled={clientes.length === 0}
                  />
                </th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Habilitado</th>
                <th>Temp.</th>
                <th>Equipo</th>
                <th>Tipo Cuenta</th>
                <th>User Pro</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clientes.length === 0 ? (
                <tr className="clientes-empty">
                  <td colSpan={10}>Aún no hay clientes cargados.</td>
                </tr>
              ) : (
                clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>
                      <input
                        type="checkbox"
                        aria-label={`Seleccionar ${cliente.nombre}`}
                        checked={selectedIds.has(cliente.id)}
                        onChange={() => toggleSelect(cliente.id)}
                      />
                    </td>
                    <td />
                    <td>{cliente.nombre}</td>
                    <td>{cliente.email}</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Clientes
