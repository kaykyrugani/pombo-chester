import { memo, useCallback, useState } from 'react'

const ExpandingVenueCard = memo(function ExpandingVenueCard({
  index,
  isActive,
  item,
  onActivate,
}) {
  const handleActivate = useCallback(() => {
    onActivate(index)
  }, [index, onActivate])

  return (
    <button
      aria-pressed={isActive}
      className={`expanding-venue-card${isActive ? ' is-active' : ''}`}
      onClick={handleActivate}
      onFocus={handleActivate}
      onMouseEnter={handleActivate}
      type="button"
    >
      <img
        className="expanding-venue-image"
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
      />
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
})

function ExpandingVenueCards({ items, defaultActiveIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const handleActivate = useCallback((index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? currentIndex : index))
  }, [])

  return (
    <div className="expanding-venues">
      {items.map((item, index) => (
        <ExpandingVenueCard
          index={index}
          isActive={index === activeIndex}
          item={item}
          key={item.id}
          onActivate={handleActivate}
        />
      ))}
    </div>
  )
}

export default ExpandingVenueCards
