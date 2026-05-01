import BandCTA from '../../components/sections/BandCTA.jsx'
import BandEventTypes from '../../components/sections/BandEventTypes.jsx'
import BandIntro from '../../components/sections/BandIntro.jsx'
import BandMembers from '../../components/sections/BandMembers.jsx'
import BandPageHero from '../../components/sections/BandPageHero.jsx'
import BandValues from '../../components/sections/BandValues.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'

function Banda() {
  usePageMeta(
    'Banda para eventos em MG | Pombo Chester ao vivo',
    'Conheça a Pombo Chester, banda para eventos com música ao vivo, humor e energia. Ideal para festas, eventos corporativos e shows.',
    'banda para eventos, contratar banda, banda ao vivo, banda para festa, eventos corporativos, música ao vivo Minas Gerais'
  )

  return (
    <>
      <BandPageHero />
      <BandIntro />
      <BandValues />
      <BandEventTypes />
      <BandMembers />
      <BandCTA />
    </>
  )
}

export default Banda
