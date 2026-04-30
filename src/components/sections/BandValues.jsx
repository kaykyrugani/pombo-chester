import SectionTitle from '../ui/SectionTitle.jsx'

const values = [
  {
    label: 'PRESENÇA',
    title: 'Humor com presença',
    text: 'A irreverência entra no palco com timing, repertório e interação com o público.',
  },
  {
    label: 'BRASILIDADE',
    title: 'Repertório brasileiro',
    text: 'Clássicos populares e referências nacionais que aproximam a banda da plateia.',
  },
  {
    label: 'AO VIVO',
    title: 'Energia de show',
    text: 'Shows pensados para levantar festas, eventos, bares e casas de show.',
  },
]

function BandValues() {
  return (
    <section className="band-values section section-dark" aria-label="Proposta artística">
      <div className="container">
        <SectionTitle
          eyebrow="Proposta"
          title="O que faz da Pombo Chester a banda ideal para o seu evento"
          subtitle="Três pilares que garantem um show completo para eventos ao vivo."
        />

        <div className="dark-feature-panel">
          <div className="band-values__grid">
            {values.map((value) => (
              <article className="dark-feature-card band-value-card" key={value.title}>
                <div className="dark-feature-card__meta">
                  <span className="dark-feature-card__dot" aria-hidden="true" />
                  <span className="dark-feature-card__label">{value.label}</span>
                </div>
                <h3 className="dark-feature-card__title">{value.title}</h3>
                <p className="dark-feature-card__text">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BandValues
