import AgendaCTA from '../../components/sections/AgendaCTA.jsx'
import AgendaPageHero from '../../components/sections/AgendaPageHero.jsx'
import AgendaShows from '../../components/sections/AgendaShows.jsx'
import BookingInfo from '../../components/sections/BookingInfo.jsx'
import EventTypes from '../../components/sections/EventTypes.jsx'

function Agenda() {
  return (
    <>
      <AgendaPageHero />
      <AgendaShows />
      <EventTypes />
      <BookingInfo />
      <AgendaCTA />
    </>
  )
}

export default Agenda
