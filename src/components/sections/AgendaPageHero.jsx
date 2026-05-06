import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

const titleLines = [
  'Agenda de shows da Pombo Chester',
  'Banda ao vivo para eventos',
]

const easeOut = [0.33, 1, 0.68, 1]

const riseIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
}

const contentGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
}

function AgendaPageHero({ canAnimate = true }) {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const markerVariant = shouldReduceMotion
    ? { hidden: { opacity: 0, rotate: 2 }, visible: { opacity: 1, rotate: 2, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, rotate: 2, x: 18, y: 18 },
        visible: {
          opacity: 1,
          rotate: 2,
          x: 0,
          y: 0,
          transition: { delay: 0.34, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="agenda-page-hero"
      aria-label="Agenda de shows"
      initial="hidden"
      animate={canAnimate ? 'visible' : 'hidden'}
    >
      <div className="container agenda-page-hero__inner">
        <motion.div className="agenda-page-hero__content" variants={contentGroup}>
          <motion.span className="agenda-page-hero__badge" variants={textVariant}>Agenda de shows</motion.span>
          <h1>
            {titleLines.map((line) => (
              <motion.span className="agenda-page-hero__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p variants={textVariant}>
            Confira as próximas datas e veja onde a Pombo Chester, banda para eventos com música ao vivo, vai se apresentar.
          </motion.p>
          <motion.div className="agenda-page-hero__actions" variants={contentGroup}>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
                Ver disponibilidade para eventos
              </Button>
            </motion.div>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
                Solicitar orçamento
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="agenda-page-hero__marker" variants={markerVariant} aria-hidden="true">
          <span>Agenda</span>
          <strong>Ao vivo</strong>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AgendaPageHero
