import { useEffect, useState } from 'react'
import Button from '../ui/Button.jsx'
import logoPombo from '../../assets/logo/LogoPombo.jpg'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Na Estrada', href: '/na-estrada' },
  { label: 'Contato + Mídia', href: '/contato' },
]

function Header({ currentPath = '/' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuId = 'mobile-navigation'

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const getLinkClass = (href, baseClass) =>
    `${baseClass} ${currentPath === href ? 'is-active' : ''}`.trim()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="/" aria-label="Pombo Chester - Home" onClick={() => setIsMenuOpen(false)}>
          <img src={logoPombo} alt="Pombo Chester Logo" className="brand__mark" />
          <span className="brand__name">Pombo Chester</span>
        </a>

        <nav className="nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              className={getLinkClass(item.href, 'nav__link')}
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

        <button
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className={`mobile-menu-toggle ${isMenuOpen ? 'is-open' : ''}`.trim()}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        aria-label="Navegação mobile"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`.trim()}
        hidden={!isMenuOpen}
        id={mobileMenuId}
      >
        <div className="container mobile-menu__inner">
          {navItems.map((item) => (
            <a
              className={getLinkClass(item.href, 'mobile-nav-link')}
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-menu__cta" href="/contato" onClick={() => setIsMenuOpen(false)}>
            Contratar Show
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
