"use client"

import { memo, useEffect, useRef } from 'react'
import pigeon from '../../assets/logo/LogoPombo2.png'

type BrandPigeonProps = {
  className?: string
}

const baseTransform = 'translate(16%, 12%)'
const desktopMediaQuery = '(min-width: 769px)'
const reducedMotionMediaQuery = '(prefers-reduced-motion: reduce)'
const initialStyle = { transform: baseTransform }

function BrandPigeonComponent({ className = '' }: BrandPigeonProps) {
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    let frameId: number | null = null
    let isScrollListening = false
    const desktopMedia = window.matchMedia(desktopMediaQuery)
    const reducedMotionMedia = window.matchMedia(reducedMotionMediaQuery)

    const applyTransform = () => {
      const element = imageRef.current

      if (!element) {
        return
      }

      if (!desktopMedia.matches || reducedMotionMedia.matches) {
        element.style.transform = baseTransform
        return
      }

      const offsetY = Math.min(window.scrollY * 0.05, 40)
      element.style.transform = `translate(16%, calc(12% + ${offsetY}px))`
    }

    const handleScroll = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        applyTransform()
      })
    }

    const addScrollListener = () => {
      if (isScrollListening) {
        return
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      isScrollListening = true
    }

    const removeScrollListener = () => {
      if (!isScrollListening) {
        return
      }

      window.removeEventListener('scroll', handleScroll)
      isScrollListening = false
    }

    const syncMotion = () => {
      if (desktopMedia.matches && !reducedMotionMedia.matches) {
        addScrollListener()
        handleScroll()
        return
      }

      removeScrollListener()

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
        frameId = null
      }

      applyTransform()
    }

    syncMotion()
    desktopMedia.addEventListener('change', syncMotion)
    reducedMotionMedia.addEventListener('change', syncMotion)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      removeScrollListener()
      desktopMedia.removeEventListener('change', syncMotion)
      reducedMotionMedia.removeEventListener('change', syncMotion)
    }
  }, [])

  return (
    <img
      ref={imageRef}
      src={pigeon}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      style={initialStyle}
      className={`brand-pigeon ${className}`.trim()}
    />
  )
}

export const BrandPigeon = memo(BrandPigeonComponent)
