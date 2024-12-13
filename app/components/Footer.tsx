import { Twitter, Github, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#000044] py-8 px-4 border-t border-cyan-500/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; 2024 WorkWork. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
          <a href="https://x.com/WorkWorkWeb3" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://github.com/WorkWorkWeb3" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/company/workworkweb3/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/workworkweb3" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.xiaohongshu.com/user/profile/5dce3c0300000000010005e3" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            <Image 
              src="/xiaohongshu-icon.png" 
              alt="Xiaohongshu" 
              width={24} 
              height={24}
            />
            <span className="sr-only">Xiaohongshu</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

