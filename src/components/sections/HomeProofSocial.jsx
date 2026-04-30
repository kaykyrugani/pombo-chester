import SectionTitle from '../ui/SectionTitle.jsx'

const testimonials = [
  {
    id: 1,
    quote: 'Animaram nosso evento do começo ao fim com muita profissionalismo e energia',
    author: 'Cliente Corporativo'
  },
  {
    id: 2,
    quote: 'A banda levou a festa para outro nível, convidados pediram bis',
    author: 'Produtor de Eventos'
  },
  {
    id: 3,
    quote: 'Humores e presença de palco que fizeram toda a diferença',
    author: 'Organizador de Casamento'
  }
]

function HomeProofSocial() {
  return (
    <section className="home-proof-social section section-light" aria-label="Quem já contratou aprovou">
      <div className="container">
        <SectionTitle
          title="Quem já levou a Pombo Chester aprovou"
          subtitle="Veja o feedback de quem já contratou a banda para seus eventos"
        />
        
        <div className="home-proof-social__grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="home-proof-social__card">
              <p className="home-proof-social__quote">{testimonial.quote}</p>
              <footer className="home-proof-social__author">{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProofSocial
