import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import membro1 from '../../assets/images/band/membro1.webp'
import membro2 from '../../assets/images/band/membro2.webp'
import membro3 from '../../assets/images/band/membro3.webp'
import membro4 from '../../assets/images/band/membro4.webp'
import officialLinks from '../../data/officialLinks.js'

const members = [
  { name: 'Integrante da Pombo Chester', image: membro1 },
  { name: 'Integrante da Pombo Chester', image: membro2 },
  { name: 'Integrante da Pombo Chester', image: membro3 },
  { name: 'Integrante da Pombo Chester', image: membro4 },
]

const titleLines = [
  'Banda para eventos ao vivo',
  'que transforma qualquer festa',
  'em um show inesquecível',
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

const heroGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
}

const galleryGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.58,
      staggerChildren: 0.08,
    },
  },
}

function getMemberVariants(index, shouldReduceMotion) {
  const rotation = index % 2 === 0 ? -1 : 1
  const offsetX = index % 2 === 0 ? -14 : 14

  return {
    hidden: {
      opacity: 0,
      rotate: rotation,
      x: shouldReduceMotion ? 0 : offsetX,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      rotate: rotation,
      x: 0,
      y: 0,
      transition: { duration: 0.72, ease: easeOut },
    },
  }
}

function HomeHero({ canAnimate = true }) {
  const shouldReduceMotion = useReducedMotion()
  const textVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section
      className="home-hero"
      aria-labelledby="home-hero-title"
      initial="hidden"
      animate={canAnimate ? 'visible' : 'hidden'}
    >
      <div className="container">
        <motion.div className="home-hero__content" variants={heroGroup}>
          <motion.span className="home-hero__badge" variants={textVariant}>
            Banda para eventos com música ao vivo
          </motion.span>
          <h1 className="home-hero__title" id="home-hero-title">
            {titleLines.map((line) => (
              <motion.span className="home-hero__title-line" variants={textVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p className="home-hero__subtitle" variants={textVariant}>
            A Pombo Chester é uma banda para eventos com música ao vivo, humor e energia que anima festas, eventos corporativos e casas de show em Minas Gerais e todo o Brasil.
          </motion.p>
          <motion.ul className="home-hero__benefits" variants={heroGroup}>
            <motion.li variants={textVariant}>Shows para eventos corporativos, festas e festivais</motion.li>
            <motion.li variants={textVariant}>Repertório brasileiro com interação com o público</motion.li>
            <motion.li variants={textVariant}>Estrutura profissional e presença de palco</motion.li>
          </motion.ul>
          <motion.div className="home-hero__actions" variants={heroGroup}>
            <motion.div variants={textVariant}>
              <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
                Solicitar orçamento no WhatsApp
              </Button>
            </motion.div>
            <motion.div variants={textVariant}>
              <Button href="/agenda" variant="outline">
                Ver disponibilidade da banda
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="home-hero__gallery" aria-label="Integrantes da banda Pombo Chester" variants={galleryGroup}>
          {members.map((member, index) => (
            <motion.figure
              className="home-hero__member"
              key={`${member.name}-${index}`}
              variants={getMemberVariants(index, shouldReduceMotion)}
            >
              <img src={member.image} alt={`${member.name} ${index + 1}`} decoding="async" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeHero
