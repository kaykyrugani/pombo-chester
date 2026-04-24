import Button from '../ui/Button.jsx'

function ContactForm() {
  return (
    <form className="form-grid">
      <label>
        Nome
        <input name="name" type="text" placeholder="Seu nome" />
      </label>
      <label>
        Contato
        <input name="contact" type="text" placeholder="E-mail ou telefone" />
      </label>
      <label>
        Mensagem
        <textarea name="message" placeholder="Conte sobre o evento" rows="5" />
      </label>
      <Button type="submit" variant="primary">
        Enviar Pedido
      </Button>
    </form>
  )
}

export default ContactForm
