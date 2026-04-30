import AgendaCTA from '../../components/sections/AgendaCTA.jsx'
import AgendaLocation from '../../components/sections/AgendaLocation.jsx'
import AgendaPageHero from '../../components/sections/AgendaPageHero.jsx'
import AgendaShows from '../../components/sections/AgendaShows.jsx'
import AgendaTrust from '../../components/sections/AgendaTrust.jsx'
import BookingInfo from '../../components/sections/BookingInfo.jsx'
import EventTypes from '../../components/sections/EventTypes.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'

function Agenda() {
  usePageMeta(
    'Agenda de shows | Pombo Chester banda ao vivo para eventos',
    'Veja a agenda de shows da Pombo Chester e descubra onde assistir ou contratar a banda para eventos com música ao vivo.',
    'agenda de shows, banda ao vivo, contratar banda, shows ao vivo, banda para eventos'
  )

  return (
    <>
      <AgendaPageHero />
      <AgendaShows />
      <AgendaLocation />
      <AgendaTrust />
      <EventTypes />
      <BookingInfo />
      <AgendaCTA />
    </>
  )
}

export default Agenda
