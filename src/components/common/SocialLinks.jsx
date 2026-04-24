import { socialLinks } from '../../data/socialLinks.js'

function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Redes sociais">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
