import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle.jsx'

const highlights = [
  {
    label: 'Formatos',
    title: 'Festas e eventos particulares',
    text: 'Shows personalizados para diferentes públicos, com interação e repertório adaptado.',
  },
  {
    label: 'Palco',
    title: 'Palco e casas de show',
    text: 'Apresentações com energia contínua, presença de palco e repertório envolvente.',
  },
  {
    label: 'Ao vivo',
    title: 'Interação com o público',
    text: 'Humor, músicas conhecidas e dinâmica que aproxima banda e plateia.',
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

function RoadHighlights() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section
      className="road-highlights section section-dark"
      aria-label="Destaques da estrada"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container">
        <motion.div variants={itemVariant}>
          <SectionTitle
            eyebrow="Ao vivo"
            title="Como funciona um show da Pombo Chester ao vivo"
            subtitle="Entenda na prática o que faz a Pombo Chester se destacar como banda para eventos."
          />
        </motion.div>

        <div className="road-highlights__panel dark-feature-panel">
          <motion.div className="road-highlights__grid" variants={gridGroup}>
            {highlights.map((highlight) => (
              <motion.article className="dark-feature-card road-highlight-card" key={highlight.title} variants={itemVariant}>
                <div className="dark-feature-card__meta">
                  <span className="dark-feature-card__dot" aria-hidden="true" />
                  <span className="dark-feature-card__label">{highlight.label}</span>
                </div>
                <h3 className="dark-feature-card__title">{highlight.title}</h3>
                <p className="dark-feature-card__text">{highlight.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default RoadHighlights
