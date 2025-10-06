export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="text-white font-bold text-xl">CyberCTF</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Rules</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 lg:px-12 pt-12 pb-20">
        {/* Main Hero */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            {/* Glitch Effect Title */}
            <div className="relative">
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                CAPTURE
              </h1>
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 bg-clip-text text-transparent">
                THE FLAG
              </h1>
              <div className="absolute -top-2 -left-2 text-6xl lg:text-8xl font-black text-green-400/20 -z-10">
                CAPTURE THE FLAG
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join the ultimate cybersecurity challenge. Test your hacking skills, 
              compete with elite security professionals, and prove you have what it takes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl font-bold text-lg text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg text-gray-300 hover:border-green-400 hover:text-green-400 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Participants</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">$10K</div>
              <div className="text-gray-400">Prize Pool</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">48H</div>
              <div className="text-gray-400">Duration</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-gray-400">Categories</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Exploit web applications, find SQL injections, XSS vulnerabilities, and bypass authentication systems.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cryptography</h3>
              <p className="text-gray-400 leading-relaxed">
                Break encryption algorithms, analyze ciphers, and decode hidden messages using mathematical prowess.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🕵️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Forensics</h3>
              <p className="text-gray-400 leading-relaxed">
                Investigate digital crime scenes, recover deleted files, and uncover hidden evidence in system logs.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">What Cyber Experts Say</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">KM</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Kevin Mitnick</div>
                    <div className="text-gray-400 text-sm">World's Most Famous Hacker</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The best way to learn about security is to break things. CTF competitions provide that perfect controlled environment to push your limits."
                </p>
              </div>

              <div className="p-8 bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">BS</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Bruce Schneier</div>
                    <div className="text-gray-400 text-sm">Cryptography Expert & Author</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Security is a process, not a product. CTF challenges teach you to think like both attacker and defender - essential skills in cybersecurity."
                </p>
              </div>

              <div className="p-8 bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">KB</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Katie Bouman</div>
                    <div className="text-gray-400 text-sm">MIT Computer Scientist</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Hands-on challenges like CTFs bridge the gap between theoretical knowledge and real-world application in cybersecurity."
                </p>
              </div>

              <div className="p-8 bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="font-bold text-black">HD</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">HD Moore</div>
                    <div className="text-gray-400 text-sm">Creator of Metasploit</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "CTF competitions are where the next generation of security researchers are born. They provide real-world problem solving under pressure."
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Registration opens soon. Be among the first to secure your spot in this epic cybersecurity challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl font-bold text-xl text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Join the Waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Registration opens in 3 days</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
