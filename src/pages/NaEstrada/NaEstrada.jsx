import { venues } from '../../data/venues.js'
import Card from '../../components/ui/Card.jsx'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

function NaEstrada() {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="Na Estrada"
          title="Palcos e Historias"
          subtitle="Pagina base para registrar locais onde a banda ja tocou, bastidores e material de prova social."
        />
        <div className="grid grid-auto placeholder-box">
          {venues.map((venue) => (
            <Card eyebrow={venue.city} title={venue.name} key={venue.id}>
              <p>{venue.note}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NaEstrada
