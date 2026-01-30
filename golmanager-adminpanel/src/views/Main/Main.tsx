import { useState } from 'react'
import { Header, Sidebar } from '../../components'
import {
  Administradores,
  CategoriasEntrenamiento,
  Clientes,
  CuentasEliminadas,
  Cupones,
  Entrenamientos,
  EntrenamientosCompartidos,
  EntrenamientosUsuarios,
  Home,
  MaterialesEntrenamiento,
  MembresiaTextoImagen,
  MembresiaItems,
  MembresiaDescripcion,
  ModulosApp,
  Colaboradores,
  Sugerencias,
  Soporte,
  TiposNotificaciones,
  NotificacionesGenerales,
  NotificacionesAutomaticas,
  NotificacionesTraducciones,
  TiposFutbol,
  Tacticas,
  Posiciones,
  Dificultad,
  TipoJustificacion,
  Competicion,
  Localidad,
  Pais,
  Configuracion,
} from '../../views'

interface MainProps {
  userEmail: string
  onLogout: () => void
}

function Main({ userEmail, onLogout }: MainProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeView, setActiveView] = useState<
    | 'home'
    | 'clientes'
    | 'cuentas-eliminadas'
    | 'administradores'
    | 'cupones'
    | 'categorias-entrenamiento'
    | 'materiales-entrenamiento'
    | 'entrenamientos'
    | 'entrenamientos-usuarios'
    | 'entrenamientos-compartidos'
    | 'sugerencias'
    | 'modulos-app'
    | 'soporte'
    | 'colaboradores'
    | 'membresia-texto-imagen'
    | 'membresia-items'
    | 'membresia-descripcion'
    | 'tipos-notificaciones'
    | 'notificaciones-generales'
    | 'notificaciones-automaticas'
    | 'notificaciones-traducciones'
    | 'tipos-futbol'
    | 'tacticas'
    | 'posiciones'
    | 'dificultad'
    | 'tipo-justificacion'
    | 'competicion'
    | 'localidad'
    | 'pais'
    | 'configuracion'
  >('home')

  const renderView = () => {
    if (activeView === 'clientes') {
      return <Clientes />
    }
    if (activeView === 'cuentas-eliminadas') {
      return <CuentasEliminadas />
    }
    if (activeView === 'administradores') {
      return <Administradores />
    }
    if (activeView === 'cupones') {
      return <Cupones />
    }
    if (activeView === 'categorias-entrenamiento') {
      return <CategoriasEntrenamiento />
    }
    if (activeView === 'materiales-entrenamiento') {
      return <MaterialesEntrenamiento />
    }
    if (activeView === 'entrenamientos') {
      return <Entrenamientos />
    }
    if (activeView === 'entrenamientos-usuarios') {
      return <EntrenamientosUsuarios />
    }
    if (activeView === 'entrenamientos-compartidos') {
      return <EntrenamientosCompartidos />
    }
    if (activeView === 'sugerencias') {
      return <Sugerencias />
    }
    if (activeView === 'modulos-app') {
      return <ModulosApp />
    }
    if (activeView === 'soporte') {
      return <Soporte />
    }
    if (activeView === 'colaboradores') {
      return <Colaboradores />
    }
    if (activeView === 'membresia-texto-imagen') {
      return <MembresiaTextoImagen />
    }
    if (activeView === 'membresia-items') {
      return <MembresiaItems />
    }
    if (activeView === 'membresia-descripcion') {
      return <MembresiaDescripcion />
    }
    if (activeView === 'tipos-notificaciones') {
      return <TiposNotificaciones />
    }
    if (activeView === 'notificaciones-generales') {
      return <NotificacionesGenerales />
    }
    if (activeView === 'notificaciones-automaticas') {
      return <NotificacionesAutomaticas />
    }
    if (activeView === 'notificaciones-traducciones') {
      return <NotificacionesTraducciones />
    }
    if (activeView === 'tipos-futbol') {
      return <TiposFutbol />
    }
    if (activeView === 'tacticas') {
      return <Tacticas />
    }
    if (activeView === 'posiciones') {
      return <Posiciones />
    }
    if (activeView === 'dificultad') {
      return <Dificultad />
    }
    if (activeView === 'tipo-justificacion') {
      return <TipoJustificacion />
    }
    if (activeView === 'competicion') {
      return <Competicion />
    }
    if (activeView === 'localidad') {
      return <Localidad />
    }
    if (activeView === 'pais') {
      return <Pais />
    }
    if (activeView === 'configuracion') {
      return <Configuracion />
    }
    return <Home />
  }

  return (
    <div className="main-page">
      <Header
        userEmail={userEmail}
        onLogout={onLogout}
        onMenuToggle={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <div className="main-layout">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onSelect={(view) =>
            setActiveView(
              view as
                | 'home'
                | 'clientes'
                | 'cuentas-eliminadas'
                | 'administradores'
                | 'cupones'
                | 'categorias-entrenamiento'
                | 'materiales-entrenamiento'
                | 'entrenamientos'
                | 'entrenamientos-usuarios'
                | 'entrenamientos-compartidos'
                | 'sugerencias'
                | 'modulos-app'
                | 'soporte'
                | 'colaboradores'
                | 'membresia-texto-imagen'
                | 'membresia-items'
                | 'membresia-descripcion'
                | 'tipos-notificaciones'
                | 'notificaciones-generales'
                | 'notificaciones-automaticas'
                | 'notificaciones-traducciones'
                | 'tipos-futbol'
                | 'tacticas'
                | 'posiciones'
                | 'dificultad'
                | 'tipo-justificacion'
                | 'competicion'
                | 'localidad'
                | 'pais'
                | 'configuracion',
            )
          }
        />
        <main className="main-content">
          {renderView()}
        </main>
      </div>
    </div>
  )
}

export default Main
