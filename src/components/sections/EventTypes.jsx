import { useCallback, useState } from 'react'

import EventTypeCard from '../common/EventTypeCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import eventTypes from '../../data/eventTypes.js'

function EventTypes() {
  const [openCardId, setOpenCardId] = useState(null)

  const handleToggle = useCallback((id) => {
    setOpenCardId((currentId) => (currentId === id ? null : id))
  }, [])

  return (
    <section className="event-types section section-muted" aria-label="Tipos de eventos">
      <div className="container">
        <SectionTitle
          eyebrow="Formatos"
          title="Eventos e formatos que a Pombo Chester atende"
          subtitle="A Pombo Chester é uma banda versátil, preparada para diferentes tipos de evento com música ao vivo e alta energia."
        />

        <div className="event-types__grid event-types-grid">
          {eventTypes.map((eventType) => (
            <EventTypeCard
              event={eventType}
              isOpen={openCardId === eventType.id}
              key={eventType.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTypes
