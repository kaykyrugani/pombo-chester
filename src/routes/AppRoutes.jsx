import { lazy, Suspense, useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'

const routeLoaders = {
  '/': () => import('../pages/Home/Home.jsx'),
  '/banda': () => import('../pages/Banda/Banda.jsx'),
  '/agenda': () => import('../pages/Agenda/Agenda.jsx'),
  '/na-estrada': () => import('../pages/NaEstrada/NaEstrada.jsx'),
  '/contato': () => import('../pages/ContatoMidia/ContatoMidia.jsx'),
}

const routes = {
  '/': lazy(routeLoaders['/']),
  '/banda': lazy(routeLoaders['/banda']),
  '/agenda': lazy(routeLoaders['/agenda']),
  '/na-estrada': lazy(routeLoaders['/na-estrada']),
  '/contato': lazy(routeLoaders['/contato']),
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname || '/'
}

function AppRoutes({ isPreloaderDone, onRouteTransition }) {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    function transitionToPath(nextPath, updateHistory) {
      const resolvedPath = routes[nextPath] ? nextPath : '/'

      onRouteTransition({
        beforeCommit: routeLoaders[resolvedPath],
        commit: () => {
          updateHistory?.()
          setCurrentPath(nextPath)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        },
      })
    }

    function handlePopState() {
      const nextPath = normalizePath(window.location.pathname)

      if (nextPath === currentPath) {
        return
      }

      transitionToPath(nextPath)
    }

    function handleClick(event) {
      const link = event.target.closest('a')

      if (!link || link.target || link.hasAttribute('download')) {
        return
      }

      const url = new URL(link.href)
      const nextPath = normalizePath(url.pathname)

      if (url.origin !== window.location.origin || !routes[nextPath]) {
        return
      }

      event.preventDefault()

      if (nextPath === currentPath) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      transitionToPath(nextPath, () => {
        window.history.pushState({}, '', nextPath)
      })
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleClick)
    }
  }, [currentPath, onRouteTransition])

  const Page = routes[currentPath] || routes['/']

  return (
    <Layout currentPath={routes[currentPath] ? currentPath : '/'}>
      <Suspense fallback={null}>
        <Page isPreloaderDone={isPreloaderDone} />
      </Suspense>
    </Layout>
  )
}

export default AppRoutes
