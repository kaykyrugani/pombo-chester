import { memo, useCallback } from 'react'
import { motion } from 'framer-motion'

const dragConstraints = { left: 0, right: 0 }

const cardTransition = { type: 'spring', stiffness: 260, damping: 28 }

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MemberCard({ member, positionStyle, isFront = false, onShuffle }) {
  const handleDragEnd = useCallback((_, info) => {
    if (info.offset.x < -80 || info.velocity.x < -500) {
      onShuffle()
    }
  }, [onShuffle])

  return (
    <motion.article
      animate={positionStyle}
      className={`member-card member-card--stack ${isFront ? 'is-front' : ''}`}
      drag={isFront ? 'x' : undefined}
      dragConstraints={isFront ? dragConstraints : undefined}
      dragElastic={isFront ? 0.9 : undefined}
      initial={false}
      onDragEnd={isFront ? handleDragEnd : undefined}
      transition={cardTransition}
    >
      <div className="member-card__media">
        {member.image ? (
          <img
            src={member.image}
            alt={`Foto de ${member.name}`}
            width="900"
            height="1125"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span>{getInitials(member.name) || 'Foto em breve'}</span>
        )}
      </div>
      <div className="member-card__content">
        <span className="member-card__role">{member.role}</span>
        <h3>{member.name}</h3>
        <p>{member.bio}</p>
      </div>
    </motion.article>
  )
}

export default memo(MemberCard)
