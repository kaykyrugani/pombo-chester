import SectionTitle from '../ui/SectionTitle.jsx'

const bookingSteps = [
  {
    label: 'PASSO 1',
    title: 'Envie sua ideia',
    text: 'Inclua data, cidade, tipo de evento e estrutura disponível.',
  },
  {
    label: 'PASSO 2',
    title: 'Verificamos disponibilidade',
    text: 'A banda analisa agenda e formato ideal para o seu evento.',
  },
  {
    label: 'PASSO 3',
    title: 'Confirmamos o show',
    text: 'Com tudo alinhado, sua data entra na agenda e o evento ganha vida.',
  },
]

function BookingInfo() {
  return (
    <section className="booking-info section section-dark" aria-label="Como contratar">
      <div className="container">
        <SectionTitle
          eyebrow="Contratação"
          title="Como contratar a Pombo Chester para seu evento"
          subtitle="Um processo simples para garantir música ao vivo no seu evento."
        />

        <div className="dark-feature-panel">
          <div className="booking-info__grid">
            {bookingSteps.map((step, index) => (
              <article
                className={`dark-feature-card booking-step-card${index === 0 ? ' dark-feature-card--accent' : ''}`}
                key={step.title}
              >
                <div className="dark-feature-card__meta">
                  <span className="dark-feature-card__dot" aria-hidden="true" />
                  <span className="dark-feature-card__label">{step.label}</span>
                </div>
                <h3 className="dark-feature-card__title">{step.title}</h3>
                <p className="dark-feature-card__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingInfo
