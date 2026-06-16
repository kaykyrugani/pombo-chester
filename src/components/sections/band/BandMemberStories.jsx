import { useState } from 'react'
import Vocalista from '../../../assets/images/band/Vocalista.webp'
import Guitarrista from '../../../assets/images/band/Guitarrista.webp'
import Baixista from '../../../assets/images/band/Baixista.webp'
import Baterista from '../../../assets/images/band/Baterista.webp'

const memberStories = [
  {
    id: 1,
    role: 'Vocalista',
    name: 'Zé Neves',
    image: Vocalista,
    text: `Minha trajetória se inicia na adolescência fazendo apresentações com o violão na escola e em shows de talentos. Logo em seguida cheguei a me apresentar em bares da nossa cidade. Mas a trajetória se inicia mais fortemente no ano de 2020.

Antes de iniciar minha trajetória com a banda Pombo Chester, tive um projeto chamado Auge 21, iniciado em 2020, que fazia releituras de músicas do pop rock nacional e internacional. Com este projeto, participei de algumas lives beneficentes: Live Sarau de Casa e a Live Sunset do Extern Filmes.

Em Julho de 2022, iniciei minhas atividades com a banda Pombo Chester. Projeto que deu certo logo de cara e que conta com o reconhecimento municipal e regional. Com agenda lotada e shows enérgicos e de muita qualidade estamos conquistando nosso espaço e levando arte por todos os lugares que passamos`,
  },
  {
    id: 2,
    role: 'Guitarrista',
    name: 'Anderson',
    image: Guitarrista,
    text: `Comecei meus estudos na música aos 14 anos, tendo aulas de violão com o professor Simão de Paula (IMAS). Após esse período, foquei em aulas de guitarra com o professor Rodrigo Gavério (São sebastião do Paraíso). Comecei na area musical com shows em 2013, com bandas de Heavy metal - death or glory, Virgin Bitches e Hemorrogical.

Após um período de 4 anos fazendo apresentações com as bandas mencionadas, ingressei na banda Cadillac's Rock Band (Mococa-SP) em 2017, onde tocávamos na região, período no qual como profissional evoluí bastante, podendo ter experiencias em palcos maiores e com publicos maiores, cheguei a fazer abertura do show do Skank.
Neste mesmo período (2017) comecei a dar aulas de guitarra e violão.

Nos últimos anos tenho trabalhado com o Pombo Chester em várias cidades e eventos por todo o Brasil.`,
  },
  {
    id: 3,
    role: 'Baixista',
    name: 'Dodô Andrade',
    image: Baixista,
    text: 'Músico, contrabaixista desde 2017.\n\nEm agosto daquele ano, ingressei meus estudos no Conservatório Musical de Tatuí / Polo São José do Rio Pardo, onde estudei por 4 anos, tocando Contrabaixo Acústico (rabecão) e desenvolvendo aprendizado em teoria musical e prática. Também participei da Orquestra Juvenil, fiz apresentações e formei um trio instrumental na cidade com o mesmo instrumento.\n\nNo mesmo ano, em outubro, iniciei os estudos na escola musical IMAS com o grande baixista e referência Simão, dando início à minha caminhada no Contrabaixo Elétrico.\n\nCom o passar dos anos, atuei em bandas, grupos e trios, tocando estilos variados como samba, MPB, bossa nova, pop, pop rock, rock, axé, hip hop, forró, xote, baião, reggae e samba rock. Essa trajetória trouxe vasta experiência de palco, performance, click e VS.\n\nAtualmente acompanho a banda Pombo Chester, com mais de 200 shows em 3 anos, perpetuando sua essência por onde passa.\n\nFora dos palcos, ministro aulas de Contrabaixo no projeto Cultura em Movimento, além de aulas particulares de violão e teclado.',
  },
  {
    id: 4,
    role: 'Baterista',
    name: 'Matheus Dutra',
    image: Baterista,
    text: 'Iniciei minha trajetória na música aos 15 anos de idade, tendo aulas de bateria na minha cidade natal, Monte Santo de Minas.\n\nDesde então, participei de projetos musicais locais, bandas de baile e de garagem, festivais, eventos municipais diversos e outros, buscando me aproximar da música e me especializar profissionalmente.\n\nAtualmente toco na banda Pombo Chester, banda de pop-rock montessantense, a qual também sou co-fundador. Participamos de diversos eventos culturais da cidade, além de shows em Monte Santo e região.\n\nMeu objetivo é continuar contribuindo com a música e a cultura da melhor forma possível, pois acredito na importância destes na vida de qualquer pessoa.',
  },
]

function BandMemberStories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMember = memberStories[activeIndex]

  const handleMemberChange = (direction) => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction

      if (nextIndex < 0) {
        return memberStories.length - 1
      }

      if (nextIndex >= memberStories.length) {
        return 0
      }

      return nextIndex
    })
  }

  return (
    <section className="band-member-stories section section-dark" aria-labelledby="band-member-stories-title">
      <div className="container band-member-stories__container">
        <div className="band-member-stories__intro">
          <span className="eyebrow">No palco</span>
          <h2 id="band-member-stories-title">
            Quem constroi a experiencia da Pombo Chester no palco
          </h2>
          <p>
            Presenca, estrada e energia ao vivo aparecem em cada detalhe da
            banda, do primeiro acorde a ultima interacao com o publico.
          </p>
        </div>

        <div className="band-member-stories__layout" aria-live="polite">
          <div className="band-member-stories__media">
            <figure className="band-member-stories__image-frame" key={`image-${activeMember.id}`}>
              <img
                className="band-member-stories__image"
                src={activeMember.image}
                alt={activeMember.name}
              />
            </figure>
          </div>

          <div className="band-member-stories__content" key={`content-${activeMember.id}`}>
            <div className="band-member-stories__identity">
              <span className="band-member-stories__role">{activeMember.role}</span>
              <h3 className="band-member-stories__name">{activeMember.name}</h3>
            </div>
            <p className="band-member-stories__text">{activeMember.text}</p>
            <div className="band-member-stories__controls">
              <span>
                {String(activeIndex + 1).padStart(2, '0')} / {String(memberStories.length).padStart(2, '0')}
              </span>
              <button
                className="band-member-stories__button"
                type="button"
                onClick={() => handleMemberChange(1)}
                aria-label="Ver proximo integrante"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BandMemberStories
