import { useEffect, useState } from 'react'

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

  useEffect(() => {
    let isActive = true

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
    }

    runPreloader()

    return () => {
      isActive = false
    }
  }, [])

  return { phase, isVisible }
}

export default usePreloader
