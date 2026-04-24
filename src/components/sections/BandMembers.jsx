import members from '../../data/members.js'
import MemberCard from '../common/MemberCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

function BandMembers() {
  return (
    <section className="band-members section section-muted" aria-label="Integrantes">
      <div className="container">
        <SectionTitle
          eyebrow="Formação"
          title="Integrantes"
          subtitle="Conheça quem leva a Pombo Chester para o palco."
        />

        <div className="band-members__grid">
          {members.map((member) => (
            <MemberCard member={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BandMembers
