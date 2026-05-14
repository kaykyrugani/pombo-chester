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

function requestVideoPlay(video) {
  const playRequest = video.play()

  if (playRequest) {
    playRequest.catch(() => {})
  }
}

function playVideoPreview(video) {
  video.dataset.userPlaying = 'false'
  video.muted = true
  video.defaultMuted = true
  requestVideoPlay(video)
}

function playVideoWithSound(video) {
  video.dataset.userPlaying = 'true'
  video.defaultMuted = false
  video.muted = false
  video.removeAttribute('muted')
  video.volume = 1
  requestVideoPlay(video)
}

function resetVideo(video) {
  video.dataset.pendingPlay = 'false'
  video.dataset.userPlaying = 'false'
  video.pause()
  video.currentTime = 0
  video.muted = true
  video.defaultMuted = true
}

function handleVideoReset(event) {
  if (event.currentTarget.dataset.userPlaying === 'true') {
    return
  }

  resetVideo(event.currentTarget)
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

  function handleVideoPreview(event) {
    const video = event.currentTarget

    video.dataset.pendingPlay = 'preview'

    if (!shouldLoad) {
      setShouldLoad(true)
      video.src = src
      video.load()
      playVideoPreview(video)
      return
    }

    playVideoPreview(video)
  }

  function handleVideoClick(event) {
    const video = event.currentTarget

    video.dataset.pendingPlay = 'sound'

    if (!shouldLoad) {
      setShouldLoad(true)
      video.src = src
      video.load()
      playVideoWithSound(video)
      return
    }

    if (video.dataset.userPlaying === 'true' && !video.paused) {
      resetVideo(video)
      return
    }

    playVideoWithSound(video)
  }

  function handleLoadedData(event) {
    if (event.currentTarget.dataset.pendingPlay === 'sound') {
      playVideoWithSound(event.currentTarget)
      return
    }

    if (event.currentTarget.dataset.pendingPlay === 'preview') {
      playVideoPreview(event.currentTarget)
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
        loop
        preload={shouldLoad ? 'metadata' : 'none'}
        onClick={handleVideoClick}
        onLoadedData={handleLoadedData}
        onMouseEnter={handleVideoPreview}
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
              <div className="instagram-card__frame instagram-card__media">
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
