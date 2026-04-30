import shows from '../../data/shows.js'
import ShowCard from '../common/ShowCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function AgendaShows() {
  return (
    <section className="agenda-shows section section-light" id="proximos-shows">
      <div className="container">
        <SectionTitle
          eyebrow="Ao vivo"
          title="Próximos shows da Pombo Chester ao vivo"
          subtitle="Acompanhe as datas confirmadas da Pombo Chester e veja onde a banda já está levando música ao vivo, humor e energia para o público."
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
