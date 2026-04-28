import vocalista from '../assets/images/band/Vocalista.webp'
import guitarrista from '../assets/images/band/Guitarrista.webp'
import baixista from '../assets/images/band/Baixista.webp'
import baterista from '../assets/images/band/Baterista.webp'

const members = [
  {
    id: 1,
    name: 'Vocalista',
    role: 'Voz / Performance',
    bio: 'Responsável por conduzir o público com humor, presença e energia no palco.',
    image: vocalista,
  },
  {
    id: 2,
    name: 'Guitarrista',
    role: 'Guitarra',
    bio: 'Leva riffs, clássicos brasileiros e peso musical para o repertório da Pombo Chester.',
    image: guitarrista,
  },
  {
    id: 3,
    name: 'Baixista',
    role: 'Baixo',
    bio: 'Sustenta o groove da banda e mantém a energia do show pulsando do começo ao fim.',
    image: baixista,
  },
  {
    id: 4,
    name: 'Baterista',
    role: 'Bateria',
    bio: 'Marca o ritmo da festa com pegada, presença e dinâmica ao vivo.',
    image: baterista,
  },
]

export { members }
export default members
