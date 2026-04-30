import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function RoadPageHero() {
  return (
    <section className="road-page-hero" aria-label="Na Estrada">
      <div className="container road-page-hero__inner">
        <div className="road-page-hero__content">
          <span className="road-page-hero__badge">Na Estrada</span>
          <h1>Por onde a Pombo Chester já tocou  Banda ao vivo para eventos</h1>
          <p>
            Veja os palcos, festas e eventos onde a Pombo Chester levou música
            ao vivo, humor e energia para diferentes públicos.
          </p>
          <div className="road-page-hero__actions">
            <Button href="/agenda" variant="primary">
              Ver agenda de shows
            </Button>
            <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
              Solicitar orçamento
            </Button>
          </div>
        </div>

        <div className="road-page-hero__stamp" aria-hidden="true">
          <span>Ao vivo</span>
          <strong>Na Estrada</strong>
          <span>Eventos</span>
        </div>
      </div>
    </section>
  )
}

export default RoadPageHero
