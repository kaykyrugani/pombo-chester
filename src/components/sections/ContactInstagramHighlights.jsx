import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import post1 from '../../assets/images/insta/PostInsta1.webp'
import post2 from '../../assets/images/insta/PostInsta2.webp'
import post3 from '../../assets/images/insta/PostInsta3.webp'
import officialLinks from '../../data/officialLinks.js'

const instagramPosts = [
  {
    id: 'palco-aceso',
    image: post1,
    link: 'https://www.instagram.com/p/DXhm4iuCSGw/?img_index=1',
    label: 'Cortes de show',
    title: 'Palco Aceso',
  },
  {
    id: 'antes-da-entrada',
    image: post2,
    link: 'https://www.instagram.com/p/DWZkn4hiRiD/?img_index=1',
    label: 'Bastidores',
    title: 'Antes da Entrada',
  },
  {
    id: 'festa-acontecendo',
    image: post3,
    link: 'https://www.instagram.com/p/DWU63sWCWGq/?img_index=1',
    label: 'Ao vivo',
    title: 'A Festa Acontecendo',
  },
]

function ContactInstagramHighlights() {
  return (
    <section className="contact-instagram section section-muted">
      <div className="container">
        <div className="instagram-section__header">
          <SectionTitle
            eyebrow="Prova visual"
            title="Veja a banda ao vivo antes de contratar"
            subtitle="Assista a trechos reais dos shows e entenda na prática a energia da Pombo Chester no palco."
          />
          <Button href={officialLinks.instagram} variant="secondary" target="_blank" rel="noreferrer">
            Ver vídeos no Instagram
          </Button>
        </div>

        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <article className="instagram-card contact-instagram-card" key={post.id}>
              <span className="instagram-card__label">{post.label}</span>
              <div className="instagram-card__frame">
                <img
                  className="instagram-card__image"
                  src={post.image}
                  alt={post.title}
                  width="900"
                  height="1125"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{post.title}</h3>
              <a
                className="contact-instagram-card__link"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${post.title} no Instagram`}
              >
                ABRIR INSTAGRAM
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInstagramHighlights
