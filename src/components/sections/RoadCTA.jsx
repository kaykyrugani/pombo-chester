import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function RoadCTA() {
  return (
    <section className="road-cta section section-dark" aria-label="Contratar show">
      <div className="container road-cta__inner">
        <span className="road-cta__eyebrow">Próximo palco</span>
        <h2>Seu evento pode ser o próximo palco</h2>
        <p>
          Se você procura uma banda para eventos com experiência real, presença
          de palco e música ao vivo, a Pombo Chester pode levar essa energia
          para o seu evento.
        </p>
        <div className="road-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento
          </Button>
          <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
            Falar com a banda no WhatsApp
          </Button>
        </div>
        <p className="road-cta__local">
          A Pombo Chester é uma banda para eventos com base em Monte Santo de
          Minas - MG, atendendo festas, eventos corporativos, bares e casas de
          show em todo o Brasil.
        </p>
      </div>
    </section>
  )
}

export default RoadCTA
