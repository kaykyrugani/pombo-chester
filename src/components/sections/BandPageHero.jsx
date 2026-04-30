import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function BandPageHero() {
  return (
    <section className="band-page-hero" aria-label="Banda para eventos">
      <div className="container band-page-hero__inner">
        <div className="band-page-hero__content">
          <span className="band-page-hero__badge">Banda para eventos</span>
          <h1>Banda para eventos com música ao vivo, humor e presença de palco</h1>
          <p>
            A Pombo Chester é uma banda para eventos que leva energia, brasilidade e interação ao vivo para festas, eventos corporativos e casas de show em Minas Gerais e todo o Brasil.
          </p>
          <div className="band-page-hero__actions">
            <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
              Solicitar orçamento no WhatsApp
            </Button>
            <Button href="/agenda" variant="outline">
              Ver agenda da banda
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
