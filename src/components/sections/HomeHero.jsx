import Button from '../ui/Button.jsx'
import membro1 from '../../assets/images/band/membro1.jpeg'
import membro2 from '../../assets/images/band/membro2.jpeg'
import membro3 from '../../assets/images/band/membro3.jpeg'
import membro4 from '../../assets/images/band/membro4.jpeg'

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
          <span className="home-hero__badge">Shows, festas e eventos com alma brasileira</span>
          <h1 id="home-hero-title">O show que transforma seu evento em festa de verdade</h1>
          <p className="home-hero__subtitle">
            A Pombo Chester leva repertorio brasileiro, humor irreverente e energia
            ao vivo para casas de show, festas e eventos que precisam de palco aceso.
          </p>
          <div className="home-hero__actions">
            <Button href="/contato" variant="primary">
              Contratar Show
            </Button>
            <Button href="/agenda" variant="outline">
              Ver Agenda
            </Button>
          </div>
        </div>

        <div className="home-hero__gallery" aria-label="Integrantes da banda Pombo Chester">
          {members.map((member, index) => (
            <figure className="home-hero__member" key={`${member.name}-${index}`}>
              <img src={member.image} alt={`${member.name} ${index + 1}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
