import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function AgendaCTA() {
  return (
    <section className="agenda-cta section section-dark" aria-label="Contratar show">
      <div className="container agenda-cta__inner">
        <span className="agenda-cta__eyebrow">Datas e shows</span>
        <h2>Tem uma data em mente?</h2>
        <p>
          Chame a Pombo Chester para festas, bares, eventos e palcos que precisam
          de música brasileira, humor e energia ao vivo.
        </p>
        <div className="agenda-cta__actions">
          <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
            Contratar Show
          </Button>
          <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
            Falar com a banda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AgendaCTA
