import SectionTitle from '../ui/SectionTitle.jsx'

const values = [
  {
    title: 'Humor com presença',
    text: 'A irreverência entra no palco com ritmo, timing e respeito ao público do evento.',
  },
  {
    title: 'Repertório brasileiro',
    text: 'Referências populares, clássicos conhecidos e uma leitura divertida da cultura nacional.',
  },
  {
    title: 'Energia de show',
    text: 'Performance para colocar o público junto, cantar alto e manter a festa acesa.',
  },
]

function BandValues() {
  return (
    <section className="band-values section section-dark" aria-label="Proposta artística">
      <div className="container">
        <SectionTitle
          eyebrow="Proposta"
          title="O que move a Pombo Chester"
          subtitle="Humor, repertório popular e presença de palco trabalhando juntos para entregar um show memorável."
        />

        <div className="band-values__grid">
          {values.map((value) => (
            <article className="band-value-card" key={value.title}>
              <span aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BandValues
