import SectionTitle from '../ui/SectionTitle.jsx'

const highlights = [
  {
    title: 'Eventos particulares',
    text: 'Shows pensados para festas, celebrações e encontros com clima leve e participativo.',
  },
  {
    title: 'Casas de show',
    text: 'Repertório e presença para palcos que pedem energia do começo ao fim.',
  },
  {
    title: 'Público junto',
    text: 'Interação, humor e músicas conhecidas para aproximar banda e plateia.',
  },
]

function RoadHighlights() {
  return (
    <section className="road-highlights section section-dark" aria-label="Destaques da estrada">
      <div className="container">
        <SectionTitle
          eyebrow="Ao vivo"
          title="O que a estrada mostra"
          subtitle="Cada apresentação reforça o que a Pombo Chester entrega para quem contrata."
        />

        <div className="road-highlights__grid">
          {highlights.map((highlight) => (
            <article className="road-highlight-card" key={highlight.title}>
              <span aria-hidden="true" />
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoadHighlights
