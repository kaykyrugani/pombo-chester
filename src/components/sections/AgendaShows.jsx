import shows from '../../data/shows.js'
import ShowCard from '../common/ShowCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function AgendaShows() {
  return (
    <section className="agenda-shows section section-light" id="proximos-shows">
      <div className="container">
        <SectionTitle
          eyebrow="Ao vivo"
          title="Próximos Shows"
          subtitle="Datas confirmadas para você acompanhar a Pombo Chester ao vivo."
        />

        <div className="agenda-shows__grid">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgendaShows
