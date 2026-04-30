import { useEffect } from 'react'

function usePageMeta(title, description, keywords) {
  useEffect(() => {
    document.title = title
    
    // Atualizar ou criar meta description
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.content = description

    // Atualizar ou criar meta keywords
    if (keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]')
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta')
        keywordsTag.name = 'keywords'
        document.head.appendChild(keywordsTag)
      }
      keywordsTag.content = keywords
    }

    // Atualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.content = title

    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescription)
    }
    ogDescription.content = description
  }, [title, description, keywords])
}

export default usePageMeta
