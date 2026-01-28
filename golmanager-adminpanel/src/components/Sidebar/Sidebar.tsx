import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faClipboardList,
  faCog,
  faCommentDots,
  faDumbbell,
  faFutbol,
  faHome,
  faTicketAlt,
  faToolbox,
  faUsers,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons'

interface SidebarProps {
  isCollapsed: boolean
}

const menuItems = [
  { label: 'HOME', icon: faHome },
  { label: 'CLIENTES', icon: faUsers, hasChevron: true },
  { label: 'ADMINISTRADORES', icon: faUserShield },
  { label: 'CUPONES', icon: faTicketAlt },
  { label: 'CATEGORIAS ENTRENAMIENTO', icon: faFutbol },
  { label: 'MATERIALES ENTRENAMIENTO', icon: faToolbox },
  { label: 'ENTRENAMIENTOS', icon: faBell, hasChevron: true },
  { label: 'FEEDBACK', icon: faCommentDots, hasChevron: true },
  { label: 'COLABORADORES', icon: faUsers },
  { label: 'MEMBERSHIP', icon: faBell, hasChevron: true },
  { label: 'TIPO DE NOTIFICACIONES', icon: faBell, hasChevron: true },
  { label: 'NOTIFICACIONES', icon: faBell, hasChevron: true },
  { label: 'JUEGOS', icon: faDumbbell, hasChevron: true },
  { label: 'TIPO DE JUSTIFICACIÓN', icon: faClipboardList },
  { label: 'AJUSTES', icon: faCog, hasChevron: true },
]

function Sidebar({ isCollapsed }: SidebarProps) {
  return (
    <aside className={`sidebar${isCollapsed ? ' sidebar--collapsed' : ''}`}>
      <p className="sidebar-section">NAVEGACION</p>
      <nav className="sidebar-nav">
        <button className="sidebar-item" type="button">
          <span className="sidebar-icon" aria-hidden="true">
            <FontAwesomeIcon icon={menuItems[0].icon} />
          </span>
          HOME
        </button>
      </nav>

      <p className="sidebar-section">MENU</p>
      <nav className="sidebar-nav">
        {menuItems.slice(1).map((item) => (
          <button className="sidebar-item" type="button" key={item.label}>
            <span className="sidebar-icon" aria-hidden="true">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <span className="sidebar-label">{item.label}</span>
            {item.hasChevron ? <span className="sidebar-chevron" aria-hidden="true">›</span> : null}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
