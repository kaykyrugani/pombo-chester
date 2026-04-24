import Button from '../ui/Button.jsx'

function AgendaPageHero() {
  return (
    <section className="agenda-page-hero" aria-label="Agenda">
      <div className="container agenda-page-hero__inner">
        <div className="agenda-page-hero__content">
          <span className="agenda-page-hero__badge">Agenda</span>
          <h1>Shows e eventos da Pombo Chester</h1>
          <p>
            Confira as próximas datas, locais e eventos onde a banda leva humor,
            brasilidade e energia ao vivo.
          </p>
          <div className="agenda-page-hero__actions">
            <Button href="#proximos-shows" variant="primary">
              Ver próximos shows
            </Button>
            <Button href="#" variant="outline">
              Contratar Show
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
