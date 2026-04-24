function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MemberCard({ member }) {
  return (
    <article className="member-card">
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
    </article>
  )
}

export default MemberCard
