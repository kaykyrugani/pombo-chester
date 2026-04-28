import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function ContactMediaCTA() {
  return (
    <section className="contact-media-cta section" aria-labelledby="contact-media-cta-title">
      <div className="container contact-media-cta__inner">
        <span className="contact-media-cta__eyebrow">Contratação</span>
        <h2 id="contact-media-cta-title">Quer levar essa energia para o seu evento?</h2>
        <p>
          Fale com a banda pelos canais oficiais e consulte disponibilidade para
          festas, casas de show, bares e eventos.
        </p>
        <div className="contact-media-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </Button>
          <Button href="/agenda" variant="outline">
            Ver Agenda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactMediaCTA
