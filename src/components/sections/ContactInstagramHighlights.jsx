import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

const instagramUrl = 'https://www.instagram.com/pombochester/'

const instagramHighlights = [
  {
    id: 'palco-aceso',
    label: 'Cortes de show',
    title: 'Palco aceso',
  },
  {
    id: 'antes-da-entrada',
    label: 'Bastidores',
    title: 'Antes da entrada',
  },
  {
    id: 'festa-acontecendo',
    label: 'Ao vivo',
    title: 'A festa acontecendo',
  },
]

function ContactInstagramHighlights() {
  return (
    <section className="contact-instagram section section-muted">
      <div className="container">
        <div className="instagram-section__header">
          <SectionTitle
            eyebrow="Instagram"
            title="Veja a banda em ação"
            subtitle="Cortes de show, bastidores e momentos que mostram a energia da Pombo Chester no palco."
          />
          <Button href={instagramUrl} variant="secondary" target="_blank" rel="noreferrer">
            Ver no Instagram
          </Button>
        </div>

        <div className="instagram-grid">
          {instagramHighlights.map((post) => (
            <article className="instagram-card contact-instagram-card" key={post.id}>
              <span className="instagram-card__label">{post.label}</span>
              <div className="instagram-card__frame" aria-hidden="true">
                <span />
              </div>
              <h3>{post.title}</h3>
              <a
                className="contact-instagram-card__link"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ${post.title} no Instagram`}
              >
                Abrir Instagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInstagramHighlights
