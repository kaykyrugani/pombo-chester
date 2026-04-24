import Button from '../ui/Button.jsx'

function RoadCTA() {
  return (
    <section className="road-cta section section-dark" aria-label="Contratar show">
      <div className="container road-cta__inner">
        <span className="road-cta__eyebrow">Próximo palco</span>
        <h2>Seu evento pode ser o próximo palco</h2>
        <p>
          Leve a Pombo Chester para festas, eventos, bares e casas de show que
          precisam de música, humor e brasilidade.
        </p>
        <div className="road-cta__actions">
          <Button href="#" variant="primary">
            Contratar Show
          </Button>
          <Button href="#" variant="outline">
            Falar com a banda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RoadCTA
