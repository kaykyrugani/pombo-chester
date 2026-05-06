import { motion, useReducedMotion } from 'framer-motion'
import socialLinks from '../../data/socialLinks.js'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'

const titleLines = [
  'Escolha o melhor canal',
  'para falar com a Pombo Chester',
]

const viewport = { once: true, amount: 0.34, margin: '0px 0px -12% 0px' }
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

function isExternalUrl(url) {
  return url.startsWith('http')
}

function SocialContactLinks() {
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
      className="social-contact section section-light"
      aria-labelledby="social-contact-title"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container brand-pigeon-content">
        <motion.div className="social-contact__header" variants={contentGroup}>
          <motion.span className="eyebrow" variants={itemVariant}>Canais oficiais</motion.span>
          <h2 id="social-contact-title">
            {titleLines.map((line) => (
              <motion.span className="social-contact__title-line" variants={itemVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h2>
          <motion.p variants={itemVariant}>
            Para orçamento banda, disponibilidade e contratação, o WhatsApp é o
            caminho mais rápido. Os outros canais ajudam você a conhecer melhor a
            banda ao vivo antes de decidir.
          </motion.p>
        </motion.div>

        <motion.div className="social-contact__grid" variants={gridGroup}>
          {socialLinks.map((link) => {
            const isExternal = isExternalUrl(link.url)

            return (
              <motion.article
                className={`social-contact-card ${link.featured ? 'social-contact-card--featured' : ''}`.trim()}
                key={link.id}
                variants={itemVariant}
              >
                <div className="social-contact-card__content">
                  <span>{link.label}</span>
                  <h3>{link.handle}</h3>
                  <p>{link.description}</p>
                </div>
                <a
                  className="social-contact-card__link"
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  aria-label={`Acessar ${link.label}`}
                >
                  {link.cta}
                </a>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
      <motion.div className="social-contact__pigeon-motion" variants={pigeonVariant} aria-hidden="true">
        <BrandPigeon />
      </motion.div>
    </motion.section>
  )
}

export default SocialContactLinks
