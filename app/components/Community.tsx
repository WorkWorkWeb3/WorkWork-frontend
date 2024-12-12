export default function Community() {
  return (
    <section id="community" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Be part of a thriving ecosystem of Web3 professionals. Share knowledge, 
          network, and stay updated on the latest opportunities.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p>Community Members</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p>Partner Companies</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">1,000+</h3>
            <p>Jobs Posted Monthly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

