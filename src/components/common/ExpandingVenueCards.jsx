import { useState } from 'react'

function ExpandingVenueCards({ items, defaultActiveIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)

  return (
    <div className="expanding-venues">
      {items.map((item, index) => {
        const isActive = index === activeIndex

        return (
          <button
            aria-pressed={isActive}
            className={`expanding-venue-card ${isActive ? 'is-active' : ''}`}
            key={item.id}
            onClick={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            type="button"
          >
            <img className="expanding-venue-image" src={item.image} alt={item.title} />
            <span className="expanding-venue-overlay" aria-hidden="true" />
            <span className="expanding-venue-content">
              <span className="expanding-venue-label">{item.type}</span>
              <span className="expanding-venue-title">{item.title}</span>
              <span className="expanding-venue-location">
                {item.city} / {item.state}
              </span>
              <span className="expanding-venue-description">{item.description}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default ExpandingVenueCards
