import bandImage from '../assets/images/hero/bandajpg.jpg'
import venueFallback2 from '../assets/images/hero/membros2.jpeg'
import venueFallback3 from '../assets/images/hero/membro1.jpeg'
import venueFallback4 from '../assets/images/hero/membro3.jpeg'
import venueFallback5 from '../assets/images/hero/membro4.jpeg'

// Trocar pelos arquivos finais em src/assets/images/venues/venue1.jpeg a venue5.jpeg
// quando os registros oficiais dos locais estiverem disponíveis.
const venues = [
  {
    id: 1,
    title: 'Casa de Show Exemplo',
    type: 'Casa de show',
    city: 'São Paulo',
    state: 'SP',
    description:
      'Registro de apresentação da Pombo Chester em uma noite de música, humor e participação do público.',
    image: bandImage,
  },
  {
    id: 2,
    title: 'Bar Cultural Exemplo',
    type: 'Bar e evento cultural',
    city: 'Campinas',
    state: 'SP',
    description: 'Show com repertório brasileiro, energia ao vivo e clima de festa do começo ao fim.',
    image: venueFallback2,
  },
  {
    id: 3,
    title: 'Evento Particular',
    type: 'Festa particular',
    city: 'Santos',
    state: 'SP',
    description: 'Formato pensado para celebrações com humor, brasilidade e interação com os convidados.',
    image: venueFallback3,
  },
  {
    id: 4,
    title: 'Palco Aberto',
    type: 'Festival',
    city: 'São Bernardo',
    state: 'SP',
    description: 'Participação em evento com público diverso, repertório popular e presença de palco.',
    image: venueFallback4,
  },
  {
    id: 5,
    title: 'Noite Brasileira',
    type: 'Evento temático',
    city: 'Guarulhos',
    state: 'SP',
    description: 'Uma apresentação voltada para clássicos nacionais, nostalgia e energia coletiva.',
    image: venueFallback5,
  },
]

export { venues }
export default venues
