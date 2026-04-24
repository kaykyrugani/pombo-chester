import shows from '../../data/shows.js'
import ShowCard from '../common/ShowCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import Button from '../ui/Button.jsx'

function HomeNextShows() {
  const nextShows = shows.slice(0, 3)

  return (
    <section className="home-next-shows section section-light" aria-label="Próximos Shows">
      <div className="container">
        <SectionTitle
          eyebrow="Agenda"
          title="Próximos Shows"
          subtitle="Confira onde a Pombo Chester vai levar humor, brasilidade e energia nos próximos eventos."
        />

        <div className="home-next-shows__grid">
          {nextShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>

        <div className="home-next-shows__actions">
          <Button href="/agenda" variant="outline">
            Ver agenda completa
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomeNextShows
