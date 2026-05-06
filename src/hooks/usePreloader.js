import { useCallback, useEffect, useRef, useState } from 'react'

const PRELOADER_TIMING = {
  intro: 420,
  split: 620,
  minimumVisible: 1150,
  exit: 560,
  contentReadyFallback: 1800,
}

function wait(milliseconds) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds)
  })
}

function usePreloader() {
  const [phase, setPhase] = useState('intro')
  const [isVisible, setIsVisible] = useState(true)
  const contentReady = useRef(false)
  const isTransitioning = useRef(false)
  const [{ promise: contentReadyPromise, resolve: resolveContentReady }] = useState(() => {
    let resolveContentReadyPromise
    const promise = new Promise((resolve) => {
      resolveContentReadyPromise = resolve
    })

    return { promise, resolve: resolveContentReadyPromise }
  })

  useEffect(() => {
    let isActive = true
    isTransitioning.current = true

    async function runPreloader() {
      const startedAt = performance.now()
      const appReady = Promise.race([
        contentReadyPromise,
        wait(PRELOADER_TIMING.contentReadyFallback),
      ])

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
  }, [contentReadyPromise])

  const markContentReady = useCallback(() => {
    if (contentReady.current) {
      return
    }

    contentReady.current = true
    resolveContentReady()
  }, [resolveContentReady])

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

  return { phase, isVisible, markContentReady, runRouteTransition }
}

export default usePreloader
