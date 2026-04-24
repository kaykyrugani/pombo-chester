import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

const instagramPosts = [
  {
    id: 'cortes-de-show',
    label: 'Cortes de show',
    title: 'Palco aceso',
  },
  {
    id: 'bastidores',
    label: 'Bastidores',
    title: 'Antes da entrada',
  },
  {
    id: 'eventos',
    label: 'Eventos',
    title: 'A festa acontecendo',
  },
]

function InstagramFeed() {
  return (
    <section className="instagram-section section section-muted" aria-label="Assista ao vivo">
      <div className="container">
        <div className="instagram-section__header">
          <SectionTitle
            eyebrow="Instagram"
            title="Assista ao vivo"
            subtitle="Bastidores, cortes de shows e momentos da banda para sentir a energia antes do convite."
          />
          <Button href="https://www.instagram.com/pombochester/" variant="secondary">
            Ver no Instagram
          </Button>
        </div>

        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <article className="instagram-card" key={post.id}>
              <span className="instagram-card__label">{post.label}</span>
              <div className="instagram-card__frame" aria-hidden="true">
                <span />
              </div>
              <h3>{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
