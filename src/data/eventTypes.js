import festaParticular from '../assets/images/events/FestaParticular.webp'
import casaShow from '../assets/images/events/CasaShow.webp'
import noiteBR from '../assets/images/events/NoiteBR.webp'
import festivais from '../assets/images/events/Festivais.webp'

const eventTypes = [
  {
    id: 1,
    title: 'Festas particulares',
    eyebrow: 'Celebrações',
    shortText: 'Aniversários, confraternizações e encontros com clima leve.',
    description:
      'A Pombo Chester cria uma experiência participativa para festas particulares, combinando repertório brasileiro conhecido, humor e presença de palco para envolver convidados de diferentes idades.',
    image: festaParticular,
  },
  {
    id: 2,
    title: 'Casas de show',
    eyebrow: 'Palco ao vivo',
    shortText: 'Energia, repertório popular e interação com a plateia.',
    description:
      'Em casas de show, a banda entrega uma apresentação com ritmo, presença e repertório pensado para manter o público junto do começo ao fim.',
    image: casaShow,
  },
  {
    id: 3,
    title: 'Eventos corporativos',
    eyebrow: 'Empresas',
    shortText: 'Uma opção descontraída para empresas que querem sair do óbvio.',
    description:
      'Para empresas, confraternizações e ativações, a Pombo Chester oferece um show leve, divertido e memorável, mantendo profissionalismo sem perder a irreverência.',
    image: noiteBR,
  },
  {
    id: 4,
    title: 'Festivais e bares',
    eyebrow: 'Público junto',
    shortText: 'Clássicos nacionais, humor e brasilidade no palco.',
    description:
      'Em festivais e bares, o repertório brasileiro e a energia ao vivo aproximam banda e público, criando uma apresentação vibrante e participativa.',
    image: festivais,
  },
]

export default eventTypes
