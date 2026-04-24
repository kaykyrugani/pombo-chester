import SectionTitle from '../ui/SectionTitle.jsx'

const values = [
  {
    title: 'Humor com presença',
    text: 'A irreverência entra no palco com timing, repertório e interação com o público.',
  },
  {
    title: 'Repertório brasileiro',
    text: 'Clássicos populares e referências nacionais que aproximam a banda da plateia.',
  },
  {
    title: 'Energia ao vivo',
    text: 'Shows pensados para levantar festas, eventos, bares e casas de show.',
  },
]

function BandValues() {
  return (
    <section className="band-values section section-dark" aria-label="Proposta artística">
      <div className="container">
        <SectionTitle
          eyebrow="Proposta"
          title="O que move a Pombo Chester"
          subtitle="Três pilares para entregar um show divertido, musical e pronto para evento."
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
