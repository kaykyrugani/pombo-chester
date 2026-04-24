import { motion } from 'framer-motion'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MemberCard({ member, positionStyle, isFront = false, onShuffle }) {
  const dragProps = isFront
    ? {
        drag: 'x',
        dragConstraints: { left: 0, right: 0 },
        dragElastic: 0.9,
        onDragEnd: (_, info) => {
          if (info.offset.x < -80 || info.velocity.x < -500) {
            onShuffle()
          }
        },
      }
    : {}

  return (
    <motion.article
      animate={positionStyle}
      className={`member-card member-card--stack ${isFront ? 'is-front' : ''}`}
      initial={false}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      {...dragProps}
    >
      <div className="member-card__media">
        {member.image ? (
          <img src={member.image} alt={`Foto de ${member.name}`} />
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

export default MemberCard
