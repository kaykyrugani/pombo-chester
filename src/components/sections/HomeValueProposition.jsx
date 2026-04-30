import SectionTitle from '../ui/SectionTitle.jsx'
import { BrandPigeon } from '../ui/brand-pigeon.tsx'

function HomeValueProposition() {
  return (
    <section className="home-value-prop section section-light" aria-label="Proposta de Valor">
      <BrandPigeon className="home-value-prop__pigeon" />
      <div className="container brand-pigeon-content">
        <SectionTitle
          title="O show que transforma seu evento em uma experiência inesquecível"
          subtitle="A Pombo Chester entrega muito mais do que música ao vivo. Criamos experiências completas com energia, humor e repertório brasileiro que envolve o público do começo ao fim."
        />
      </div>
    </section>
  )
}

export default HomeValueProposition
