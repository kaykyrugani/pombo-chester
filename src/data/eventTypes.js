// TODO: quando as imagens finais forem adicionadas em src/assets/images/events/,
// trocar os imports temporarios abaixo pelos arquivos especificos:
// import eventParticular from '../assets/images/events/event-particular.jpeg';
// import eventCasaShow from '../assets/images/events/event-casa-show.jpeg';
// import eventCorporativo from '../assets/images/events/event-corporativo.jpeg';
// import eventFestival from '../assets/images/events/event-festival.jpeg';
import eventParticular from '../assets/images/hero/membros2.jpeg'
import eventCasaShow from '../assets/images/hero/bandajpg.jpg'
import eventCorporativo from '../assets/images/band/membro2.jpeg'
import eventFestival from '../assets/images/hero/membro3.jpeg'

const eventTypes = [
  {
    id: 1,
    title: 'Festas particulares',
    eyebrow: 'Celebrações',
    shortText: 'Aniversários, confraternizações e encontros com clima leve.',
    description:
      'A Pombo Chester cria uma experiência participativa para festas particulares, combinando repertório brasileiro conhecido, humor e presença de palco para envolver convidados de diferentes idades.',
    image: eventParticular,
  },
  {
    id: 2,
    title: 'Casas de show',
    eyebrow: 'Palco ao vivo',
    shortText: 'Energia, repertório popular e interação com a plateia.',
    description:
      'Em casas de show, a banda entrega uma apresentação com ritmo, presença e repertório pensado para manter o público junto do começo ao fim.',
    image: eventCasaShow,
  },
  {
    id: 3,
    title: 'Eventos corporativos',
    eyebrow: 'Empresas',
    shortText: 'Uma opção descontraída para sair do óbvio.',
    description:
      'Para empresas, confraternizações e ativações, a Pombo Chester oferece um show leve, divertido e memorável, mantendo profissionalismo sem perder a irreverência.',
    image: eventCorporativo,
  },
  {
    id: 4,
    title: 'Festivais e bares',
    eyebrow: 'Público junto',
    shortText: 'Clássicos nacionais, humor e brasilidade no palco.',
    description:
      'Em festivais e bares, o repertório brasileiro e a energia ao vivo aproximam banda e público, criando uma apresentação vibrante e participativa.',
    image: eventFestival,
  },
]

export default eventTypes
