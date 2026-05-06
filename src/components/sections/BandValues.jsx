import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle.jsx'

const values = [
  {
    label: 'PRESENÇA',
    title: 'Humor com presença',
    text: 'A irreverência entra no palco com timing, repertório e interação com o público.',
  },
  {
    label: 'BRASILIDADE',
    title: 'Repertório brasileiro',
    text: 'Clássicos populares e referências nacionais que aproximam a banda da plateia.',
  },
  {
    label: 'AO VIVO',
    title: 'Energia de show',
    text: 'Shows pensados para levantar festas, eventos, bares e casas de show.',
  },
]

const viewport = { once: true, amount: 0.34, margin: '0px 0px -12% 0px' }
const easeOut = [0.33, 1, 0.68, 1]

const gridGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
}

const riseIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
}

function BandValues() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section
      className="band-values section section-dark"
      aria-label="Proposta artística"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container">
        <motion.div variants={itemVariant}>
          <SectionTitle
            eyebrow="Proposta"
            title="O que faz da Pombo Chester a banda ideal para o seu evento"
            subtitle="Três pilares que garantem um show completo para eventos ao vivo."
          />
        </motion.div>

        <div className="dark-feature-panel">
          <motion.div className="band-values__grid" variants={gridGroup}>
            {values.map((value) => (
              <motion.article className="dark-feature-card band-value-card" key={value.title} variants={itemVariant}>
                <div className="dark-feature-card__meta">
                  <span className="dark-feature-card__dot" aria-hidden="true" />
                  <span className="dark-feature-card__label">{value.label}</span>
                </div>
                <h3 className="dark-feature-card__title">{value.title}</h3>
                <p className="dark-feature-card__text">{value.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default BandValues
