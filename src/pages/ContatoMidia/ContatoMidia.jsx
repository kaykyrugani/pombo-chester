import SocialLinks from '../../components/common/SocialLinks.jsx'
import ContactForm from '../../components/sections/ContactForm.jsx'
import Card from '../../components/ui/Card.jsx'
import SectionTitle from '../../components/ui/SectionTitle.jsx'

function ContatoMidia() {
  return (
    <section className="section section-light">
      <div className="container">
        <SectionTitle
          eyebrow="Contato + Midia"
          title="Contratacao e Press Kit"
          subtitle="Estrutura inicial para contatos oficiais, redes sociais, material de midia e pedidos de show."
        />
        <div className="grid grid-auto placeholder-box">
          <Card eyebrow="Contratacao" title="Pedido de show">
            <ContactForm />
          </Card>
          <Card eyebrow="Midia" title="Canais oficiais">
            <p>Links oficiais serao adicionados quando forem confirmados.</p>
            <SocialLinks />
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContatoMidia
