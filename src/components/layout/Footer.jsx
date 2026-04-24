import SocialLinks from '../common/SocialLinks.jsx'

const footerLinks = [
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Na Estrada', href: '/na-estrada' },
  { label: 'Contato + Midia', href: '/contato' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__title">Pombo Chester</span>
          <p className="site-footer__text">
            Banda brasileira com humor, energia e repertorio pensado para shows,
            eventos e palcos que pedem presenca.
          </p>
          <p className="site-footer__meta">Informacoes oficiais serao adicionadas na etapa de conteudo.</p>
        </div>

        <div className="site-footer__brand">
          <ul className="site-footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
