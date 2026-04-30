import festaParticular from '../assets/images/events/FestaParticular.webp'
import casaShow from '../assets/images/events/CasaShow.webp'
import noiteBR from '../assets/images/events/NoiteBR.webp'
import festivais from '../assets/images/events/Festivais.webp'

const eventTypes = [
  {
    id: 1,
    title: 'Festas particulares',
    eyebrow: 'Celebrações',
    shortText: 'Aniversários, confraternizações e eventos privados com energia.',
    description:
      'Shows ideais para aniversários, confraternizações e eventos privados, com repertório brasileiro e interação com convidados.',
    image: festaParticular,
  },
  {
    id: 2,
    title: 'Casas de show',
    eyebrow: 'Palco ao vivo',
    shortText: 'Presença marcante e repertório pensado para engajar.',
    description:
      'Apresentações com presença de palco, repertório popular e performance pensada para engajar o público do início ao fim.',
    image: casaShow,
  },
  {
    id: 3,
    title: 'Eventos corporativos',
    eyebrow: 'Empresas',
    shortText: 'Entretenimento profissional e memorável.',
    description:
      'Uma banda para eventos corporativos que entrega entretenimento profissional, leve e marcante para empresas.',
    image: noiteBR,
  },
  {
    id: 4,
    title: 'Festivais e bares',
    eyebrow: 'Público junto',
    shortText: 'Energia ao vivo e repertório que aproxima a plateia.',
    description:
      'Shows com energia ao vivo, repertório brasileiro e interação que aproximam banda e público.',
    image: festivais,
  },
]

export default eventTypes
