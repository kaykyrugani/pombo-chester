import officialLinks from './officialLinks.js'

const socialLinks = [
  {
    id: 1,
    label: 'WhatsApp',
    handle: 'Orçamento e contratação de shows',
    description:
      'Fale diretamente com a banda para consultar disponibilidade, formatos de show e valores para o seu evento.',
    url: officialLinks.whatsapp,
    featured: true,
    cta: 'Solicitar orçamento agora',
  },
  {
    id: 2,
    label: 'Instagram',
    handle: '@pombochester',
    description:
      'Acompanhe bastidores, cortes de shows e veja como é a experiência ao vivo da Pombo Chester.',
    url: officialLinks.instagram,
    cta: 'Ver vídeos da banda',
  },
  {
    id: 3,
    label: 'TikTok',
    handle: '@pombochester',
    description:
      'Conteúdos rápidos mostrando energia, interação com o público e momentos reais dos shows.',
    url: officialLinks.tiktok,
    cta: 'Ver TikTok',
  },
  {
    id: 4,
    label: 'E-mail',
    handle: 'contato@pombochester.com',
    description: 'Canal profissional para propostas, eventos corporativos e imprensa.',
    url: 'mailto:contato@pombochester.com',
    cta: 'Enviar e-mail',
  },
  {
    id: 5,
    label: 'Facebook',
    handle: 'Pombo Chester',
    description: 'Publicações oficiais e novidades da banda.',
    url: officialLinks.facebook,
    cta: 'Ver Facebook',
  },
]

export { socialLinks }
export default socialLinks
