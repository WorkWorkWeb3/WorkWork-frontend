import Header from './components/Header'
import Hero from './components/Hero'
import CommunityButton from './components/Newsletter'
import BusinessIntro from './components/BusinessIntro'
import ThreeBackground from './components/ThreeBackground'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000033] text-white relative overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <CommunityButton />
          <BusinessIntro />
        </main>
        <Footer />
      </div>
    </div>
  )
}

