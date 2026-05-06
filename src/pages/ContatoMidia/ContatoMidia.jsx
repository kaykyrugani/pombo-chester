import { motion, useReducedMotion } from 'framer-motion'
import ContactInstagramHighlights from '../../components/sections/ContactInstagramHighlights.jsx'
import ContactMediaCTA from '../../components/sections/ContactMediaCTA.jsx'
import ContactMediaHero from '../../components/sections/ContactMediaHero.jsx'
import SocialContactLinks from '../../components/sections/SocialContactLinks.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'

const bookingTitleLines = [
  'Fale direto com a banda',
  'e agilize seu orçamento',
]

const bookingViewport = { once: true, amount: 0.4, margin: '0px 0px -12% 0px' }
const easeOut = [0.33, 1, 0.68, 1]

const bookingGroup = {
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

function ContatoMidia({ isPreloaderDone = true }) {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  usePageMeta(
    'Contato Pombo Chester | Contratar banda para eventos ao vivo',
    'Entre em contato com a Pombo Chester e solicite orçamento para shows ao vivo. Banda para eventos em Minas Gerais e todo o Brasil.',
    'contratar banda, banda para eventos, banda ao vivo, orçamento banda, banda para festas, banda para eventos em Minas Gerais'
  )

  return (
    <>
      <ContactMediaHero canAnimate={isPreloaderDone} />
      <motion.section
        className="contact-booking-prompt section section-light"
        aria-labelledby="contact-booking-prompt-title"
        initial="hidden"
        whileInView="visible"
        viewport={bookingViewport}
      >
        <motion.div className="container contact-booking-prompt__inner" variants={bookingGroup}>
          <motion.span className="eyebrow" variants={itemVariant}>Atendimento direto</motion.span>
          <h2 id="contact-booking-prompt-title">
            {bookingTitleLines.map((line) => (
              <motion.span className="contact-booking-prompt__title-line" variants={itemVariant} key={line}>
                {line}
              </motion.span>
            ))}
          </h2>
          <motion.p variants={itemVariant}>
            Se você está buscando contratar uma banda para eventos, o contato
            direto agiliza o processo e garante informações rápidas sobre datas,
            formatos e valores.
          </motion.p>
          <motion.ul className="contact-booking-prompt__list" aria-label="Diferenciais do atendimento" variants={bookingGroup}>
            <motion.li variants={itemVariant}>Resposta rápida</motion.li>
            <motion.li variants={itemVariant}>Datas limitadas</motion.li>
            <motion.li variants={itemVariant}>Agenda concorrida</motion.li>
            <motion.li variants={itemVariant}>Atendimento direto com a banda</motion.li>
          </motion.ul>
        </motion.div>
      </motion.section>
      <SocialContactLinks />
      <ContactInstagramHighlights />
      <ContactMediaCTA />
    </>
  )
}

export default ContatoMidia
