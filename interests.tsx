const interests = [
  { title: "Blockchain", description: "Understanding distributed ledger technology and consensus mechanisms" },
  { title: "Smart Contracts", description: "Learning to write secure and efficient smart contracts" },
  { title: "Cryptocurrencies", description: "Exploring digital currencies and tokenomics" },
  { title: "dApps", description: "Building decentralized applications on blockchain" },
  { title: "Cybersecurity", description: "Learning security best practices and protocols" },
  { title: "Open Source", description: "Contributing to and collaborating on open-source projects" },
]

export default function Interests() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Interests & Passions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 hover:border-pink-500/50 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 flex items-center justify-center group-hover:scale-110 transition">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">{interest.title}</h3>
              <p className="text-gray-400 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
