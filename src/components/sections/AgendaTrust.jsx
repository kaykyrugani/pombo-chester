import SectionTitle from '../ui/SectionTitle.jsx'

const reasons = [
  {
    id: 1,
    title: 'Shows ao vivo frequentes',
    description: 'A agenda mostra atividade real e consistent da banda'
  },
  {
    id: 2,
    title: 'Experiência com diferentes públicos',
    description: 'Festas, eventos corporativos e casas de show'
  },
  {
    id: 3,
    title: 'Atuação em eventos e palcos variados',
    description: 'Experiência comprovada em diferentes tipos de apresentação'
  },
  {
    id: 4,
    title: 'Banda ativa e em crescimento',
    description: 'Agenda atualizada demonstra engajamento contínuo'
  }
]

function AgendaTrust() {
  return (
    <section className="agenda-trust section section-light" aria-label="Por que acompanhar a agenda">
      <div className="container">
        <SectionTitle
          title="Por que acompanhar a agenda da Pombo Chester?"
          subtitle="A agenda mostra não só onde a banda vai tocar, mas também a experiência real que levamos para cada evento."
        />

        <div className="agenda-trust__grid">
          {reasons.map((reason) => (
            <article key={reason.id} className="agenda-trust__card">
              <h3 className="agenda-trust__title">{reason.title}</h3>
              <p className="agenda-trust__description">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgendaTrust
