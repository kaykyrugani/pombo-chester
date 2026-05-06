import { motion, useReducedMotion } from 'framer-motion'

const titleLines = [
  'Uma banda para eventos',
  'feita para transformar qualquer festa',
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

function BandIntro() {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const statementVariant = shouldReduceMotion
    ? { hidden: { opacity: 0, rotate: -1 }, visible: { opacity: 1, rotate: -1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, rotate: -1, x: 24 },
        visible: {
          opacity: 1,
          rotate: -1,
          x: 0,
          transition: { delay: 0.28, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="band-intro section section-light"
      aria-label="História da banda"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container band-intro__inner">
        <motion.div className="band-intro__copy" variants={contentGroup}>
          <motion.span className="eyebrow" variants={textVariant}>História</motion.span>
          <h2>
            {titleLines.map((line) => (
              <motion.span className="band-intro__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h2>
          <motion.p className="text-lead" variants={textVariant}>
            A Pombo Chester nasceu com o propósito de levar ao palco muito mais do que música ao vivo: entregar um show completo para eventos, com energia, humor e presença marcante.
          </motion.p>
          <motion.p variants={textVariant}>
            Com influências da música brasileira e referências irreverentes da cultura pop, a banda cria apresentações envolventes para festas, eventos corporativos e casas de show.
          </motion.p>
          <motion.p variants={textVariant}>
            Cada apresentação é pensada para engajar o público e transformar o evento em uma experiência memorável.
          </motion.p>
        </motion.div>

        <motion.aside className="band-intro__statement" variants={statementVariant}>
          <span>Não é só tocar música. É transformar seu evento em uma experiência inesquecível.</span>
        </motion.aside>
      </div>
    </motion.section>
  )
}

export default BandIntro
