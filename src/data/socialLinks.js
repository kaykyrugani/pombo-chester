import officialLinks from './officialLinks.js'

const socialLinks = [
  {
    id: 1,
    label: 'Instagram',
    handle: '@pombochester',
    description: 'Bastidores, cortes de shows e agenda em tempo real.',
    url: officialLinks.instagram,
    featured: true,
  },
  {
    id: 2,
    label: 'WhatsApp',
    handle: 'Contratação de shows',
    description: 'Canal direto para consultar datas, formatos e orçamento.',
    url: officialLinks.whatsapp,
    featured: true,
  },
  {
    id: 3,
    label: 'TikTok',
    handle: '@pombochester',
    description: 'Conteúdos curtos, momentos ao vivo e trechos dos shows.',
    url: officialLinks.tiktok,
  },
  {
    id: 4,
    label: 'E-mail',
    handle: 'contato@pombochester.com',
    description: 'Contato profissional para imprensa, eventos e propostas.',
    url: 'mailto:contato@pombochester.com',
  },
  {
    id: 5,
    label: 'Facebook',
    handle: 'Pombo Chester',
    description: 'Novidades, eventos e publicações oficiais da banda.',
    url: officialLinks.facebook,
  },
]

export { socialLinks }
export default socialLinks
