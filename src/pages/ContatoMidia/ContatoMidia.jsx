import ContactInstagramHighlights from '../../components/sections/ContactInstagramHighlights.jsx'
import ContactMediaCTA from '../../components/sections/ContactMediaCTA.jsx'
import ContactMediaHero from '../../components/sections/ContactMediaHero.jsx'
import SocialContactLinks from '../../components/sections/SocialContactLinks.jsx'
import usePageMeta from '../../hooks/usePageMeta.js'

function ContatoMidia() {
  usePageMeta(
    'Contato Pombo Chester | Contratar banda para eventos ao vivo',
    'Entre em contato com a Pombo Chester e solicite orçamento para shows ao vivo. Banda para eventos em Minas Gerais e todo o Brasil.',
    'contratar banda, banda para eventos, banda ao vivo, orçamento banda, banda para festas, banda para eventos em Minas Gerais'
  )

  return (
    <>
      <ContactMediaHero />
      <section className="contact-booking-prompt section section-light" aria-labelledby="contact-booking-prompt-title">
        <div className="container contact-booking-prompt__inner">
          <span className="eyebrow">Atendimento direto</span>
          <h2 id="contact-booking-prompt-title">Fale direto com a banda e agilize seu orçamento</h2>
          <p>
            Se você está buscando contratar uma banda para eventos, o contato
            direto agiliza o processo e garante informações rápidas sobre datas,
            formatos e valores.
          </p>
          <ul className="contact-booking-prompt__list" aria-label="Diferenciais do atendimento">
            <li>Resposta rápida</li>
            <li>Datas limitadas</li>
            <li>Agenda concorrida</li>
            <li>Atendimento direto com a banda</li>
          </ul>
        </div>
      </section>
      <SocialContactLinks />
      <ContactInstagramHighlights />
      <ContactMediaCTA />
    </>
  )
}

export default ContatoMidia
