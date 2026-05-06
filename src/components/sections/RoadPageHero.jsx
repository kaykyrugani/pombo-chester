import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

const titleLines = [
  'Por onde a Pombo Chester já tocou',
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

function RoadPageHero({ canAnimate = true }) {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const stampVariant = shouldReduceMotion
    ? { hidden: { opacity: 0, rotate: -2 }, visible: { opacity: 1, rotate: -2, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, rotate: -2, x: 24, y: 12 },
        visible: {
          opacity: 1,
          rotate: -2,
          x: 0,
          y: 0,
          transition: { delay: 0.34, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="road-page-hero"
      aria-label="Na Estrada"
      initial="hidden"
      animate={canAnimate ? 'visible' : 'hidden'}
    >
      <div className="container road-page-hero__inner">
        <motion.div className="road-page-hero__content" variants={contentGroup}>
          <motion.span className="road-page-hero__badge" variants={textVariant}>Na Estrada</motion.span>
          <h1>
            {titleLines.map((line) => (
              <motion.span className="road-page-hero__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p variants={textVariant}>
            Veja os palcos, festas e eventos onde a Pombo Chester levou música
            ao vivo, humor e energia para diferentes públicos.
          </motion.p>
          <motion.div className="road-page-hero__actions" variants={contentGroup}>
            <motion.div variants={textVariant}>
              <Button href="/agenda" variant="primary">
                Ver agenda de shows
              </Button>
            </motion.div>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
                Solicitar orçamento
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="road-page-hero__stamp" variants={stampVariant} aria-hidden="true">
          <span>Ao vivo</span>
          <strong>Na Estrada</strong>
          <span>Eventos</span>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default RoadPageHero
