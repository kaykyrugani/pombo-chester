import Button from '../ui/Button.jsx'

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
          <Button href="#" variant="primary">
            Contratar Show
          </Button>
          <Button href="#" variant="outline">
            Falar com a banda
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AgendaCTA
