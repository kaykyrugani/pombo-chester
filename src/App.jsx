import AppRoutes from './routes/AppRoutes.jsx'
import Preloader from './components/common/Preloader.jsx'
import usePreloader from './hooks/usePreloader.js'

function App() {
  const { phase, isVisible, runRouteTransition } = usePreloader()

  return (
    <>
      <AppRoutes onRouteTransition={runRouteTransition} />
      {isVisible && <Preloader phase={phase} />}
    </>
  )
}

export default App
