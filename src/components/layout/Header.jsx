import Button from '../ui/Button.jsx'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Na Estrada', href: '/na-estrada' },
  { label: 'Contato + Midia', href: '/contato' },
]

function Header({ currentPath = '/' }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="/" aria-label="Pombo Chester - Home">
          <span className="brand__mark" aria-hidden="true">
            PC
          </span>
          <span className="brand__name">Pombo Chester</span>
        </a>

        <nav className="nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              className={`nav__link ${currentPath === item.href ? 'is-active' : ''}`.trim()}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__cta">
          <Button href="/contato" variant="primary">
            Contratar Show
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
