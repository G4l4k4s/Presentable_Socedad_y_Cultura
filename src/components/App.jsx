import { useState } from 'react'
import { LogIn, Mail, Lock } from 'lucide-react'
import Dashboard from './Dashboard.jsx'
import styles from './App.module.css'

export default function App() {
  const [autenticado, setAutenticado] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setAutenticado(true)
  }

  if (!autenticado) {
    return (
      <div className={styles.loginBg}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <div className={styles.loginIcon}>
              <LogIn size={28} color="#fff" />
            </div>
            <h1>UdeA</h1>
            <p>Programa de Niños y Jóvenes</p>
          </div>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.field}>
              <label>Correo electrónico</label>
              <div className={styles.inputWrap}>
                <Mail size={16} className={styles.inputIcon} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Contraseña</label>
              <div className={styles.inputWrap}>
                <Lock size={16} className={styles.inputIcon} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className={styles.loginExtras}>
              <label className={styles.remember}>
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className={styles.loginBtn}>
              Iniciar sesión
            </button>
          </form>

          <p className={styles.loginFooter}>
            ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
          </p>
        </div>

        <p className={styles.copy}>© 2024 UdeA – Medellín, Colombia</p>
      </div>
    )
  }

  return <Dashboard onLogout={() => setAutenticado(false)} />
}
