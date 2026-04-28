import Button from '../ui/Button.jsx'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import palcoAcesso from '../../assets/images/videos/PalcoAcesso.MOV'
import antesDaEntrada from '../../assets/images/videos/AntesDaEntrada.MOV'
import festaAcontecendo from '../../assets/images/videos/FestaAcontecendo.MOV'
import officialLinks from '../../data/officialLinks.js'

const instagramVideos = [
  {
    id: 1,
    label: 'Cortes de show',
    title: 'Palco Aceso',
    video: palcoAcesso,
  },
  {
    id: 2,
    label: 'Bastidores',
    title: 'Antes da Entrada',
    video: antesDaEntrada,
  },
  {
    id: 3,
    label: 'Eventos',
    title: 'A Festa Acontecendo',
    video: festaAcontecendo,
  },
]

function handleVideoPlay(event) {
  const playRequest = event.currentTarget.play()

  if (playRequest) {
    playRequest.catch(() => {})
  }
}

function handleVideoReset(event) {
  event.currentTarget.pause()
  event.currentTarget.currentTime = 0
}

function InstagramFeed() {
  return (
    <section className="instagram-section section section-muted" aria-label="Assista ao vivo">
      <div className="container brand-pigeon-content">
        <div className="instagram-section__header">
          <SectionTitle
            eyebrow="Instagram"
            title="Assista ao vivo"
            subtitle="Bastidores, cortes de shows e momentos da banda para sentir a energia antes do convite."
          />
          <Button href={officialLinks.instagram} variant="secondary" target="_blank" rel="noreferrer">
            Ver no Instagram
          </Button>
        </div>

        <div className="instagram-grid">
          {instagramVideos.map((item) => (
            <article className="instagram-card" key={item.id}>
              <span className="instagram-card__label">{item.label}</span>
              <div className="instagram-card__frame instagram-card__media" aria-hidden="true">
                <video
                  className="instagram-card__video"
                  src={item.video}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  onMouseEnter={handleVideoPlay}
                  onMouseLeave={handleVideoReset}
                />
              </div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
      <BrandPigeon />
    </section>
  )
}

export default InstagramFeed
