import Button from '../ui/Button.jsx'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import { useEffect, useRef, useState } from 'react'
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

function handleVideoReset(event) {
  event.currentTarget.dataset.pendingPlay = 'false'
  event.currentTarget.pause()
  event.currentTarget.currentTime = 0
}

function playVideo(video) {
  const playRequest = video.play()

  if (playRequest) {
    playRequest.catch(() => {})
  }
}

function InstagramVideo({ src, title }) {
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video || shouldLoad) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setShouldLoad(true)
        observer.disconnect()
      }
    }, {
      rootMargin: '320px 0px',
      threshold: 0.01,
    })

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [shouldLoad])

  function handleVideoPlay(event) {
    event.currentTarget.dataset.pendingPlay = 'true'

    if (!shouldLoad) {
      setShouldLoad(true)
      return
    }

    playVideo(event.currentTarget)
  }

  function handleLoadedData(event) {
    if (event.currentTarget.dataset.pendingPlay === 'true') {
      playVideo(event.currentTarget)
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="instagram-card__video"
        src={shouldLoad ? src : undefined}
        aria-label={title}
        playsInline
        muted
        loop
        preload={shouldLoad ? 'metadata' : 'none'}
        onLoadedData={handleLoadedData}
        onMouseEnter={handleVideoPlay}
        onMouseLeave={handleVideoReset}
      />
      {!shouldLoad && <span className="instagram-card__play" aria-hidden="true" />}
    </>
  )
}

function InstagramFeed() {
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
          {instagramVideos.map((item) => (
            <article className="instagram-card" key={item.id}>
              <span className="instagram-card__label">{item.label}</span>
              <div className="instagram-card__frame instagram-card__media" aria-hidden="true">
                <InstagramVideo src={item.video} title={item.title} />
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
