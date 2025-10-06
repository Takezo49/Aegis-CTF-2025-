export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12 backdrop-blur-sm bg-black/20 border-b border-gray-800">
        <div className="flex items-center space-x-2 animate-fadeIn">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center animate-pulse-glow">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="text-white font-bold text-xl">CyberCTF</span>
          <div className="ml-2 px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-400 border border-green-500/30 animate-pulse">
            LIVE
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">Home</a>
          <a href="#challenges" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">Challenges</a>
          <a href="#schedule" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">Schedule</a>
          <a href="#prizes" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">Prizes</a>
          <a href="#rules" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">Rules</a>
          <a href="#contact" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 lg:px-12 pt-12 pb-20" id="home">
        {/* Main Hero */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            {/* Glitch Effect Title */}
            <div className="relative animate-fadeIn">
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-gradient">
                CAPTURE
              </h1>
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
                THE FLAG
              </h1>
              <div className="absolute -top-2 -left-2 text-6xl lg:text-8xl font-black text-green-400/20 -z-10 animate-pulse">
                CAPTURE THE FLAG
              </div>
            </div>

            <div className="animate-slideUp delay-300">
              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join the ultimate cybersecurity challenge. Test your hacking skills, 
                compete with elite security professionals, and prove you have what it takes.
              </p>
            </div>

            {/* Competition Details Banner */}
            <div className="animate-slideUp delay-500">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-semibold">LIVE EVENT</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="text-white font-semibold">December 15-17, 2024</div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="text-green-400 font-semibold">48H Marathon</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slideUp delay-700">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl font-bold text-lg text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 animate-pulse-glow">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold text-lg text-gray-300 hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-slideUp delay-1000" id="stats">
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2 group-hover:animate-pulse">500+</div>
              <div className="text-gray-400">Participants</div>
              <div className="text-xs text-gray-500 mt-1">Last year record</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2 group-hover:animate-pulse">$10K</div>
              <div className="text-gray-400">Prize Pool</div>
              <div className="text-xs text-gray-500 mt-1">Split across categories</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2 group-hover:animate-pulse">48H</div>
              <div className="text-gray-400">Duration</div>
              <div className="text-xs text-gray-500 mt-1">Non-stop challenges</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">15</div>
              <div className="text-gray-400">Categories</div>
              <div className="text-xs text-gray-500 mt-1">Multiple skill levels</div>
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

          {/* Detailed Schedule Section */}
          <div className="mb-20 animate-slideUp" id="schedule">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">Competition Schedule</h2>
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-green-400">Day 1 - Opening</h3>
                  </div>
                  <div className="space-y-3 ml-11">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Registration Opens</span>
                      <span className="text-green-400 font-mono">09:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Opening Ceremony</span>
                      <span className="text-green-400 font-mono">10:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Challenges Release</span>
                      <span className="text-green-400 font-mono">11:00</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-400">Day 2 - Marathon</h3>
                  </div>
                  <div className="space-y-3 ml-11">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">24/7 Challenges</span>
                      <span className="text-blue-400 font-mono">ALL DAY</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Live Hints Session</span>
                      <span className="text-blue-400 font-mono">18:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Midnight Boost</span>
                      <span className="text-blue-400 font-mono">00:00</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">Day 3 - Finals</h3>
                  </div>
                  <div className="space-y-3 ml-11">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Final Push</span>
                      <span className="text-purple-400 font-mono">08:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Submission Deadline</span>
                      <span className="text-purple-400 font-mono">11:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Awards Ceremony</span>
                      <span className="text-purple-400 font-mono">15:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Prize Structure */}
          <div className="mb-20 animate-slideUp" id="prizes">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">Prize Structure</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Overall Winners */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl border border-yellow-500/50 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Overall Champions</h3>
                  <div className="text-3xl font-bold text-white mb-2">$5,000</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">1st Place</span>
                    <span className="text-yellow-400 font-bold">$3,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">2nd Place</span>
                    <span className="text-yellow-400 font-bold">$1,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">3rd Place</span>
                    <span className="text-yellow-400 font-bold">$500</span>
                  </div>
                </div>
              </div>

              {/* Category Winners */}
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl border border-green-500/50 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Category Masters</h3>
                  <div className="text-3xl font-bold text-white mb-2">$3,000</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Web Security</span>
                    <span className="text-green-400 font-bold">$500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Cryptography</span>
                    <span className="text-green-400 font-bold">$500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">+ 4 more categories</span>
                    <span className="text-green-400 font-bold">$2,000</span>
                  </div>
                </div>
              </div>

              {/* Special Awards */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl border border-purple-500/50 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Special Awards</h3>
                  <div className="text-3xl font-bold text-white mb-2">$2,000</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Best Newcomer</span>
                    <span className="text-purple-400 font-bold">$750</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Most Creative</span>
                    <span className="text-purple-400 font-bold">$750</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Team Spirit</span>
                    <span className="text-purple-400 font-bold">$500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Requirements & Rules */}
          <div className="mb-20 animate-slideUp" id="rules">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">Competition Rules & Requirements</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <span className="mr-3">💻</span>
                  Technical Requirements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Operating System</div>
                      <div className="text-gray-400 text-sm">Linux, Windows, or macOS (Kali Linux recommended)</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Required Tools</div>
                      <div className="text-gray-400 text-sm">Burp Suite, Wireshark, Nmap, Python 3.x, Docker</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Internet Connection</div>
                      <div className="text-gray-400 text-sm">Stable broadband connection (minimum 10 Mbps)</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Hardware</div>
                      <div className="text-gray-400 text-sm">8GB RAM minimum, 50GB free disk space</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                  <span className="mr-3">📜</span>
                  Competition Rules
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Team Size</div>
                      <div className="text-gray-400 text-sm">1-4 members per team (solo participation allowed)</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Fair Play</div>
                      <div className="text-gray-400 text-sm">No attacks on infrastructure, respect other participants</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Submissions</div>
                      <div className="text-gray-400 text-sm">All flags must be submitted through official platform</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Code of Conduct</div>
                      <div className="text-gray-400 text-sm">Professional behavior expected at all times</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsor Showcase */}
          <div className="mb-20 animate-slideUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">Powered by Industry Leaders</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">CYBER</div>
                  <div className="text-xs text-gray-400">Security Partner</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">TECH</div>
                  <div className="text-xs text-gray-400">Cloud Sponsor</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">SECURE</div>
                  <div className="text-xs text-gray-400">Platform Partner</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 flex items-center justify-center hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">HACK</div>
                  <div className="text-xs text-gray-400">Tool Sponsor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700 p-12 animate-slideUp" id="contact">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Registration opens soon. Be among the first to secure your spot in this epic cybersecurity challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl font-bold text-xl text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 animate-pulse-glow">
                <span className="relative z-10">Join the Waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Registration opens in 3 days</span>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📧</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm">support@cyberctf.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Discord Community</h3>
                <p className="text-gray-400 text-sm">Join 5000+ hackers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🐦</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Follow Updates</h3>
                <p className="text-gray-400 text-sm">@CyberCTF_Official</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
