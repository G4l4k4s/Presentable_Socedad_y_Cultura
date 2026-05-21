import { Shield, ArrowRight, Newspaper, Lock, UserX, Search, Smartphone, FileText, Play, Download, ExternalLink, MessageCircle, ChevronRight } from 'lucide-react'
import styles from './CulturaDigital.module.css'

const consejos = [
  { Icon: Lock,       titulo: 'Usa contraseñas seguras',           desc: 'Combina letras, números y símbolos.' },
  { Icon: UserX,      titulo: 'No compartas información personal',  desc: 'Evita enviar datos sensibles por internet.' },
  { Icon: Search,     titulo: 'Verifica la información',            desc: 'Asegúrate de que las fuentes sean confiables.' },
  { Icon: Smartphone, titulo: 'Activa la verificación en dos pasos', desc: 'Agrega una capa extra de seguridad.' },
]

const recursos = [
  { tipo: 'pdf',   Icon: FileText, titulo: 'Guía: Seguridad en redes sociales', meta: 'PDF · 1.2 MB',      ActionIcon: Download },
  { tipo: 'video', Icon: Play,     titulo: 'Video: ¿Qué es la desinformación?',  meta: 'YouTube · 4:35 min', ActionIcon: ExternalLink },
  { tipo: 'pdf',   Icon: FileText, titulo: 'Cartilla: Cultura digital en jóvenes', meta: 'PDF · 2.4 MB',   ActionIcon: Download },
]

const noticias = [
  {
    tag: 'Noticia', tagClass: styles.tagRed,
    fecha: '12 may. 2024',
    titulo: '¿Cómo identificar noticias falsas?',
    desc: 'Aprende a reconocer información falsa y verifica antes de compartir.',
    thumb: <FakeNewsThumb />,
  },
  {
    tag: 'Ciberseguridad', tagClass: styles.tagDark,
    fecha: '05 may. 2024',
    titulo: 'Phishing: la amenaza digital',
    desc: 'Conoce cómo funcionan los ataques de phishing y cómo protegerte.',
    thumb: <PhishingThumb />,
  },
  {
    tag: 'Cultura Digital', tagClass: styles.tagGreen,
    fecha: '28 abr. 2024',
    titulo: 'Ciudadanía digital responsable',
    desc: 'Reflexionemos sobre nuestro impacto en internet y las redes sociales.',
    thumb: <CiudadaniaThumb />,
  },
]

function FakeNewsThumb() {
  return (
    <div className={`${styles.thumb} ${styles.thumbDark}`}>
      <div className={styles.fakeBox}>
        <span>FAKE<br />NEWS</span>
      </div>
      <div className={styles.exclaim}>!</div>
    </div>
  )
}

function PhishingThumb() {
  return (
    <div className={`${styles.thumb} ${styles.thumbDarker}`}>
      <div className={styles.phishWrap}>
        <div className={styles.phishCircle}>
          <UserX size={22} color="#777" />
        </div>
        <div className={styles.warnDot}>!</div>
      </div>
    </div>
  )
}

function CiudadaniaThumb() {
  return (
    <div className={`${styles.thumb} ${styles.thumbGreen}`}>
      {[0, 1, 2].map(i => (
        <div key={i} className={styles.person}>
          <div className={styles.pHead} />
          <div className={styles.pBody} />
        </div>
      ))}
    </div>
  )
}

export default function CulturaDigital() {
  return (
    <div className={styles.layout}>
      {/* ── Centro ── */}
      <div className={styles.center}>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.ring1} />
          <div className={styles.ring2} />
          <div className={styles.heroContent}>
            <p className={styles.heroLabel}>Sociedad y Cultura Digital</p>
            <h2>Navega con conciencia,<br />decide con información.</h2>
            <p className={styles.heroDesc}>
              Infórmate, protégete y sé parte de una comunidad digital responsable
            </p>
            <button className={styles.heroBtn}>
              Ver más <ArrowRight size={14} />
            </button>
          </div>
          <div className={styles.heroIllus}>
            <div className={styles.laptop}>
              <Shield size={32} color="rgba(255,255,255,0.7)" />
              <div className={styles.phone}>
                <Smartphone size={14} color="rgba(255,255,255,0.5)" />
              </div>
            </div>
          </div>
        </div>

        {/* Noticias */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <Newspaper size={15} color="#2d6a4f" />
            Noticias y actualidad
          </div>
          <button className={styles.seeAll}>Ver todas</button>
        </div>

        <div className={styles.newsGrid}>
          {noticias.map(({ tag, tagClass, fecha, titulo, desc, thumb }) => (
            <div key={titulo} className={styles.newsCard}>
              {thumb}
              <div className={styles.newsBody}>
                <div className={styles.newsMeta}>
                  <span className={`${styles.tag} ${tagClass}`}>{tag}</span>
                  <span className={styles.newsDate}>{fecha}</span>
                </div>
                <h4>{titulo}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alerta */}
        <div className={styles.alertBar}>
          <div className={styles.alertLeft}>
            <div className={styles.alertIcon}>
              <Shield size={14} color="#fff" />
            </div>
            <div>
              <p className={styles.alertTitle}>Recuerda: Tu seguridad es responsabilidad de todos.</p>
              <p className={styles.alertDesc}>Infórmate, cuestiona y actúa. Juntos construimos una cultura digital sana y segura.</p>
            </div>
          </div>
          <button className={styles.alertBtn}>
            Más información <ExternalLink size={11} />
          </button>
        </div>
      </div>

      {/* ── Panel derecho ── */}
      <aside className={styles.panel}>
        {/* Consejos */}
        <div className={styles.panelBlock}>
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>Consejos de ciberseguridad</span>
            <button className={styles.panelSeeAll}>Ver todos</button>
          </div>
          {consejos.map(({ Icon, titulo, desc }) => (
            <div key={titulo} className={styles.tipItem}>
              <div className={styles.tipIcon}><Icon size={14} color="#2d6a4f" /></div>
              <div className={styles.tipText}>
                <h5>{titulo}</h5>
                <p>{desc}</p>
              </div>
              <ChevronRight size={13} color="#ccc" className={styles.tipArrow} />
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* Recursos */}
        <div className={styles.panelBlock}>
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>Recursos para ti</span>
          </div>
          {recursos.map(({ tipo, Icon, titulo, meta, ActionIcon }) => (
            <button key={titulo} className={`${styles.resource} ${tipo === 'pdf' ? styles.resPdf : styles.resVideo}`}>
              <div className={styles.resIcon}>
                <Icon size={14} color={tipo === 'pdf' ? '#e53935' : '#1565c0'} />
              </div>
              <div className={styles.resText}>
                <h5>{titulo}</h5>
                <p>{meta}</p>
              </div>
              <ActionIcon size={13} color="#bbb" />
            </button>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* Contacto */}
        <div className={styles.contactBox}>
          <h4>¿Tienes dudas o quieres reportar algo?</h4>
          <p>Escríbenos de forma segura. Estamos aquí para ayudarte.</p>
          <button className={styles.contactBtn}>
            <MessageCircle size={13} />
            Ir a comunicaciones
          </button>
        </div>
      </aside>
    </div>
  )
}
