import Link from 'next/link'
import { Button } from "@/components/ui/button"
import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Header() {
  const { language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-[#000033]/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            WorkWork
          </Link>
          <nav className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#000033] p-4' : 'hidden'}`}>
            <Link href="#" className="text-gray-300 hover:text-cyan-500 transition-colors">
              {language === 'en' ? 'Community' : '社区'}
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-500 transition-colors">
              {language === 'en' ? 'Web3 Jobs' : 'Web3 工作'}
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-500 transition-colors">
              {language === 'en' ? 'Salaries' : '薪资'}
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitch />
            <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10">
              {language === 'en' ? 'Login' : '登录'}
            </Button>
            <Button className="bg-[#00ffff] text-black hover:bg-[#00ffff]/90">
              {language === 'en' ? 'Post a Job' : '发布工作'}
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

