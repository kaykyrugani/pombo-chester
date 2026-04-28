import { memo } from 'react'
import Button from '../ui/Button.jsx'

const ShowCard = memo(function ShowCard({ show }) {
  return (
    <article className={`show-card ${show.isFeatured ? 'show-card--featured' : ''}`}>
      <div className="show-card__top">
        <time className="show-card__date">{show.date}</time>
        {show.isFeatured ? <span className="show-card__badge">Próximo show</span> : null}
      </div>

      <div className="show-card__content">
        <h3>
          {show.city}
          <span>{show.state}</span>
        </h3>
        <p className="show-card__venue">{show.venue}</p>
        <p className="show-card__time">Horário: {show.time}</p>
      </div>

      <Button href={show.ticketUrl} variant="primary" className="show-card__cta">
        Ingressos e detalhes
      </Button>
    </article>
  )
})

export default ShowCard
