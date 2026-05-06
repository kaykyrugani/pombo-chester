import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle.jsx'
import pomboLogo from '../../assets/logo/LogoPombo2.webp'

const eventTypes = [
  {
    id: 1,
    title: 'Festas particulares',
    icon: '🎉',
    description: 'Shows para aniversários, confraternizações e celebrações com clima leve.'
  },
  {
    id: 2,
    title: 'Eventos corporativos',
    icon: '💼',
    description: 'Música ao vivo para empresas que querem uma experiência descontraída.'
  },
  {
    id: 3,
    title: 'Casamentos',
    icon: '💍',
    description: 'Repertório animado para festas que pedem interação e presença.'
  },
  {
    id: 4,
    title: 'Bares e casas de show',
    icon: '🎤',
    description: 'Energia de palco para noites com público participativo.'
  },
  {
    id: 5,
    title: 'Festivais',
    icon: '🎪',
    description: 'Shows com repertório brasileiro, humor e presença para grandes públicos.'
  }
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

function BandEventTypes() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const pigeonVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, x: 16, y: 10 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay: 0.28, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="band-event-types section section-light"
      aria-label="Tipos de eventos"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container">
        <motion.div variants={itemVariant}>
          <SectionTitle
            title="Tipos de eventos que a Pombo Chester atende"
            subtitle="A Pombo Chester é uma banda versátil, preparada para diferentes tipos de evento, sempre com música ao vivo e alta energia."
          />
        </motion.div>

        <motion.div className="band-event-types__grid" variants={gridGroup}>
          {eventTypes.map((event) => (
            <motion.div key={event.id} className="band-event-types__item" variants={itemVariant}>
              <div className="band-event-types__icon-wrapper">
                <span className="band-event-types__icon" aria-hidden="true">{event.icon}</span>
              </div>
              <h3 className="band-event-types__title">{event.title}</h3>
              <p className="band-event-types__description">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.img
        src={pomboLogo}
        alt="Pombo Chester decorativo"
        className="brand-pigeon band-event-types__pigeon"
        aria-hidden="true"
        variants={pigeonVariant}
      />
    </motion.section>
  )
}

export default BandEventTypes
