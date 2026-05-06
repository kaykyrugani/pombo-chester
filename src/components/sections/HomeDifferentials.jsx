import { motion, useReducedMotion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle.jsx'

const differentials = [
  {
    id: 1,
    label: 'Palco',
    title: 'Energia ao vivo que engaja o público',
    description: 'Performance que envolve o público do começo ao fim com presença e carisma'
  },
  {
    id: 2,
    label: 'Repertório',
    title: 'Repertório adaptável',
    description: 'Repertório brasileiro customizável para diferentes tipos de evento'
  },
  {
    id: 3,
    label: 'Estrada',
    title: 'Experiência comprovada',
    description: 'Shows em eventos corporativos, festas, casas de show e festivais'
  },
  {
    id: 4,
    label: 'Conexão',
    title: 'Interação com o público',
    description: 'Humor irreverente e conexão genuína que faz diferença no evento'
  },
  {
    id: 5,
    label: 'Produção',
    title: 'Estrutura profissional',
    description: 'Som de qualidade e performance pensada para agências e produtoras'
  },
  {
    id: 6,
    label: 'Agenda',
    title: 'Flexibilidade de atendimento',
    description: 'Atuamos em Monte Santo de Minas e em todo o Brasil'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
}

function HomeDifferentials() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section
      className="home-differentials section section-dark"
      aria-label="Diferenciais da Pombo Chester"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container">
        <motion.div variants={itemVariant}>
          <SectionTitle
            title="Por que contratar a Pombo Chester para o seu evento?"
            subtitle=""
          />
        </motion.div>
        
        <motion.div className="home-differentials__grid" variants={gridGroup}>
          {differentials.map((diff) => (
            <motion.div key={diff.id} className="home-differentials__card dark-feature-card" variants={itemVariant}>
              <span className="home-differentials__card-label dark-feature-card__meta">
                <span className="dark-feature-card__dot" aria-hidden="true" />
                {diff.label}
              </span>
              <h3 className="home-differentials__card-title dark-feature-card__title">{diff.title}</h3>
              <p className="home-differentials__card-desc dark-feature-card__text">{diff.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeDifferentials
