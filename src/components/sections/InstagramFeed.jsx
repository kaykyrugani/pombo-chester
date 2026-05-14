import Button from '../ui/Button.jsx'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import { useRef, useState } from 'react'
import palcoAcesso from '../../assets/images/videos/Palcoacessocompress.mp4'
import antesDaEntrada from '../../assets/images/videos/Antesdaentradacompress.mp4'
import festaAcontecendo from '../../assets/images/videos/Festaacontecendocompress.mp4'
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

function InstagramFeed() {
  const videoRefs = useRef([])
  const [activeVideoId, setActiveVideoId] = useState(null)

  async function handleVideoClick(index) {
    const clickedVideo = videoRefs.current[index]

    if (!clickedVideo) {
      return
    }

    videoRefs.current.forEach((video, videoIndex) => {
      if (!video || videoIndex === index) {
        return
      }

      video.pause()
      video.currentTime = 0
    })

    if (activeVideoId === index && !clickedVideo.paused) {
      clickedVideo.pause()
      setActiveVideoId(null)
      return
    }

    try {
      clickedVideo.muted = false
      clickedVideo.volume = 1
      await clickedVideo.play()
      setActiveVideoId(index)
    } catch (error) {
      console.warn('Não foi possível reproduzir o vídeo:', error)
      setActiveVideoId(null)
    }
  }

  return (
    <section className="instagram-section section section-muted" aria-label="Assista ao vivo">
      <div className="container brand-pigeon-content">
        <div className="instagram-section__header">
          <SectionTitle
            eyebrow="Instagram"
            title="Veja a Pombo Chester ao vivo"
            subtitle="Assista bastidores, cortes de shows e momentos reais para sentir como é a experiência da banda no palco."
          />
          <Button href={officialLinks.instagram} variant="secondary" target="_blank" rel="noreferrer">
            Ver no Instagram
          </Button>
        </div>

        <div className="instagram-grid">
          {instagramVideos.map((item, index) => (
            <article className="instagram-card" key={item.id}>
              <span className="instagram-card__label">{item.label}</span>
              <div className="instagram-card__frame instagram-card__media" onClick={() => handleVideoClick(index)}>
                <video
                  ref={(element) => {
                    videoRefs.current[index] = element
                  }}
                  className="instagram-card__video"
                  src={item.video}
                  aria-label={item.title}
                  controls={false}
                  muted={false}
                  playsInline
                  preload="metadata"
                  onEnded={(event) => {
                    event.currentTarget.currentTime = 0
                    setActiveVideoId(null)
                  }}
                />
                <button
                  type="button"
                  className={`video-play-button${activeVideoId === index ? ' is-hidden' : ''}`}
                  aria-label={`Reproduzir vídeo: ${item.title}`}
                  aria-hidden={activeVideoId === index}
                  tabIndex={activeVideoId === index ? -1 : 0}
                >
                  <span aria-hidden="true">▶</span>
                </button>
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
