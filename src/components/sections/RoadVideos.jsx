import SectionTitle from '../ui/SectionTitle.jsx'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'
import botecoDiretoria from '../../assets/images/videos/Botecodiretoria.mp4'
import casamentoGuaxupe from '../../assets/images/videos/Casamentoguaxupe.mp4'
import unigames from '../../assets/images/videos/Unigames.mp4'

const roadVideos = [
  {
    id: 1,
    label: 'Boteco Diretoria',
    title: 'Boteco Diretoria Poços de caldas',
    description:
      'Um registro da Pombo Chester em ação, mostrando presença, repertório brasileiro e conexão com o público.',
    video: botecoDiretoria,
  },
  {
    id: 2,
    label: 'Casamento Guaxupé',
    title: 'Casamento Guaxupé',
    description:
      'Casamento em Guaxupé, com a Pombo Chester animando a festa e criando uma atmosfera de alegria e celebração.',
    video: casamentoGuaxupe,
  },
  {
    id: 3,
    label: 'Unigames',
    title: 'Unigames',
    description:
      'Registro da Pombo Chester na Unigames, mostrando a energia contagiante da banda e a interação com o público durante o evento.',
    video: unigames,
  },
]

function playVideo(video) {
  const playRequest = video.play()

  if (playRequest) {
    playRequest.catch(() => {})
  }
}

function resetVideo(video) {
  video.pause()
  video.currentTime = 0
}

function handleVideoClick(event) {
  const video = event.currentTarget

  if (video.paused) {
    playVideo(video)
    return
  }

  video.pause()
}

function RoadVideos() {
  return (
    <section className="road-videos section section-light" aria-label="Vídeos da Pombo Chester ao vivo">
      <div className="container">
        <div className="road-videos__header">
          <SectionTitle
            eyebrow="Vídeos ao vivo"
            title="Veja a Pombo Chester em ação"
            subtitle="Registros de shows, bastidores e momentos que mostram a energia da banda nos eventos."
          />
        </div>

        <div className="road-videos__grid">
          {roadVideos.map((item, index) => (
            <article
              className={`road-video-card${index === 0 ? ' road-video-card--featured' : ''}`}
              key={item.id}
            >
              <div className="road-video-card__media">
                <video
                  src={item.video}
                  muted
                  playsInline
                  preload="metadata"
                  className="road-video-card__video"
                  aria-label={`${item.title}: ${item.description}`}
                  onClick={handleVideoClick}
                  onMouseEnter={(event) => playVideo(event.currentTarget)}
                  onMouseLeave={(event) => resetVideo(event.currentTarget)}
                />
                <span className="road-video-card__play" aria-hidden="true" />
              </div>

              <div className="road-video-card__content">
                <span className="road-video-card__label">{item.label}</span>
                <h3 className="road-video-card__title">{item.title}</h3>
                <p className="road-video-card__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="road-videos__cta">
          <Button href={officialLinks.instagram} variant="secondary" target="_blank" rel="noreferrer">
            Ver mais no Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RoadVideos
