import { FileText, Plus, BarChart3 } from 'lucide-react'
import styles from './Views.module.css'

export default function Inicio({ onNavegar }) {
  const stats = [
    { valor: '128', label: 'Registros totales' },
    { valor: '14',  label: 'Pendientes' },
    { valor: '97%', label: 'Completados' },
    { valor: '5',   label: 'Alertas' },
  ]

  const acciones = [
    { Icon: FileText, color: '#e57373', label: 'Ver servicios',  desc: 'Explora el catálogo',  vista: 'servicios' },
    { Icon: Plus,     color: '#7B68EE', label: 'Nuevo registro', desc: 'Agregar un elemento', vista: 'nuevo-registro' },
    { Icon: BarChart3,color: '#42a5f5', label: 'Ver reportes',   desc: 'Tablas y estadísticas', vista: 'reportes' },
  ]

  return (
    <div className={styles.view}>
      <h2 className={styles.viewTitle}>Panel de inicio</h2>
      <p className={styles.viewSub}>Resumen general de tu cuenta</p>

      <div className={styles.statsGrid}>
        {stats.map(({ valor, label }) => (
          <div key={label} className={styles.statCard}>
            <div className={styles.statVal}>{valor}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <div className={styles.accionesGrid}>
        {acciones.map(({ Icon, color, label, desc, vista }) => (
          <button key={label} className={styles.accionCard} onClick={() => onNavegar(vista)}>
            <Icon size={44} color={color} strokeWidth={1.5} />
            <h3>{label}</h3>
            <p>{desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
