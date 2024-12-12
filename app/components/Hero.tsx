'use client'

import { useLanguage } from '../contexts/LanguageContext'

const content = {
  en: {
    title: "New paradigm for recruiting at WEB3",
    description: "Bring unprecedented workplace experience to project owners and individuals in the Web3 industry"
  },
  zh: {
    title: "WEB3 招聘的新范式",
    description: "为 Web3 行业的项目所有者和个人带来前所未有的工作场所体验"
  }
}

export default function Hero() {
  const { language } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4 text-center relative">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#00ff9d]">
        {content[language].title}
      </h1>
      <p className="text-xl text-white max-w-3xl mx-auto mb-8">
        {content[language].description}
      </p>
    </section>
  )
}

