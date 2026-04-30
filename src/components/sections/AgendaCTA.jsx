import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function AgendaCTA() {
  return (
    <section className="agenda-cta section section-dark" aria-label="Contratar show">
      <div className="container agenda-cta__inner">
        <span className="agenda-cta__eyebrow">Contrate a banda</span>
        <h2>Tem uma data em mente?</h2>
        <p>
          Fale com a Pombo Chester e veja disponibilidade para levar música ao vivo para o seu evento.
        </p>
        <div className="agenda-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento no WhatsApp
          </Button>
          <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
            Falar com a banda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AgendaCTA
