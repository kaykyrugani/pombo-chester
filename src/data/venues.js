import casaShow from '../assets/images/events/CasaShow.webp'
import bares from '../assets/images/events/Bares.webp'
import festaParticular from '../assets/images/events/FestaParticular.webp'
import festivais from '../assets/images/events/Festivais.webp'
import noiteBR from '../assets/images/events/NoiteBR.webp'

const venues = [
  {
    id: 1,
    title: 'Casa de Show Exemplo',
    type: 'Casa de show',
    city: 'São Paulo',
    state: 'SP',
    description:
      'Registro de apresentação da Pombo Chester em uma noite de música, humor e participação do público.',
    image: casaShow,
  },
  {
    id: 2,
    title: 'Bar Cultural Exemplo',
    type: 'Bar e evento cultural',
    city: 'Campinas',
    state: 'SP',
    description: 'Show com repertório brasileiro, energia ao vivo e clima de festa do começo ao fim.',
    image: bares,
  },
  {
    id: 3,
    title: 'Evento Particular',
    type: 'Festa particular',
    city: 'Santos',
    state: 'SP',
    description: 'Formato pensado para celebrações com humor, brasilidade e interação com os convidados.',
    image: festaParticular,
  },
  {
    id: 4,
    title: 'Palco Aberto',
    type: 'Festival',
    city: 'São Bernardo',
    state: 'SP',
    description: 'Participação em evento com público diverso, repertório popular e presença de palco.',
    image: festivais,
  },
  {
    id: 5,
    title: 'Noite Brasileira',
    type: 'Evento temático',
    city: 'Guarulhos',
    state: 'SP',
    description: 'Uma apresentação voltada para clássicos nacionais, nostalgia e energia coletiva.',
    image: noiteBR,
  },
]

export { venues }
export default venues
