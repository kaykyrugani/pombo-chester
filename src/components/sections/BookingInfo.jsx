import SectionTitle from '../ui/SectionTitle.jsx'

const bookingSteps = [
  {
    label: 'PASSO 1',
    title: 'Envie sua ideia',
    text: 'Conte a data, cidade, tipo de evento e estrutura disponível.',
  },
  {
    label: 'PASSO 2',
    title: 'Confirmamos disponibilidade',
    text: 'A banda avalia agenda, formato do show e detalhes técnicos.',
  },
  {
    label: 'PASSO 3',
    title: 'Fechamos o show',
    text: 'Com tudo alinhado, sua data entra na agenda e o palco vira festa.',
  },
]

function BookingInfo() {
  return (
    <section className="booking-info section section-dark" aria-label="Como contratar">
      <div className="container">
        <SectionTitle
          eyebrow="Contratação"
          title="Como levar a Pombo Chester para o seu evento?"
          subtitle="Um caminho direto para consultar agenda, alinhar formato e transformar a data em show."
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
