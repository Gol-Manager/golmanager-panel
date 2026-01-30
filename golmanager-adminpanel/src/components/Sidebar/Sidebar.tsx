import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faClipboardList,
  faCog,
  faCommentDots,
  faDumbbell,
  faFutbol,
  faFlag,
  faFlagCheckered,
  faGlobeAmericas,
  faHome,
  faIdCard,
  faLayerGroup,
  faLifeRing,
  faShareAlt,
  faTag,
  faTicketAlt,
  faToolbox,
  faUser,
  faTrash,
  faUsers,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons'

interface SidebarProps {
  isCollapsed: boolean
  onSelect?: (view: string) => void
}

interface SidebarChildItem {
  label: string
  icon: typeof faHome
  view?: string
}

interface SidebarItem {
  label: string
  icon: typeof faHome
  hasChevron?: boolean
  children?: SidebarChildItem[]
  view?: string
}

const menuItems: SidebarItem[] = [
  { label: 'HOME', icon: faHome },
  {
    label: 'CLIENTES',
    icon: faUsers,
    hasChevron: true,
    children: [
      { label: 'CLIENTES', icon: faUsers, view: 'clientes' },
      { label: 'CUENTAS ELIMINADAS', icon: faTrash, view: 'cuentas-eliminadas' },
    ],
  },
  { label: 'ADMINISTRADORES', icon: faUserShield, view: 'administradores' },
  { label: 'CUPONES', icon: faTicketAlt, view: 'cupones' },
  { label: 'CATEGORIAS ENTRENAMIENTO', icon: faFutbol, view: 'categorias-entrenamiento' },
  { label: 'MATERIALES ENTRENAMIENTO', icon: faToolbox, view: 'materiales-entrenamiento' },
  {
    label: 'ENTRENAMIENTOS',
    icon: faBell,
    hasChevron: true,
    children: [
      { label: 'ENTRENAMIENTOS', icon: faDumbbell, view: 'entrenamientos' },
      { label: 'ENTRENAMIENTOS USUARIOS', icon: faUser, view: 'entrenamientos-usuarios' },
      { label: 'ENTRENAMIENTOS COMPARTIDOS', icon: faShareAlt, view: 'entrenamientos-compartidos' },
    ],
  },
  {
    label: 'FEEDBACK',
    icon: faCommentDots,
    hasChevron: true,
    children: [
      { label: 'SUGERENCIAS', icon: faCommentDots, view: 'sugerencias' },
      { label: 'MODULOS APP', icon: faLayerGroup, view: 'modulos-app' },
      { label: 'SOPORTE', icon: faLifeRing, view: 'soporte' },
    ],
  },
  { label: 'COLABORADORES', icon: faUsers, view: 'colaboradores' },
  {
    label: 'MEMBERSHIP',
    icon: faBell,
    hasChevron: true,
    children: [
      { label: 'MEMBRESIA 01', icon: faIdCard, view: 'membresia-texto-imagen' },
      { label: 'MEMBRESIA 02', icon: faTag, view: 'membresia-items' },
      { label: 'MEMBRESIA-DESC', icon: faTag, view: 'membresia-descripcion' },
    ],
  },
  {
    label: 'TIPO DE NOTIFICACIONES',
    icon: faBell,
    hasChevron: true,
    children: [{ label: 'TIPOS', icon: faBell, view: 'tipos-notificaciones' }],
  },
  {
    label: 'NOTIFICACIONES',
    icon: faBell,
    hasChevron: true,
    children: [
      { label: 'GENERALES', icon: faBell, view: 'notificaciones-generales' },
      { label: 'AUTOMATICAS', icon: faBell, view: 'notificaciones-automaticas' },
      { label: 'TRANSLATION', icon: faBell, view: 'notificaciones-traducciones' },
    ],
  },
  {
    label: 'JUEGOS',
    icon: faDumbbell,
    hasChevron: true,
    children: [
      { label: 'TIPO DE FUTBOL', icon: faBell, view: 'tipos-futbol' },
      { label: 'TACTICAS', icon: faBell, view: 'tacticas' },
      { label: 'POSICIÓN', icon: faFutbol, view: 'posiciones' },
      { label: 'DIFICULTAD', icon: faFutbol, view: 'dificultad' },
    ],
  },
  { label: 'TIPO DE JUSTIFICACIÓN', icon: faClipboardList, view: 'tipo-justificacion' },
  {
    label: 'AJUSTES',
    icon: faCog,
    hasChevron: true,
    children: [
      { label: 'COMPETICIÓN', icon: faFlagCheckered, view: 'competicion' },
      { label: 'LOCALIDAD', icon: faFlag, view: 'localidad' },
      { label: 'PAÍS', icon: faGlobeAmericas, view: 'pais' },
      { label: 'CONFIGURACIÓN', icon: faCog, view: 'configuracion' },
    ],
  },
]

function Sidebar({ isCollapsed, onSelect }: SidebarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <aside className={`sidebar${isCollapsed ? ' sidebar--collapsed' : ''}`}>
      <p className="sidebar-section">NAVEGACION</p>
      <nav className="sidebar-nav">
        <button className="sidebar-item" type="button" onClick={() => onSelect?.('home')}>
          <span className="sidebar-icon" aria-hidden="true">
            <FontAwesomeIcon icon={menuItems[0].icon} />
          </span>
          HOME
        </button>
      </nav>

      <p className="sidebar-section">MENU</p>
      <nav className="sidebar-nav">
        {menuItems.slice(1).map((item) => {
          const isOpen = openMenu === item.label
          const hasChildren = Boolean(item.children?.length)

          return (
            <div className="sidebar-group" key={item.label}>
              <button
                className="sidebar-item"
                type="button"
                onClick={() => {
                  if (hasChildren && !isCollapsed) {
                    setOpenMenu((prev) => (prev === item.label ? null : item.label))
                    return
                  }
                  if (item.view) {
                    onSelect?.(item.view)
                  }
                }}
                aria-expanded={hasChildren ? isOpen : undefined}
              >
                <span className="sidebar-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="sidebar-label">{item.label}</span>
                {item.hasChevron ? (
                  <span
                    className={`sidebar-chevron${isOpen ? ' sidebar-chevron--open' : ''}`}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                ) : null}
              </button>
              {hasChildren && !isCollapsed ? (
                <div className={`sidebar-subnav${isOpen ? ' sidebar-subnav--open' : ''}`}>
                  {item.children?.map((child) => (
                    <button
                      className="sidebar-subitem"
                      type="button"
                      key={child.label}
                      onClick={() => {
                        if (child.view) {
                          onSelect?.(child.view)
                        }
                      }}
                    >
                      <span className="sidebar-subicon" aria-hidden="true">
                        <FontAwesomeIcon icon={child.icon} />
                      </span>
                      <span className="sidebar-label">{child.label}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
