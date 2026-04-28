import { memo, useCallback } from 'react'
import officialLinks from '../../data/officialLinks.js'

function EventTypeCard({ event, isOpen, onToggle }) {
  const descriptionId = `event-type-description-${event.id}`

  const handleCardClick = useCallback((eventClick) => {
    if (eventClick.target.closest('a, button')) {
      return
    }

    onToggle(event.id)
  }, [event.id, onToggle])

  const handleToggleClick = useCallback((eventClick) => {
    eventClick.stopPropagation()
    onToggle(event.id)
  }, [event.id, onToggle])

  return (
    <article
      className={`event-type-card${isOpen ? ' is-open' : ''}`}
      aria-labelledby={`event-type-title-${event.id}`}
      aria-expanded={isOpen}
      onClick={handleCardClick}
    >
      <div className="event-type-card-image" aria-hidden="true">
        <img src={event.image} alt="" decoding="async" loading="lazy" />
      </div>
      <div className="event-type-card-overlay" aria-hidden="true" />

      <div className="event-type-card-content">
        <div className="event-type-card-header">
          <div>
            <p className="event-type-card-eyebrow">{event.eyebrow}</p>
            <h3 className="event-type-card-title" id={`event-type-title-${event.id}`}>
              {event.title}
            </h3>
          </div>

          <button
            className="event-type-card-toggle"
            type="button"
            aria-label={isOpen ? `Fechar ${event.title}` : `Abrir ${event.title}`}
            aria-controls={descriptionId}
            aria-expanded={isOpen}
            onClick={handleToggleClick}
          >
            {isOpen ? '×' : '+'}
          </button>
        </div>

        <p className="event-type-card-short">{event.shortText}</p>

        <div className="event-type-card-details" id={descriptionId}>
          <p className="event-type-card-description">{event.description}</p>
          <a
            className="event-type-card-action"
            href={officialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Consultar formato
          </a>
        </div>
      </div>
    </article>
  )
}

export default memo(EventTypeCard)
