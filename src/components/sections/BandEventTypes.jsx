import SectionTitle from '../ui/SectionTitle.jsx'

const eventTypes = [
  {
    id: 1,
    title: 'Festas particulares',
    icon: '🎉'
  },
  {
    id: 2,
    title: 'Eventos corporativos',
    icon: '💼'
  },
  {
    id: 3,
    title: 'Casamentos',
    icon: '💍'
  },
  {
    id: 4,
    title: 'Bares e casas de show',
    icon: '🎤'
  },
  {
    id: 5,
    title: 'Festivais',
    icon: '🎪'
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
              <span className="band-event-types__icon" aria-hidden="true">{event.icon}</span>
              <h3 className="band-event-types__title">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BandEventTypes
