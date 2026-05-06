import HomeHero from '../../components/sections/HomeHero.jsx'
import HomeValueProposition from '../../components/sections/HomeValueProposition.jsx'
import HomeDifferentials from '../../components/sections/HomeDifferentials.jsx'
import HomeNextShows from '../../components/sections/HomeNextShows.jsx'
import SpotifyEmbed from '../../components/sections/SpotifyEmbed.jsx'
import InstagramFeed from '../../components/sections/InstagramFeed.jsx'
import HomeFinalCTA from '../../components/sections/HomeFinalCTA.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'

function Home({ isPreloaderDone = true }) {
  usePageMeta(
    'Banda para eventos ao vivo | Contratar banda Pombo Chester',
    'Contrate banda para eventos com música ao vivo, humor e energia. A Pombo Chester atende festas, eventos corporativos e shows em todo o Brasil.',
    'banda para eventos, contratar banda, banda ao vivo, banda para festa, eventos corporativos, música ao vivo'
  )

  return (
    <>
      <HomeHero canAnimate={isPreloaderDone} />
      <HomeValueProposition />
      <HomeDifferentials />
      <HomeNextShows />
      <SpotifyEmbed />
      <InstagramFeed />
      <HomeFinalCTA />
    </>
  )
}

export default Home
