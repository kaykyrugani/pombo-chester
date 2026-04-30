import SectionTitle from '../ui/SectionTitle.jsx'

const testimonials = [
  {
    id: 1,
    quote: 'Animaram nosso evento do começo ao fim com muita profissionalismo e energia'
  },
  {
    id: 2,
    quote: 'Interação incrível com o público, todos queriam mais'
  },
  {
    id: 3,
    quote: 'Uma das melhores bandas ao vivo que já vimos, super recomendamos'
  }
]

function BandTestimonials() {
  return (
    <section className="band-testimonials section section-dark" aria-label="Depoimentos">
      <div className="container">
        <SectionTitle
          title="Quem contrata a Pombo Chester recomenda"
          subtitle=""
        />

        <div className="band-testimonials__grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="band-testimonials__card">
              <p className="band-testimonials__quote">"{testimonial.quote}"</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BandTestimonials
