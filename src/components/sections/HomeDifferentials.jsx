import SectionTitle from '../ui/SectionTitle.jsx'

const differentials = [
  {
    id: 1,
    title: 'Energia ao vivo que engaja o público',
    description: 'Performance que envolve o público do começo ao fim com presença e carisma'
  },
  {
    id: 2,
    title: 'Repertório adaptável',
    description: 'Repertório brasileiro customizável para diferentes tipos de evento'
  },
  {
    id: 3,
    title: 'Experiência comprovada',
    description: 'Shows em eventos corporativos, festas, casas de show e festivais'
  },
  {
    id: 4,
    title: 'Interação com o público',
    description: 'Humor irreverente e conexão genuína que faz diferença no evento'
  },
  {
    id: 5,
    title: 'Estrutura profissional',
    description: 'Som de qualidade e performance pensada para agências e produtoras'
  },
  {
    id: 6,
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
            <div key={diff.id} className="home-differentials__card">
              <h3 className="home-differentials__card-title">{diff.title}</h3>
              <p className="home-differentials__card-desc">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeDifferentials
