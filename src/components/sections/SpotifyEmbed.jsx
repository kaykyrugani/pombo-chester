import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import officialLinks from '../../data/officialLinks.js'

function SpotifyEmbed() {
  return (
    <section className="spotify-section section section-dark" aria-label="Ouça a Pombo Chester">
      <div className="container spotify-section__inner">
        <div className="spotify-section__copy">
          <SectionTitle
            eyebrow="Spotify"
            title="Ouça a Pombo Chester"
            subtitle="Conheça o som da banda antes de levar essa energia para o seu evento."
          />
          <Button href={officialLinks.spotify} variant="primary" target="_blank" rel="noreferrer">
            Abrir no Spotify
          </Button>
        </div>

        <div className="spotify-player" aria-label="Espaço reservado para o player do Spotify">
          <span className="spotify-player__label">Player Spotify</span>
          <div className="spotify-player__disc" aria-hidden="true">
            <span />
          </div>
          <div className="spotify-player__track">
            <strong>Pombo Chester ao vivo</strong>
            <span>Embed oficial em breve</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpotifyEmbed
