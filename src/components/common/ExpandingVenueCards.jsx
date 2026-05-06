import { memo, useCallback, useEffect, useMemo, useState } from 'react'

const MOBILE_BREAKPOINT = 770
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT}px)`

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
      aria-expanded={isActive}
      className={`expanding-venue-card${isActive ? ' is-active' : ''}`}
      aria-label={`${item.title}${item.city && item.state ? `, ${item.city} / ${item.state}` : ''}`}
      onClick={handleActivate}
      onFocus={handleActivate}
      onMouseEnter={handleActivate}
      tabIndex={0}
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
        {item.city && item.state && (
          <span className="expanding-venue-location">
            {item.city} / {item.state}
          </span>
        )}
        <span className="expanding-venue-description">{item.description}</span>
      </span>
    </button>
  )
})

function ExpandingVenueCards({ items, defaultActiveIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
  const [isMobile, setIsMobile] = useState(() => (
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false
  ))

  useEffect(() => {
    const mobileMedia = window.matchMedia(MOBILE_QUERY)

    const handleMediaChange = () => {
      setIsMobile(mobileMedia.matches)
    }

    handleMediaChange()
    mobileMedia.addEventListener('change', handleMediaChange)

    return () => mobileMedia.removeEventListener('change', handleMediaChange)
  }, [])

  const handleActivate = useCallback((index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? currentIndex : index))
  }, [])

  const gridStyle = useMemo(() => {
    const template = items.map((_, index) => (index === activeIndex ? '5fr' : '1fr')).join(' ')

    if (isMobile) {
      return {
        gridTemplateColumns: '1fr',
        gridTemplateRows: template,
      }
    }

    return {
      gridTemplateColumns: template,
      gridTemplateRows: '1fr',
    }
  }, [activeIndex, isMobile, items])

  return (
    <div className="expanding-venues" style={gridStyle}>
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
