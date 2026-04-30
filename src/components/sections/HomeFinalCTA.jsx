import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function HomeFinalCTA() {
  return (
    <section className="home-final-cta section section-dark" aria-label="Contratar Pombo Chester">
      <div className="container home-final-cta__inner">
        <span className="home-final-cta__eyebrow">Banda para eventos</span>
        <h2>Pronto para transformar seu evento em um show de verdade?</h2>
        <p>
          Fale com a Pombo Chester agora e veja disponibilidade para sua data. Atendemos festas, 
          eventos corporativos e shows em todo o Brasil.
        </p>
        <div className="home-final-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento agora
          </Button>
          <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
            Falar com a banda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomeFinalCTA
