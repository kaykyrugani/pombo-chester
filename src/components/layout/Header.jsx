import { useCallback, useEffect, useState } from 'react'
import Button from '../ui/Button.jsx'
import logoPombo from '../../assets/logo/LogoPombo.jpg'
import officialLinks from '../../data/officialLinks.js'

const mobileMenuId = 'mobile-navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Na Estrada', href: '/na-estrada' },
  { label: 'Contato + Mídia', href: '/contato' },
]

function getLinkClass(href, baseClass, currentPath) {
  return `${baseClass} ${currentPath === href ? 'is-active' : ''}`.trim()
}

function Header({ currentPath = '/' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((isOpen) => !isOpen)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="/" aria-label="Pombo Chester - Home" onClick={closeMenu}>
          <img src={logoPombo} alt="Pombo Chester Logo" className="brand__mark" decoding="async" />
          <span className="brand__name">Pombo Chester</span>
        </a>

        <nav className="nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              className={getLinkClass(item.href, 'nav__link', currentPath)}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__cta">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Contratar Show
          </Button>
        </div>

        <button
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className={`mobile-menu-toggle ${isMenuOpen ? 'is-open' : ''}`.trim()}
          onClick={toggleMenu}
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
              className={getLinkClass(item.href, 'mobile-nav-link', currentPath)}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="mobile-menu__cta"
            href={officialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Contratar Show
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
