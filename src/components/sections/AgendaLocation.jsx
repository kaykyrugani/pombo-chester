import Button from '../ui/Button.jsx'
import officialLinks from '../../data/officialLinks.js'

function AgendaLocation() {
  return (
    <section className="agenda-location section" aria-label="Localização e cobertura">
      <div className="container agenda-location__content">
        <span className="agenda-location__badge">Base da banda</span>
        <h2 className="agenda-location__title">Banda para eventos em Minas Gerais e todo o Brasil</h2>
        <p className="agenda-location__text">
          A Pombo Chester é uma banda para eventos com base em <strong>Monte Santo de Minas - MG</strong> e atende festas, eventos corporativos e shows em <strong>todo o Brasil</strong>.
        </p>
        <p className="agenda-location__secondary">
          Verifique a disponibilidade para sua data e localização entrando em contato com a banda.
        </p>
        <Button href={officialLinks.whatsapp} variant="primary" target="_blank" rel="noreferrer">
          Ver disponibilidade
        </Button>
      </div>
    </section>
  )
}

export default AgendaLocation
