import BandCTA from '../../components/sections/BandCTA.jsx'
import BandIntro from '../../components/sections/BandIntro.jsx'
import BandMembers from '../../components/sections/BandMembers.jsx'
import BandPageHero from '../../components/sections/BandPageHero.jsx'
import BandValues from '../../components/sections/BandValues.jsx'

function Banda() {
  return (
    <>
      <BandPageHero />
      <BandIntro />
      <BandValues />
      <BandMembers />
      <BandCTA />
    </>
  )
}

export default Banda
