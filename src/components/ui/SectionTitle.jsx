function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const classes = `section-title ${align === 'center' ? 'section-title--center' : ''}`.trim()

  return (
    <div className={classes}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
