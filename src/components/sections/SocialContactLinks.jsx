import socialLinks from '../../data/socialLinks.js'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'

function isExternalUrl(url) {
  return url.startsWith('http')
}

function SocialContactLinks() {
  return (
    <section className="social-contact section section-light" aria-labelledby="social-contact-title">
      <div className="container brand-pigeon-content">
        <div className="social-contact__header">
          <span className="eyebrow">Canais oficiais</span>
          <h2 id="social-contact-title">Escolha o melhor canal para falar com a Pombo Chester</h2>
          <p>
            Para orçamento banda, disponibilidade e contratação, o WhatsApp é o
            caminho mais rápido. Os outros canais ajudam você a conhecer melhor a
            banda ao vivo antes de decidir.
          </p>
        </div>

        <div className="social-contact__grid">
          {socialLinks.map((link) => {
            const isExternal = isExternalUrl(link.url)

            return (
              <article
                className={`social-contact-card ${link.featured ? 'social-contact-card--featured' : ''}`.trim()}
                key={link.id}
              >
                <div className="social-contact-card__content">
                  <span>{link.label}</span>
                  <h3>{link.handle}</h3>
                  <p>{link.description}</p>
                </div>
                <a
                  className="social-contact-card__link"
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  aria-label={`Acessar ${link.label}`}
                >
                  {link.cta}
                </a>
              </article>
            )
          })}
        </div>
      </div>
      <BrandPigeon />
    </section>
  )
}

export default SocialContactLinks
