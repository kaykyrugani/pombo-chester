import Button from '../ui/Button.jsx'

function BandCTA() {
  return (
    <section className="band-cta section section-dark" aria-label="Contratar a Pombo Chester">
      <div className="container band-cta__inner">
        <span className="band-cta__eyebrow">Shows e eventos</span>
        <h2>Quer levar essa energia para o seu evento?</h2>
        <p>
          A Pombo Chester está pronta para festas, eventos, bares, casas de show
          e palcos que pedem humor, brasilidade e presença ao vivo.
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
