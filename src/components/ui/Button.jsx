function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
