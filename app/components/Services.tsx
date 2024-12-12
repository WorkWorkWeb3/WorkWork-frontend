import { Briefcase, Users, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-blue-400" />,
      title: 'Job Listings',
      description: 'Curated Web3 job opportunities from leading projects and companies.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-400" />,
      title: 'Talent Matching',
      description: 'Advanced algorithms to match the right talent with the right projects.'
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: 'Skill Verification',
      description: 'Blockchain-based skill verification for authentic professional profiles.'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-800 bg-opacity-50 p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

