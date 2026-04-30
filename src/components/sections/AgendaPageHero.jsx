import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function AgendaPageHero() {
  return (
    <section className="agenda-page-hero" aria-label="Agenda de shows">
      <div className="container agenda-page-hero__inner">
        <div className="agenda-page-hero__content">
          <span className="agenda-page-hero__badge">Agenda de shows</span>
          <h1>Agenda de shows da Pombo Chester  Banda ao vivo para eventos</h1>
          <p>
            Confira as próximas datas e veja onde a Pombo Chester, banda para eventos com música ao vivo, vai se apresentar.
          </p>
          <div className="agenda-page-hero__actions">
            <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
              Ver disponibilidade para eventos
            </Button>
            <Button href={officialLinks.whatsapp} variant="outline" target="_blank" rel="noreferrer">
              Solicitar orçamento
            </Button>
          </div>
        </div>

        <div className="agenda-page-hero__marker" aria-hidden="true">
          <span>Agenda</span>
          <strong>Ao vivo</strong>
        </div>
      </div>
    </section>
  )
}

export default AgendaPageHero
