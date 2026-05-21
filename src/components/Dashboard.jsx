import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'
import CulturaDigital from './CulturaDigital.jsx'
import Inicio from './Inicio.jsx'
import Servicios from './Servicios.jsx'
import NuevoRegistro from './NuevoRegistro.jsx'
import Reportes from './Reportes.jsx'
import styles from './Dashboard.module.css'

export default function Dashboard({ onLogout }) {
  const [vistaActual, setVistaActual] = useState('cultura-digital')

  const renderVista = () => {
    switch (vistaActual) {
      case 'inicio':        return <Inicio onNavegar={setVistaActual} />
      case 'servicios':     return <Servicios />
      case 'nuevo-registro': return <NuevoRegistro />
      case 'reportes':      return <Reportes />
      case 'cultura-digital': return <CulturaDigital />
      default:              return <CulturaDigital />
    }
  }

  return (
    <div className={styles.layout}>
      <Sidebar vistaActual={vistaActual} onNavegar={setVistaActual} onLogout={onLogout} />
      <div className={styles.right}>
        <Topbar vistaActual={vistaActual} />
        <main className={styles.main}>
          {renderVista()}
        </main>
        <footer className={styles.footer}>
          <span>© 2024 UdeA – Programa de Niños y Jóvenes</span>
          <span>Medellín, Colombia</span>
          <a href="#">Soporte</a>
        </footer>
      </div>
    </div>
  )
}
