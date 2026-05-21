import { Bell, HelpCircle } from 'lucide-react'
import styles from './Topbar.module.css'

const titulos = {
  inicio:            { h1: '¡Hola, María!',              sub: 'Resumen general de tu cuenta.' },
  servicios:         { h1: 'Servicios disponibles',       sub: 'Selecciona un servicio para continuar.' },
  'nuevo-registro':  { h1: 'Nuevo registro',              sub: 'Completa el formulario para agregar un elemento.' },
  reportes:          { h1: 'Reportes',                    sub: 'Listado de registros recientes.' },
  'cultura-digital': { h1: '¡Hola, María!',              sub: 'Bienvenida al espacio de Sociedad y Cultura Digital.' },
}

export default function Topbar({ vistaActual }) {
  const { h1, sub } = titulos[vistaActual] || titulos['cultura-digital']

  return (
    <header className={styles.topbar}>
      <div>
        <h1 className={styles.title}>{h1}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.notifBtn}>
          <Bell size={16} />
          <span className={styles.dot} />
        </div>
        <button className={styles.helpBtn}>
          <HelpCircle size={14} />
          Centro de ayuda
        </button>
      </div>
    </header>
  )
}
