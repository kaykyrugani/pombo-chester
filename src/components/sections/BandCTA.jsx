import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function BandCTA() {
  return (
    <section className="band-cta section section-dark" aria-label="Contratar Pombo Chester">
      <div className="container band-cta__inner">
        <span className="band-cta__eyebrow">Contrate a banda</span>
        <h2>Quer contratar uma banda para o seu evento?</h2>
        <p>
          Fale com a Pombo Chester agora e veja disponibilidade para sua data. A Pombo Chester atende festas, eventos corporativos e shows em todo o Brasil.
        </p>
        <div className="band-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento no WhatsApp
          </Button>
          <Button href="/agenda" variant="outline">
            Ver agenda completa
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BandCTA
