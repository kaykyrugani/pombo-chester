import { useState } from 'react'

import EventTypeCard from '../common/EventTypeCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import eventTypes from '../../data/eventTypes.js'

function EventTypes() {
  const [openCardId, setOpenCardId] = useState(null)

  const handleToggle = (id) => {
    setOpenCardId((currentId) => (currentId === id ? null : id))
  }

  return (
    <section className="event-types section section-muted" aria-label="Tipos de eventos">
      <div className="container">
        <SectionTitle
          eyebrow="Formatos"
          title="Tipos de eventos"
          subtitle="A Pombo Chester se adapta a diferentes palcos, públicos e formatos de apresentação."
        />

        <div className="event-types__grid event-types-grid">
          {eventTypes.map((eventType) => (
            <EventTypeCard
              event={eventType}
              isOpen={openCardId === eventType.id}
              key={eventType.id}
              onToggle={() => handleToggle(eventType.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventTypes
