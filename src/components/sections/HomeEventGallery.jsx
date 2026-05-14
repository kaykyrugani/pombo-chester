import { motion, useReducedMotion } from 'framer-motion'
import caboVerdeImage from '../../assets/images/events/caboverde.webp'
import formaturaMuzaImage from '../../assets/images/events/formatura3muza.webp'
import carnavalMonteSantoImage from '../../assets/images/events/carnavalmontesanto.webp'

const moments = [
  {
    id: 'cabo-verde',
    image: caboVerdeImage,
    title: 'Show ao vivo em evento com público presente',
    alt: 'Pombo Chester em show ao vivo com público em evento',
    modifier: 'featured',
  },
  {
    id: 'formatura-muza',
    image: formaturaMuzaImage,
    title: 'Música ao vivo para festas e formaturas',
    alt: 'Pombo Chester tocando música ao vivo em festa de formatura',
    modifier: 'top',
  },
  {
    id: 'carnaval-monte-santo',
    image: carnavalMonteSantoImage,
    title: 'Energia de festival em Minas Gerais',
    alt: 'Pombo Chester em show ao vivo de carnaval em Minas Gerais',
    modifier: 'bottom',
  },
]

const stats = [
  'Eventos em MG e todo Brasil',
  'Festas, festivais e corporativos',
  'Repertório brasileiro ao vivo',
]

const viewport = { once: true, amount: 0.32, margin: '0px 0px -10% 0px' }
const easeOut = [0.33, 1, 0.68, 1]

const riseIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
}

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
}

function EventImage({ moment }) {
  return (
    <figure className={`home-event-gallery__image home-event-gallery__image--${moment.modifier}`}>
      <img src={moment.image} alt={moment.alt} loading="lazy" decoding="async" />
      <figcaption>{moment.title}</figcaption>
    </figure>
  )
}

function HomeEventGallery() {
  const shouldReduceMotion = useReducedMotion()
  const itemVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : riseIn

  return (
    <motion.section
      className="home-event-gallery section section-dark"
      aria-labelledby="home-event-gallery-title"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="container">
        <motion.div className="home-event-gallery__header" variants={itemVariant}>
          <span className="home-event-gallery__badge">Ao vivo</span>
          <h2 id="home-event-gallery-title">Eventos que viram experiência ao vivo</h2>
        </motion.div>

        <motion.div className="home-event-gallery__layout" variants={staggerGroup}>
          <motion.div className="home-event-gallery__featured" variants={itemVariant}>
            <EventImage moment={moments[0]} />
          </motion.div>

          <motion.div className="home-event-gallery__content" variants={itemVariant}>
            <p>
              A Pombo Chester leva música ao vivo para eventos corporativos, banda para festas,
              festivais e casas de show, criando apresentações com presença de palco, interação
              com o público e repertório brasileiro. Para quem procura banda ao vivo para eventos
              ou shows em Minas Gerais, cada apresentação é pensada para transformar o encontro em
              uma experiência coletiva.
            </p>
            <div className="home-event-gallery__stats" aria-label="Destaques dos eventos da Pombo Chester">
              {stats.map((stat) => (
                <span className="home-event-gallery__stat" key={stat}>
                  {stat}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="home-event-gallery__stack" variants={staggerGroup}>
            {moments.slice(1).map((moment) => (
              <motion.div key={moment.id} variants={itemVariant}>
                <EventImage moment={moment} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeEventGallery
