import { shows } from '../../data/shows.js'
import ShowCard from '../../components/common/ShowCard.jsx'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

function Agenda() {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionTitle
          eyebrow="Agenda"
          title="Shows e Eventos"
          subtitle="Estrutura inicial para datas, locais, cidades e links de ingresso confirmados."
        />
        <div className="grid grid-auto placeholder-box">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agenda
