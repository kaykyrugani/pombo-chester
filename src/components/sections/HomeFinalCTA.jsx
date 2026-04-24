import Button from '../ui/Button.jsx'

function HomeFinalCTA() {
  return (
    <section className="home-final-cta section section-dark" aria-label="Contratar Pombo Chester">
      <div className="container home-final-cta__inner">
        <span className="home-final-cta__eyebrow">Contrate a banda</span>
        <h2>Quer levar a Pombo Chester para o seu evento?</h2>
        <p>
          Shows para festas, eventos, casas e palcos que pedem humor, brasilidade
          e energia ao vivo.
        </p>
        <div className="home-final-cta__actions">
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

export default HomeFinalCTA
