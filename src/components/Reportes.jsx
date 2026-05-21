import styles from '../styles/Views.module.css'

const registros = [
  { id: '001', nombre: 'Ana Martínez',  categoria: 'Tipo A', estado: 'Completado' },
  { id: '002', nombre: 'Carlos López',  categoria: 'Tipo B', estado: 'Pendiente' },
  { id: '003', nombre: 'María Gómez',   categoria: 'Tipo A', estado: 'Completado' },
  { id: '004', nombre: 'Pedro Ruiz',    categoria: 'Tipo C', estado: 'Pendiente' },
]

export default function Reportes() {
  return (
    <div className={styles.view}>
      <h2 className={styles.viewTitle}>Reportes</h2>
      <p className={styles.viewSub}>Listado de registros recientes</p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {registros.map(({ id, nombre, categoria, estado }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{categoria}</td>
                <td>
                  <span className={`${styles.badge} ${estado === 'Completado' ? styles.badgeGreen : styles.badgeOrange}`}>
                    {estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
