import Button from '../ui/Button.jsx'

function BandPageHero() {
  return (
    <section className="band-page-hero" aria-label="A Banda">
      <div className="container band-page-hero__inner">
        <div className="band-page-hero__content">
          <span className="band-page-hero__badge">A Banda</span>
          <h1>Humor, brasilidade e presença de palco</h1>
          <p>
            Conheça a Pombo Chester, uma banda feita para transformar festas,
            eventos e casas de show em experiências memoráveis.
          </p>
          <div className="band-page-hero__actions">
            <Button href="#" variant="primary">
              Contratar Show
            </Button>
            <Button href="/agenda" variant="outline">
              Ver Agenda
            </Button>
          </div>
        </div>

        <div className="band-page-hero__poster" aria-hidden="true">
          <span>Pombo Chester</span>
          <strong>Ao vivo</strong>
        </div>
      </div>
    </section>
  )
}

export default BandPageHero
