import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function RoadPageHero() {
  return (
    <section className="road-page-hero" aria-label="Na Estrada">
      <div className="container road-page-hero__inner">
        <div className="road-page-hero__content">
          <span className="road-page-hero__badge">Na Estrada</span>
          <h1>Palcos, festas e eventos por onde a Pombo Chester passou</h1>
          <p>
            Uma vitrine dos lugares, casas e eventos que ajudaram a construir a
            presença da banda ao vivo.
          </p>
          <div className="road-page-hero__actions">
            <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
              Contratar Show
            </Button>
            <Button href="/agenda" variant="outline">
              Ver Agenda
            </Button>
          </div>
        </div>

        <div className="road-page-hero__stamp" aria-hidden="true">
          <span>Ao vivo</span>
          <strong>Na Estrada</strong>
          <span>Show real</span>
        </div>
      </div>
    </section>
  )
}

export default RoadPageHero
