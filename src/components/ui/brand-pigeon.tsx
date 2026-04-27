"use client"

import { useEffect, useState } from 'react'
import pigeon from '../../assets/logo/LogoPombo2.png'

type BrandPigeonProps = {
  className?: string
}

export function BrandPigeon({ className = '' }: BrandPigeonProps) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let frameId: number | null = null

    const handleScroll = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        setOffsetY(Math.min(window.scrollY * 0.05, 40))
        frameId = null
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <img
      src={pigeon}
      alt=""
      aria-hidden="true"
      style={{
        transform: `translate(16%, calc(12% + ${offsetY}px))`,
      }}
      className={`brand-pigeon ${className}`.trim()}
    />
  )
}
