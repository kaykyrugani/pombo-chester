import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle.jsx'
import pomboLogo from '../../assets/logo/LogoPombo2.webp'

const reasons = [
  {
    id: 1,
    title: 'Shows ao vivo frequentes',
    description: 'Apresentações constantes que mostram atividade real da banda'
  },
  {
    id: 2,
    title: 'Experiência com diferentes públicos',
    description: 'Festas, eventos corporativos e casas de show com propostas variadas'
  },
  {
    id: 3,
    title: 'Atuação em eventos e palcos variados',
    description: 'Vivência comprovada em diferentes formatos de apresentação'
  },
  {
    id: 4,
    title: 'Banda ativa e em crescimento',
    description: 'Agenda atualizada demonstra engajamento contínuo'
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

function AgendaTrust() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn
  const pigeonVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, x: 14, y: 10 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay: 0.28, duration: 0.72, ease: easeOut },
        },
      }

  return (
    <motion.section
      className="agenda-trust section section-light"
      aria-label="Por que acompanhar a agenda"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container agenda-trust__inner">
        <motion.div variants={itemVariant}>
          <SectionTitle
            title="Por que acompanhar a agenda da Pombo Chester?"
            subtitle="A agenda mostra não só onde a banda vai tocar, mas também a experiência real que levamos para cada evento."
          />
        </motion.div>

        <motion.div className="agenda-trust__grid" variants={gridGroup}>
          {reasons.map((reason) => (
            <motion.article key={reason.id} className="agenda-trust__card" variants={itemVariant}>
              <h3 className="agenda-trust__title">{reason.title}</h3>
              <p className="agenda-trust__description">{reason.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <motion.img
        className="agenda-trust__pigeon"
        src={pomboLogo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        variants={pigeonVariant}
      />
    </motion.section>
  )
}

export default AgendaTrust
