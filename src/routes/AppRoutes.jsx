import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/layout/Layout.jsx'
import Agenda from '../pages/Agenda/Agenda.jsx'
import Banda from '../pages/Banda/Banda.jsx'
import ContatoMidia from '../pages/ContatoMidia/ContatoMidia.jsx'
import Home from '../pages/Home/Home.jsx'
import NaEstrada from '../pages/NaEstrada/NaEstrada.jsx'

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

  const Page = useMemo(() => routes[currentPath] || Home, [currentPath])

  return (
    <Layout currentPath={routes[currentPath] ? currentPath : '/'}>
      <Page />
    </Layout>
  )
}

export default AppRoutes
