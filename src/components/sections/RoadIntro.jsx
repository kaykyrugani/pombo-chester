import { BrandPigeon } from '../ui/brand-pigeon.tsx'
import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function RoadIntro() {
  return (
    <section className="road-intro section section-light" aria-label="Trajetória ao vivo">
      <div className="container road-intro__inner brand-pigeon-content">
        <div className="road-intro__copy">
          <span className="eyebrow">Trajetória</span>
          <h2>Experiência real em eventos e shows ao vivo</h2>
          <p className="text-lead">
            A Pombo Chester é uma banda para eventos que atua em diferentes
            tipos de palco, levando música ao vivo com energia, humor e
            repertório brasileiro.
          </p>
          <p>
            De festas particulares a casas de show, cada apresentação fortalece
            a experiência da banda e mostra sua capacidade de adaptação a
            diferentes públicos.
          </p>
          <p>
            A proposta é sempre a mesma: criar um show envolvente, participativo
            e memorável.
          </p>
        </div>

        <aside className="road-intro__note">
          <h3>Banda ativa com experiência em eventos reais</h3>
          <p>
            A presença da Pombo Chester em diferentes eventos mostra
            consistência, profissionalismo e experiência ao vivo, fatores
            essenciais para quem busca contratar uma banda confiável.
          </p>
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Solicitar orçamento
          </Button>
        </aside>
      </div>
      <BrandPigeon />
    </section>
  )
}

export default RoadIntro
