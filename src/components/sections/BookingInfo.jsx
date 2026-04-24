import SectionTitle from '../ui/SectionTitle.jsx'

const bookingSteps = [
  {
    title: '1. Envie sua ideia',
    text: 'Conte a data, cidade, tipo de evento e estrutura disponível.',
  },
  {
    title: '2. Confirmamos disponibilidade',
    text: 'A banda avalia agenda, formato do show e detalhes técnicos.',
  },
  {
    title: '3. Fechamos o show',
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

        <div className="booking-info__grid">
          {bookingSteps.map((step) => (
            <article className="booking-step-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingInfo
