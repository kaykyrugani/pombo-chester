function Card({ eyebrow, title, children, className = '' }) {
  const classes = `card ${className}`.trim()

  return (
    <article className={classes}>
      {eyebrow ? <span className="card__meta">{eyebrow}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {children}
    </article>
  )
}

export default Card
