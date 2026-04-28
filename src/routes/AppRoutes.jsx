import { lazy, Suspense, useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'

const Agenda = lazy(() => import('../pages/Agenda/Agenda.jsx'))
const Banda = lazy(() => import('../pages/Banda/Banda.jsx'))
const ContatoMidia = lazy(() => import('../pages/ContatoMidia/ContatoMidia.jsx'))
const Home = lazy(() => import('../pages/Home/Home.jsx'))
const NaEstrada = lazy(() => import('../pages/NaEstrada/NaEstrada.jsx'))

const routes = {
  '/': Home,
  '/banda': Banda,
  '/agenda': Agenda,
  '/na-estrada': NaEstrada,
  '/contato': ContatoMidia,
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname || '/'
}

function AppRoutes() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    function handlePopState() {
      setCurrentPath(normalizePath(window.location.pathname))
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

      if (nextPath === normalizePath(window.location.pathname)) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      window.history.pushState({}, '', nextPath)
      setCurrentPath(nextPath)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const Page = routes[currentPath] || Home

  return (
    <Layout currentPath={routes[currentPath] ? currentPath : '/'}>
      <Suspense fallback={null}>
        <Page />
      </Suspense>
    </Layout>
  )
}

export default AppRoutes
