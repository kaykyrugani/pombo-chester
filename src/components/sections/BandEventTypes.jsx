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

function BandEventTypes() {
  return (
    <section className="band-event-types section section-light" aria-label="Tipos de eventos">
      <div className="container">
        <SectionTitle
          title="Tipos de eventos que a Pombo Chester atende"
          subtitle="A Pombo Chester é uma banda versátil, preparada para diferentes tipos de evento, sempre com música ao vivo e alta energia."
        />

        <div className="band-event-types__grid">
          {eventTypes.map((event) => (
            <div key={event.id} className="band-event-types__item">
              <div className="band-event-types__icon-wrapper">
                <span className="band-event-types__icon" aria-hidden="true">{event.icon}</span>
              </div>
              <h3 className="band-event-types__title">{event.title}</h3>
              <p className="band-event-types__description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={pomboLogo}
        alt="Pombo Chester decorativo"
        className="brand-pigeon band-event-types__pigeon"
        aria-hidden="true"
      />
    </section>
  )
}

export default BandEventTypes
