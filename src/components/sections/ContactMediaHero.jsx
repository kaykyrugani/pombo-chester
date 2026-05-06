import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

const titleLines = [
  'Contrate a Pombo Chester',
  'Banda para eventos ao vivo',
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

function ContactMediaHero({ canAnimate = true }) {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section className="contact-media-hero" initial="hidden" animate={canAnimate ? 'visible' : 'hidden'}>
      <div className="container contact-media-hero__inner">
        <motion.div className="contact-media-hero__content" variants={contentGroup}>
          <motion.span className="contact-media-hero__badge" variants={textVariant}>Contato + Mídia</motion.span>
          <h1>
            {titleLines.map((line) => (
              <motion.span className="contact-media-hero__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p variants={textVariant}>
            Solicite orçamento, consulte disponibilidade e leve um show com
            música ao vivo, humor e energia para o seu evento.
          </motion.p>
          <motion.div className="contact-media-hero__actions" variants={contentGroup}>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
                Solicitar orçamento no WhatsApp
              </Button>
            </motion.div>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.instagram} variant="outline" target="_blank" rel="noreferrer">
                Ver vídeos no Instagram
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactMediaHero
