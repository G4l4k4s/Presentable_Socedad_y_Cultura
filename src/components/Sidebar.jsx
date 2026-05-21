import { Home, ClipboardList, BookOpen, CreditCard, MessageCircle, ShieldCheck, Newspaper, HelpCircle, Headphones, ChevronDown, LogOut } from 'lucide-react'
import styles from '../styles/Sidebar.module.css'

const navItems = [
  { id: 'inicio',           label: 'Inicio',                    Icon: Home },
  { id: 'inscripciones',    label: 'Inscripciones',              Icon: ClipboardList },
  { id: 'mis-cursos',       label: 'Mis cursos',                 Icon: BookOpen },
  { id: 'pagos',            label: 'Pagos',                      Icon: CreditCard },
  { id: 'comunicaciones',   label: 'Comunicaciones',             Icon: MessageCircle },
  { id: 'cultura-digital',  label: 'Sociedad y Cultura Digital', Icon: ShieldCheck },
  { id: 'noticias',         label: 'Noticias',                   Icon: Newspaper },
  { id: 'faq',              label: 'Preguntas Frecuentes',       Icon: HelpCircle },
  { id: 'ayuda',            label: 'Ayuda',                      Icon: Headphones },
]

export default function Sidebar({ vistaActual, onNavegar, onLogout }) {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoCircle}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8M12 8v8" />
          </svg>
        </div>
        <div>
          <h2 className={styles.logoTitle}>UdeA</h2>
          <p className={styles.logoSub}>Programa de Niños<br />y Jóvenes</p>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        {navItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`${styles.navItem} ${vistaActual === id ? styles.active : ''}`}
            onClick={() => onNavegar(id)}
          >
            <Icon size={17} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* User */}
      <div className={styles.user}>
        <div className={styles.avatar}>MG</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>María González</span>
          <span className={styles.userRole}>Estudiante</span>
        </div>
        <button className={styles.logoutBtn} onClick={onLogout} title="Cerrar sesión">
          <LogOut size={14} />
        </button>
      </div>
    </aside>
  )
}
