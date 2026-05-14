import RoadCTA from '../../components/sections/RoadCTA.jsx'
import RoadHighlights from '../../components/sections/RoadHighlights.jsx'
import RoadIntro from '../../components/sections/RoadIntro.jsx'
import RoadPageHero from '../../components/sections/RoadPageHero.jsx'
import RoadVideos from '../../components/sections/RoadVideos.jsx'
import VenuesShowcase from '../../components/sections/VenuesShowcase.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'

function NaEstrada({ isPreloaderDone = true }) {
  usePageMeta(
    'Por onde a Pombo Chester já tocou | Banda para eventos ao vivo',
    'Conheça os eventos e palcos onde a Pombo Chester já se apresentou e veja por que contratar a banda para seu evento.',
    'banda para eventos, banda ao vivo, contratar banda, show ao vivo, banda para festas, banda para eventos em Minas Gerais'
  )

  return (
    <>
      <RoadPageHero canAnimate={isPreloaderDone} />
      <RoadIntro />
      <VenuesShowcase />
      <RoadHighlights />
      <RoadVideos />
      <RoadCTA />
    </>
  )
}

export default NaEstrada
