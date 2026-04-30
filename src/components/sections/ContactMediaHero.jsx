import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function ContactMediaHero() {
  return (
    <section className="contact-media-hero">
      <div className="container contact-media-hero__inner">
        <div className="contact-media-hero__content">
          <span className="contact-media-hero__badge">Contato + Mídia</span>
          <h1>Contrate a Pombo Chester  Banda para eventos ao vivo</h1>
          <p>
            Solicite orçamento, consulte disponibilidade e leve um show com
            música ao vivo, humor e energia para o seu evento.
          </p>
          <div className="contact-media-hero__actions">
            <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
              Solicitar orçamento no WhatsApp
            </Button>
            <Button href={officialLinks.instagram} variant="outline" target="_blank" rel="noreferrer">
              Ver vídeos no Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMediaHero
