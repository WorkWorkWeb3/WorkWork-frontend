'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from 'lucide-react'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <Select value={language} onValueChange={(value: 'en' | 'zh') => setLanguage(value)}>
      <SelectTrigger className="w-[130px] bg-transparent text-cyan-500 border-cyan-500 hover:bg-cyan-500/10">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">中文</SelectItem>
      </SelectContent>
    </Select>
  )
}

