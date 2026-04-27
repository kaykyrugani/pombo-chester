import SectionTitle from '../ui/SectionTitle.jsx'

const highlights = [
  {
    label: 'Formatos',
    title: 'Festas e eventos particulares',
    text: 'Shows pensados para festas, celebrações e encontros com clima leve, interação e participação do público.',
  },
  {
    label: 'Palco',
    title: 'Palco e casas de show',
    text: 'Repertório envolvente e presença de palco para eventos que precisam de energia do começo ao fim.',
  },
  {
    label: 'Ao vivo',
    title: 'Interação com o público',
    text: 'Humor, músicas conhecidas e dinâmica ao vivo que aproximam banda e plateia.',
  },
]

function RoadHighlights() {
  return (
    <section className="road-highlights section section-dark" aria-label="Destaques da estrada">
      <div className="container">
        <SectionTitle
          eyebrow="Ao vivo"
          title="O que esperar de um show da Pombo Chester"
          subtitle="Veja como nossos shows funcionam na prática — do clima à interação com o público."
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
