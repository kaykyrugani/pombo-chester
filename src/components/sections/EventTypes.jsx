import SectionTitle from '../ui/SectionTitle.jsx'

const eventTypes = [
  {
    title: 'Festas particulares',
    text: 'Aniversários, confraternizações e celebrações com repertório leve e participação do público.',
  },
  {
    title: 'Casas de show',
    text: 'Formato ideal para palcos que pedem presença, energia e repertório brasileiro conhecido.',
  },
  {
    title: 'Eventos corporativos',
    text: 'Shows descontraídos para empresas que querem sair do óbvio e criar uma experiência memorável.',
  },
  {
    title: 'Festivais e bares',
    text: 'Apresentações com ritmo, humor e clássicos nacionais para manter o público junto.',
  },
]

function EventTypes() {
  return (
    <section className="event-types section section-muted" aria-label="Tipos de eventos">
      <div className="container">
        <SectionTitle
          eyebrow="Formatos"
          title="Tipos de eventos"
          subtitle="A Pombo Chester se adapta a diferentes palcos, públicos e formatos de apresentação."
        />

        <div className="event-types__grid">
          {eventTypes.map((eventType) => (
            <article className="event-type-card" key={eventType.title}>
              <span aria-hidden="true" />
              <h3>{eventType.title}</h3>
              <p>{eventType.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTypes
