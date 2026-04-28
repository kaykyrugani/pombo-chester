import { memo } from 'react'

const AnimatedFooterWord = memo(function AnimatedFooterWord() {
  return (
    <svg
      className="footer-word"
      viewBox="0 0 1000 230"
      role="img"
      aria-label="POMBO"
      preserveAspectRatio="xMidYMid meet"
    >
      <text className="footer-word__text" x="500" y="172" textAnchor="middle">
        POMBO
      </text>
    </svg>
  )
})

export default AnimatedFooterWord
