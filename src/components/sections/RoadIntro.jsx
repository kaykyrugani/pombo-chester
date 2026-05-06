import { motion, useReducedMotion } from 'framer-motion'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

const titleLines = [
  'Experiência real em eventos',
  'e shows ao vivo',
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

function RoadIntro() {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const noteVariant = shouldReduceMotion
    ? { hidden: { opacity: 0, rotate: 1 }, visible: { opacity: 1, rotate: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, rotate: 1, x: 24 },
        visible: {
          opacity: 1,
          rotate: 1,
          x: 0,
          transition: { delay: 0.28, duration: 0.72, ease: easeOut },
        },
      }
  const pigeonVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, x: 16, y: 10 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay: 0.32, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="road-intro section section-light"
      aria-label="Trajetória ao vivo"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container road-intro__inner brand-pigeon-content">
        <motion.div className="road-intro__copy" variants={contentGroup}>
          <motion.span className="eyebrow" variants={textVariant}>Trajetória</motion.span>
          <h2>
            {titleLines.map((line) => (
              <motion.span className="road-intro__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h2>
          <motion.p className="text-lead" variants={textVariant}>
            A Pombo Chester é uma banda para eventos que atua em diferentes
            tipos de palco, levando música ao vivo com energia, humor e
            repertório brasileiro.
          </motion.p>
          <motion.p variants={textVariant}>
            De festas particulares a casas de show, cada apresentação fortalece
            a experiência da banda e mostra sua capacidade de adaptação a
            diferentes públicos.
          </motion.p>
          <motion.p variants={textVariant}>
            A proposta é sempre a mesma: criar um show envolvente, participativo
            e memorável.
          </motion.p>
        </motion.div>

        <motion.aside className="road-intro__note" variants={noteVariant}>
          <h3>Banda ativa com experiência em eventos reais</h3>
          <p>
            A presença da Pombo Chester em diferentes eventos mostra
            consistência, profissionalismo e experiência ao vivo, fatores
            essenciais para quem busca contratar uma banda confiável.
          </p>
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento
          </Button>
        </motion.aside>
      </div>
      <motion.div className="road-intro__pigeon-motion" variants={pigeonVariant} aria-hidden="true">
        <BrandPigeon />
      </motion.div>
    </motion.section>
  )
}

export default RoadIntro
