import { Search, Folder, User, Settings } from 'lucide-react'
import styles from './Views.module.css'

export default function Servicios() {
  const items = [
    { Icon: Search,   color: '#4169A8', label: 'Consultas',     desc: 'Buscar información' },
    { Icon: Folder,   color: '#F4B400', label: 'Archivos',      desc: 'Gestionar documentos' },
    { Icon: User,     color: '#7B68EE', label: 'Usuarios',      desc: 'Administrar personas' },
    { Icon: Settings, color: '#999',    label: 'Configuración', desc: 'Ajustes del sistema' },
  ]

  return (
    <div className={styles.view}>
      <h2 className={styles.viewTitle}>Servicios disponibles</h2>
      <p className={styles.viewSub}>Selecciona un servicio para continuar</p>
      <div className={styles.accionesGrid4}>
        {items.map(({ Icon, color, label, desc }) => (
          <button key={label} className={styles.accionCard}>
            <Icon size={44} color={color} strokeWidth={1.5} />
            <h3>{label}</h3>
            <p>{desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
