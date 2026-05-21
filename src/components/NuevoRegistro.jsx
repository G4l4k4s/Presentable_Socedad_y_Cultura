import styles from './Views.module.css'

export default function NuevoRegistro() {
  return (
    <div className={styles.view}>
      <h2 className={styles.viewTitle}>Nuevo registro</h2>
      <p className={styles.viewSub}>Completa los datos del formulario</p>

      <form className={styles.form} onSubmit={e => { e.preventDefault(); alert('¡Registro guardado!') }}>
        <div className={styles.field}>
          <label>Nombre completo</label>
          <input type="text" placeholder="Ej: Juan García" />
        </div>
        <div className={styles.field}>
          <label>Correo electrónico</label>
          <input type="email" placeholder="correo@ejemplo.com" />
        </div>
        <div className={styles.field}>
          <label>Categoría</label>
          <select>
            <option value="">Selecciona una opción</option>
            <option>Categoría 1</option>
            <option>Categoría 2</option>
            <option>Categoría 3</option>
          </select>
        </div>
        <button type="submit" className={styles.submitBtn}>Guardar registro</button>
      </form>
    </div>
  )
}
