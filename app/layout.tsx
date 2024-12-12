import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorkWork - Web3 Recruitment Platform',
  description: 'Connecting innovative Web3 projects with top-tier blockchain professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>
          {children}
        </body>
      </LanguageProvider>
    </html>
  )
}

