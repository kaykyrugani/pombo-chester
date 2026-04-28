import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function ContactMediaHero() {
  return (
    <section className="contact-media-hero">
      <div className="container contact-media-hero__inner">
        <div className="contact-media-hero__content">
          <span className="contact-media-hero__badge">Contato + Mídia</span>
          <h1>Fale com a Pombo Chester</h1>
          <p>
            Contratação, redes sociais, vídeos e caminhos oficiais para acompanhar
            a banda de perto.
          </p>
          <div className="contact-media-hero__actions">
            <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </Button>
            <Button href={officialLinks.instagram} variant="outline" target="_blank" rel="noreferrer">
              Ver Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMediaHero
