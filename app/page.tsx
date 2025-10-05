export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <div className="text-center space-y-6">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-green-400 mb-4 font-mono">
            [CTF]
          </h1>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Capture The Flag
          </h2>
          <p className="text-xl text-gray-300">
            Registration Portal
          </p>
        </div>

        <div className="bg-gray-900 border border-green-400 rounded-lg p-8 max-w-2xl">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Welcome to CTF Registration
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Ready to test your cybersecurity skills? Join our Capture The Flag competition 
            and challenge yourself against the best hackers and security professionals.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="space-y-2">
              <p>🏆 <span className="text-white">Compete for prizes</span></p>
              <p>🧠 <span className="text-white">Test your skills</span></p>
            </div>
            <div className="space-y-2">
              <p>🤝 <span className="text-white">Team up or go solo</span></p>
              <p>🎯 <span className="text-white">Multiple categories</span></p>
            </div>
          </div>
        </div>

        <div className="bg-green-400 text-black px-6 py-2 rounded-full font-bold text-lg">
          Registration Opening Soon
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>Get ready to hack the planet! 🌍</p>
        </div>
      </div>
    </main>
  )
}
