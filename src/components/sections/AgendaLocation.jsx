import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

const titleLines = [
  'Banda para eventos em Minas Gerais',
  'e todo o Brasil',
]

const viewport = { once: true, amount: 0.42, margin: '0px 0px -12% 0px' }
const easeOut = [0.33, 1, 0.68, 1]

const contentGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.14,
      staggerChildren: 0.08,
    },
  },
}

const riseIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: easeOut },
  },
}

function AgendaLocation() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section
      className="agenda-location section"
      aria-label="Localização e cobertura"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="container agenda-location__content" variants={contentGroup}>
        <motion.span className="agenda-location__badge" variants={itemVariant}>Base da banda</motion.span>
        <h2 className="agenda-location__title">
          {titleLines.map((line) => (
            <motion.span className="agenda-location__title-line" variants={itemVariant} key={line}>
              {line}
            </motion.span>
          ))}
        </h2>
        <motion.p className="agenda-location__text" variants={itemVariant}>
          A Pombo Chester é uma banda para eventos com base em <strong>Monte Santo de Minas - MG</strong> e atende festas, eventos corporativos e shows em <strong>todo o Brasil</strong>.
        </motion.p>
        <motion.p className="agenda-location__secondary" variants={itemVariant}>
          Verifique a disponibilidade para sua data e localização entrando em contato com a banda.
        </motion.p>
        <motion.div variants={itemVariant}>
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Ver disponibilidade
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default AgendaLocation
