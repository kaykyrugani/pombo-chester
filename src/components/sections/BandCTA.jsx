import Button from '../ui/Button.jsx'

function BandCTA() {
  return (
    <section className="band-cta section section-dark" aria-label="Contratar a Pombo Chester">
      <div className="container band-cta__inner">
        <span className="band-cta__eyebrow">Shows e eventos</span>
        <h2>Quer essa energia no seu evento?</h2>
        <p>
          A Pombo Chester leva humor, repertório brasileiro e presença de palco
          para festas, eventos e casas de show.
        </p>
        <div className="band-cta__actions">
          <Button href="#" variant="primary">
            Contratar Show
          </Button>
          <Button href="/agenda" variant="outline">
            Ver Agenda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BandCTA
