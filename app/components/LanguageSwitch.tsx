'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Button } from "@/components/ui/button"

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="bg-transparent hover:bg-cyan-500/10 text-cyan-500 font-semibold py-2 px-4 border border-cyan-500 rounded"
    >
      {language === 'en' ? '中文' : 'English'}
    </Button>
  )
}

