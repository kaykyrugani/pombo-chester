import AnimatedFooterWord from '../common/AnimatedFooterWord.jsx'
import officialLinks from '../../data/officialLinks.js'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Na Estrada', href: '/na-estrada' },
  { label: 'Contato + Mídia', href: '/contato' },
]

const socialLinks = [
  { label: 'Instagram', href: officialLinks.instagram },
  { label: 'TikTok', href: officialLinks.tiktok },
  { label: 'Spotify', href: officialLinks.spotify },
  { label: 'YouTube', href: officialLinks.youtube },
  { label: 'Facebook', href: officialLinks.facebook },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__grid">
          <section className="site-footer__brand" aria-label="Pombo Chester">
            <a className="site-footer__logo" href="/">
              Pombo Chester
            </a>
            <p className="site-footer__text">
              Banda brasileira com humor, energia e repertório pensado para shows,
              eventos e palcos que pedem presença.
            </p>
          </section>

          <nav className="site-footer__column" aria-label="Menu do rodapé">
            <h2 className="site-footer__heading">Menu</h2>
            <ul className="site-footer__links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="site-footer__column" aria-labelledby="footer-social-title">
            <h2 className="site-footer__heading" id="footer-social-title">
              Redes
            </h2>
            <ul className="site-footer__links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <address className="site-footer__column site-footer__contact" aria-labelledby="footer-contact-title">
            <h2 className="site-footer__heading" id="footer-contact-title">
              Contato
            </h2>
            <ul className="site-footer__contact-list">
              <li>
                <span>E-mail:</span>
                <a href="mailto:contato@pombochester.com">contato@pombochester.com</a>
              </li>
              <li>
                <span>WhatsApp:</span>
                <a href={officialLinks.whatsapp} target="_blank" rel="noreferrer">
                  Contratação de shows
                </a>
              </li>
              <li>
                <span>Localização:</span>
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="site-footer__divider" aria-hidden="true" />

        <div className="site-footer__bottom">
          <AnimatedFooterWord />
          <p className="site-footer__text">
            © 2026 Pombo Chester. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
