import casaShow from '../assets/images/events/CasaShow.webp'
import bares from '../assets/images/events/Bares.webp'
import festaParticular from '../assets/images/events/FestaParticular.webp'
import festivais from '../assets/images/events/Festivais.webp'
import noiteBR from '../assets/images/events/NoiteBR.webp'

const venues = [
  {
    id: 1,
    title: 'Evento Particular',
    type: 'Festa privada',
    description:
      'Formato ideal para festas privadas, com repertório brasileiro, interação com convidados e clima descontraído.',
    image: festaParticular,
  },
  {
    id: 2,
    title: 'Casa de Show',
    type: 'Casa de show',
    description:
      'Apresentações com energia ao vivo, presença de palco e repertório pensado para engajar o público.',
    image: casaShow,
  },
  {
    id: 3,
    title: 'Bar Cultural',
    type: 'Bar e evento cultural',
    description: 'Show com clima leve, músicas conhecidas e conexão direta com o público.',
    image: bares,
  },
  {
    id: 4,
    title: 'Festival / Palco Aberto',
    type: 'Festival e palco aberto',
    description: 'Eventos com grande público, repertório popular e presença marcante no palco.',
    image: festivais,
  },
  {
    id: 5,
    title: 'Noite Brasileira',
    type: 'Evento temático',
    description: 'Show temático com clássicos nacionais e alta interação com o público.',
    image: noiteBR,
  },
]

export { venues }
export default venues
