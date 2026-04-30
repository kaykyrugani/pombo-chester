import venues from '../../data/venues.js'
import ExpandingVenueCards from '../common/ExpandingVenueCards.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function VenuesShowcase() {
  return (
    <section className="venues-showcase section section-muted" aria-label="Locais e eventos">
      <div className="container">
        <SectionTitle
          eyebrow="Palcos"
          title="Eventos, festas e casas de show onde já nos apresentamos"
          subtitle="Confira alguns dos palcos que fazem parte da trajetória da Pombo Chester como banda ao vivo para eventos."
        />
        <p className="venues-showcase__note">
          Alguns registros representam formatos e exemplos de apresentações.
        </p>

        <ExpandingVenueCards items={venues} defaultActiveIndex={0} />
      </div>
    </section>
  )
}

export default VenuesShowcase
