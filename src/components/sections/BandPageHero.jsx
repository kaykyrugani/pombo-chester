import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

const titleLines = [
  'Banda para eventos com música ao vivo,',
  'humor e presença de palco',
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

function BandPageHero({ canAnimate = true }) {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const posterVariant = shouldReduceMotion
    ? { hidden: { opacity: 0, rotate: 2 }, visible: { opacity: 1, rotate: 2, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, rotate: 2, x: 24 },
        visible: {
          opacity: 1,
          rotate: 2,
          x: 0,
          transition: { delay: 0.34, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="band-page-hero"
      aria-label="Banda para eventos"
      initial="hidden"
      animate={canAnimate ? 'visible' : 'hidden'}
    >
      <div className="container band-page-hero__inner">
        <motion.div className="band-page-hero__content" variants={contentGroup}>
          <motion.span className="band-page-hero__badge" variants={textVariant}>Banda para eventos</motion.span>
          <h1>
            {titleLines.map((line) => (
              <motion.span className="band-page-hero__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p variants={textVariant}>
            A Pombo Chester é uma banda para eventos que leva energia, brasilidade e interação ao vivo para festas, eventos corporativos e casas de show em Minas Gerais e todo o Brasil.
          </motion.p>
          <motion.div className="band-page-hero__actions" variants={contentGroup}>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
                Solicitar orçamento no WhatsApp
              </Button>
            </motion.div>
            <motion.div variants={textVariant}>
              <Button href="/agenda" variant="outline">
                Ver agenda da banda
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="band-page-hero__poster" variants={posterVariant} aria-hidden="true">
          <span>Pombo Chester</span>
          <strong>Ao vivo</strong>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BandPageHero
