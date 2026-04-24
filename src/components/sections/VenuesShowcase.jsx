import venues from '../../data/venues.js'
import ExpandingVenueCards from '../common/ExpandingVenueCards.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function VenuesShowcase() {
  return (
    <section className="venues-showcase section section-muted" aria-label="Locais e eventos">
      <div className="container">
        <SectionTitle
          eyebrow="Palcos"
          title="Onde a banda já marcou presença"
          subtitle="Casas, eventos e festas que ajudam a contar a trajetória da Pombo Chester ao vivo."
        />

        <ExpandingVenueCards items={venues} defaultActiveIndex={0} />
      </div>
    </section>
  )
}

export default VenuesShowcase
