import { socialLinks } from '../../data/socialLinks.js'

function isExternalUrl(url) {
  return url.startsWith('http')
}

function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Redes sociais">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            target={isExternalUrl(link.url) ? '_blank' : undefined}
            rel={isExternalUrl(link.url) ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
