import { motion, useReducedMotion } from 'framer-motion'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'

const viewport = { once: true, amount: 0.45, margin: '0px 0px -12% 0px' }
const easeOut = [0.33, 1, 0.68, 1]

const textGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.14,
      staggerChildren: 0.1,
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

function HomeValueProposition() {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const pigeonVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, x: '-42%' },
        visible: {
          opacity: 1,
          x: 0,
          transition: { delay: 0.18, duration: 1.05, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="home-value-prop section section-light"
      aria-label="Proposta de Valor"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="home-value-prop__pigeon-motion" variants={pigeonVariant} aria-hidden="true">
        <BrandPigeon className="home-value-prop__pigeon" />
      </motion.div>
      <div className="container brand-pigeon-content">
        <motion.div className="section-title" variants={textGroup}>
          <motion.h2 variants={textVariant}>O show que transforma seu evento em uma experiência inesquecível</motion.h2>
          <motion.p className="section-title__subtitle" variants={textVariant}>
            A Pombo Chester entrega muito mais do que música ao vivo. Criamos experiências completas com energia, humor e repertório brasileiro que envolve o público do começo ao fim.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeValueProposition
