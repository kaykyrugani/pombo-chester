import SectionTitle from '../ui/SectionTitle.jsx'

const highlights = [
  {
    label: 'Formatos',
    title: 'Festas e eventos particulares',
    text: 'Shows personalizados para diferentes públicos, com interação e repertório adaptado.',
  },
  {
    label: 'Palco',
    title: 'Palco e casas de show',
    text: 'Apresentações com energia contínua, presença de palco e repertório envolvente.',
  },
  {
    label: 'Ao vivo',
    title: 'Interação com o público',
    text: 'Humor, músicas conhecidas e dinâmica que aproxima banda e plateia.',
  },
]

function RoadHighlights() {
  return (
    <section className="road-highlights section section-dark" aria-label="Destaques da estrada">
      <div className="container">
        <SectionTitle
          eyebrow="Ao vivo"
          title="Como funciona um show da Pombo Chester ao vivo"
          subtitle="Entenda na prática o que faz a Pombo Chester se destacar como banda para eventos."
        />

        <div className="road-highlights__panel dark-feature-panel">
          <div className="road-highlights__grid">
            {highlights.map((highlight) => (
              <article className="dark-feature-card road-highlight-card" key={highlight.title}>
                <div className="dark-feature-card__meta">
                  <span className="dark-feature-card__dot" aria-hidden="true" />
                  <span className="dark-feature-card__label">{highlight.label}</span>
                </div>
                <h3 className="dark-feature-card__title">{highlight.title}</h3>
                <p className="dark-feature-card__text">{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadHighlights
