import { useCallback, useState } from 'react'
import members from '../../data/members.js'
import MemberCard from '../common/MemberCard.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

const stackOrder = ['front', 'second', 'third', 'back']

const stackPositions = {
  front: {
    x: 0,
    y: 0,
    rotate: -1,
    scale: 1,
    opacity: 1,
    zIndex: 4,
  },
  second: {
    x: 32,
    y: 18,
    rotate: 4,
    scale: 0.95,
    opacity: 0.9,
    zIndex: 3,
  },
  third: {
    x: -30,
    y: 36,
    rotate: -5,
    scale: 0.9,
    opacity: 0.78,
    zIndex: 2,
  },
  back: {
    x: 6,
    y: 54,
    rotate: 7,
    scale: 0.85,
    opacity: 0.58,
    zIndex: 1,
  },
}

function BandMembers() {
  const [orderedMembers, setOrderedMembers] = useState(members)

  const handleShuffle = useCallback(() => {
    setOrderedMembers((currentMembers) => {
      const nextMembers = [...currentMembers]
      const firstMember = nextMembers.shift()
      nextMembers.push(firstMember)
      return nextMembers
    })
  }, [])

  return (
    <section className="band-members section section-muted" aria-label="Integrantes">
      <div className="container band-members__layout">
        <div className="band-members__copy">
          <SectionTitle
            eyebrow="Formação"
            title="Integrantes da banda Pombo Chester"
            subtitle="Conheça os músicos que fazem da Pombo Chester uma banda completa para eventos, com presença de palco, performance ao vivo e interação com o público."
          />
          <p>
            Uma formação pensada para transformar repertório brasileiro,
            humor e presença cênica em show de verdade para eventos que pedem
            palco vivo.
          </p>
          <div className="band-members__controls">
            <span>Arraste os cards ou clique para alternar</span>
            <button className="band-members__next" type="button" onClick={handleShuffle}>
              Próximo integrante
            </button>
          </div>
        </div>

        <div className="band-members__stack" aria-live="polite">
          {orderedMembers.map((member, index) => (
            <MemberCard
              isFront={index === 0}
              key={member.id}
              member={member}
              onShuffle={handleShuffle}
              positionStyle={stackPositions[stackOrder[index]]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BandMembers
