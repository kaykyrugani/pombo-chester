import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function ContactMediaCTA() {
  return (
    <section className="contact-media-cta section" aria-labelledby="contact-media-cta-title">
      <div className="container contact-media-cta__inner">
        <span className="contact-media-cta__eyebrow">Contratação</span>
        <h2 id="contact-media-cta-title">Pronto para contratar uma banda para o seu evento?</h2>
        <p>
          A Pombo Chester é uma banda para eventos com experiência em festas,
          bares, casas de show e eventos corporativos.
        </p>
        <p>
          Se você quer garantir um show ao vivo com energia, interação e
          repertório envolvente, entre em contato agora.
        </p>
        <div className="contact-media-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento no WhatsApp
          </Button>
          <Button href="/agenda" variant="outline">
            Ver agenda disponível
          </Button>
        </div>
        <p className="contact-media-cta__local">
          A Pombo Chester é uma banda para eventos com base em Monte Santo de
          Minas - MG, atendendo festas, casamentos, bares e eventos em todo o
          Brasil.
        </p>
      </div>
    </section>
  )
}

export default ContactMediaCTA
