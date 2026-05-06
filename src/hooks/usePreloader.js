import { useCallback, useEffect, useRef, useState } from 'react'

const PRELOADER_TIMING = {
  intro: 850,
  split: 1150,
  minimumVisible: 2800,
  exit: 900,
}

function wait(milliseconds) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds)
  })
}

function waitForWindowLoad() {
  if (document.readyState === 'complete') {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    window.addEventListener('load', resolve, { once: true })
  })
}

function usePreloader() {
  const [phase, setPhase] = useState('intro')
  const [isVisible, setIsVisible] = useState(true)
  const isTransitioning = useRef(false)

  useEffect(() => {
    let isActive = true
    isTransitioning.current = true

    async function runPreloader() {
      const startedAt = performance.now()
      const appReady = waitForWindowLoad()

      await wait(PRELOADER_TIMING.intro)
      if (!isActive) return

      setPhase('split')

      await Promise.all([
        appReady,
        wait(PRELOADER_TIMING.split),
        wait(Math.max(0, PRELOADER_TIMING.minimumVisible - (performance.now() - startedAt))),
      ])

      if (!isActive) return

      setPhase('exit')

      await wait(PRELOADER_TIMING.exit)
      if (!isActive) return

      setPhase('done')
      setIsVisible(false)
      isTransitioning.current = false
    }

    runPreloader()

    return () => {
      isActive = false
      isTransitioning.current = false
    }
  }, [])

  const runRouteTransition = useCallback(async ({ beforeCommit, commit }) => {
    if (isTransitioning.current) {
      return false
    }

    isTransitioning.current = true

    try {
      setPhase('intro')
      setIsVisible(true)

      await wait(PRELOADER_TIMING.intro)
      setPhase('split')

      await Promise.all([
        beforeCommit?.(),
        wait(PRELOADER_TIMING.split),
      ])

      commit?.()

      setPhase('exit')
      await wait(PRELOADER_TIMING.exit)

      setPhase('done')
      setIsVisible(false)

      return true
    } catch {
      setPhase('exit')
      await wait(PRELOADER_TIMING.exit)
      setPhase('done')
      setIsVisible(false)

      return false
    } finally {
      isTransitioning.current = false
    }
  }, [])

  return { phase, isVisible, runRouteTransition }
}

export default usePreloader
