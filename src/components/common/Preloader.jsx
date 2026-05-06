import { motion, useReducedMotion } from 'framer-motion'
import logo from '../../assets/logo/LogoPombo.webp'
import './Preloader.css'

const overlayVariants = {
  intro: {
    y: 0,
  },
  split: {
    y: 0,
  },
  exit: {
    y: '-100%',
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const logoVariants = {
  intro: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.75, ease: 'easeOut' },
      x: { duration: 0.75, ease: 'easeOut' },
    },
  },
  split: {
    opacity: 1,
    x: '-64%',
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    opacity: 1,
    x: '-64%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
}

const textVariants = {
  intro: {
    opacity: 0,
    x: '-28%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  split: {
    opacity: 1,
    x: '34%',
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    opacity: 1,
    x: '34%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
}

function Preloader({ phase = 'intro' }) {
  const shouldReduceMotion = useReducedMotion()
  const activePhase = shouldReduceMotion && phase !== 'exit' ? 'split' : phase

  return (
    <motion.div
      className="preloader"
      aria-hidden="true"
      initial={{ y: 0 }}
      animate={activePhase}
      variants={overlayVariants}
    >
      <div className="preloader__brand" role="presentation">
        <motion.img
          className="preloader__logo"
          src={logo}
          alt=""
          initial={{ opacity: 0, x: 0 }}
          animate={activePhase}
          variants={logoVariants}
          draggable="false"
        />

        <motion.span
          className="preloader__text"
          initial={{ opacity: 0, x: '-28%' }}
          animate={activePhase}
          variants={textVariants}
        >
          Pombo Chester
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Preloader
