import AppRoutes from './routes/AppRoutes.jsx'
import Preloader from './components/common/Preloader.jsx'
import usePreloader from './hooks/usePreloader.js'

function App() {
  const { phase, isVisible } = usePreloader()

  return (
    <>
      <AppRoutes />
      {isVisible && <Preloader phase={phase} />}
    </>
  )
}

export default App
