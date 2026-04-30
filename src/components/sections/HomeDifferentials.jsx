import SectionTitle from '../ui/SectionTitle.jsx'

const differentials = [
  {
    id: 1,
    label: 'Palco',
    title: 'Energia ao vivo que engaja o público',
    description: 'Performance que envolve o público do começo ao fim com presença e carisma'
  },
  {
    id: 2,
    label: 'Repertório',
    title: 'Repertório adaptável',
    description: 'Repertório brasileiro customizável para diferentes tipos de evento'
  },
  {
    id: 3,
    label: 'Estrada',
    title: 'Experiência comprovada',
    description: 'Shows em eventos corporativos, festas, casas de show e festivais'
  },
  {
    id: 4,
    label: 'Conexão',
    title: 'Interação com o público',
    description: 'Humor irreverente e conexão genuína que faz diferença no evento'
  },
  {
    id: 5,
    label: 'Produção',
    title: 'Estrutura profissional',
    description: 'Som de qualidade e performance pensada para agências e produtoras'
  },
  {
    id: 6,
    label: 'Agenda',
    title: 'Flexibilidade de atendimento',
    description: 'Atuamos em Monte Santo de Minas e em todo o Brasil'
  }
]

function HomeDifferentials() {
  return (
    <section className="home-differentials section section-dark" aria-label="Diferenciais da Pombo Chester">
      <div className="container">
        <SectionTitle
          title="Por que contratar a Pombo Chester para o seu evento?"
          subtitle=""
        />
        
        <div className="home-differentials__grid">
          {differentials.map((diff) => (
            <div key={diff.id} className="home-differentials__card dark-feature-card">
              <span className="home-differentials__card-label dark-feature-card__meta">
                <span className="dark-feature-card__dot" aria-hidden="true" />
                {diff.label}
              </span>
              <h3 className="home-differentials__card-title dark-feature-card__title">{diff.title}</h3>
              <p className="home-differentials__card-desc dark-feature-card__text">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeDifferentials
