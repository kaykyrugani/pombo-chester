import Button from '../ui/Button.jsx'
import membro1 from '../../assets/images/band/membro1.webp'
import membro2 from '../../assets/images/band/membro2.webp'
import membro3 from '../../assets/images/band/membro3.webp'
import membro4 from '../../assets/images/band/membro4.webp'
import officialLinks from '../../data/officialLinks.js'

const members = [
  { name: 'Integrante da Pombo Chester', image: membro1 },
  { name: 'Integrante da Pombo Chester', image: membro2 },
  { name: 'Integrante da Pombo Chester', image: membro3 },
  { name: 'Integrante da Pombo Chester', image: membro4 },
]

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="container">
        <div className="home-hero__content">
          <span className="home-hero__badge">Banda para eventos com música ao vivo</span>
          <h1 id="home-hero-title">Banda para eventos ao vivo que transforma qualquer festa em um show inesquecível</h1>
          <p className="home-hero__subtitle">
            A Pombo Chester é uma banda para eventos com música ao vivo, humor e energia que anima festas, eventos corporativos e casas de show em Minas Gerais e todo o Brasil.
          </p>
          <ul className="home-hero__benefits">
            <li>Shows para eventos corporativos, festas e festivais</li>
            <li>Repertório brasileiro com interação com o público</li>
            <li>Estrutura profissional e presença de palco</li>
          </ul>
          <div className="home-hero__actions">
            <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
              Solicitar orçamento no WhatsApp
            </Button>
            <Button href="/agenda" variant="outline">
              Ver disponibilidade da banda
            </Button>
          </div>
        </div>

        <div className="home-hero__gallery" aria-label="Integrantes da banda Pombo Chester">
          {members.map((member, index) => (
            <figure className="home-hero__member" key={`${member.name}-${index}`}>
              <img src={member.image} alt={`${member.name} ${index + 1}`} decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
