'use client'

import { useEffect, useState } from 'react'

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showGradient, setShowGradient] = useState(false)

  useEffect(() => {
    const animateWords = () => {
      const words = document.querySelectorAll('.word')
      words.forEach((word: Element) => {
        const delay = parseInt((word as HTMLElement).dataset.delay || '0')
        setTimeout(() => {
          ;(word as HTMLElement).style.animation = 'word-appear 0.6s ease-out forwards'
        }, delay)
      })
    }

    const timer = setTimeout(animateWords, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setShowGradient(true)
    }

    const handleMouseLeave = () => {
      setShowGradient(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">

      {/* Grid Background */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Main grid lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />

        {/* Detail dots */}
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
      </svg>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-sm border-r border-white/10 z-20 p-8">
        <div className="nav-item mb-12" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold">AIGIESCTF_2025</h2>
          <div className="w-8 h-px bg-white/30 mt-2"></div>
        </div>

        <ul className="space-y-6">
          <li className="nav-item" style={{ animationDelay: '0.4s' }}>
            <a href="/" className="block text-lg hover:text-white/80 transition-colors">HOME</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '0.6s' }}>
            <a href="/about" className="block text-lg text-white/90 transition-colors">ABOUT</a>
          </li>
        </ul>

        <div className="absolute bottom-8 left-8 nav-item" style={{ animationDelay: '1.4s' }}>
          <div className="text-sm opacity-60">
            <p>v2.1.0</p>
            <p>ONLINE</p>
          </div>
        </div>
      </nav>

      {/* Floating Elements */}
      <div className="floating-element" style={{ top: '25%', left: '35%', animationDelay: '3s' }}></div>
      <div className="floating-element" style={{ top: '60%', left: '85%', animationDelay: '3.5s' }}></div>
      <div className="floating-element" style={{ top: '40%', left: '30%', animationDelay: '4s' }}></div>
      <div className="floating-element" style={{ top: '75%', left: '90%', animationDelay: '4.5s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-16 py-20">

        {/* Center Content */}
        <div className="text-center max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-4">
              <span className="word" data-delay="0">About AegisCTF</span>
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
            <div className="mb-4">
              <span className="word" data-delay="800">ELITE</span>
            </div>
            <div className="mb-4">
              <span className="word" data-delay="1200">CYBERSECURITY</span>
            </div>
            <div className="text-4xl lg:text-5xl font-normal text-white/80">
              <span className="word" data-delay="1600">COMPETITION</span>
            </div>
          </h1>

          <p className="text-xl leading-relaxed text-white/70 mb-12 max-w-2xl mx-auto">
            <span className="word" data-delay="2000">AegisCTF</span>
            <span className="word" data-delay="2150">2025</span>
            <span className="word" data-delay="2300">is</span>
            <span className="word" data-delay="2450">the</span>
            <span className="word" data-delay="2600">premier</span>
            <span className="word" data-delay="2750">capture-the-flag</span>
            <span className="word" data-delay="2900">competition</span>
            <span className="word" data-delay="3050">designed</span>
            <span className="word" data-delay="3200">to</span>
            <span className="word" data-delay="3350">challenge</span>
            <span className="word" data-delay="3500">the</span>
            <span className="word" data-delay="3650">world's</span>
            <span className="word" data-delay="3800">best</span>
            <span className="word" data-delay="3950">hackers.</span>
          </p>

          {/* About Content Sections */}
          <div className="max-w-4xl mx-auto space-y-16">

            {/* What is AegisCTF */}
            <div className="opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4s' }}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-6 text-white/90">
                    <span className="word" data-delay="0">What is AegisCTF?</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    <span className="word" data-delay="200">AegisCTF</span>
                    <span className="word" data-delay="350">is</span>
                    <span className="word" data-delay="500">an</span>
                    <span className="word" data-delay="650">elite</span>
                    <span className="word" data-delay="800">cybersecurity</span>
                    <span className="word" data-delay="950">competition</span>
                    <span className="word" data-delay="1100">that</span>
                    <span className="word" data-delay="1250">tests</span>
                    <span className="word" data-delay="1400">participants'</span>
                    <span className="word" data-delay="1550">abilities</span>
                    <span className="word" data-delay="1700">across</span>
                    <span className="word" data-delay="1850">multiple</span>
                    <span className="word" data-delay="2000">domains</span>
                    <span className="word" data-delay="2150">of</span>
                    <span className="word" data-delay="2300">information</span>
                    <span className="word" data-delay="2450">security.</span>
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <p className="text-white/60 text-sm">Security Challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition Format */}
            <div className="opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4.5s' }}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <p className="text-white/60 text-sm">Competition Format</p>
                    </div>
                  </div>
                </div>
                <div className="text-left order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-white/90">
                    <span className="word" data-delay="0">Competition Format</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    <span className="word" data-delay="200">Teams</span>
                    <span className="word" data-delay="350">compete</span>
                    <span className="word" data-delay="500">in</span>
                    <span className="word" data-delay="650">various</span>
                    <span className="word" data-delay="800">categories</span>
                    <span className="word" data-delay="950">including</span>
                    <span className="word" data-delay="1100">web</span>
                    <span className="word" data-delay="1250">security,</span>
                    <span className="word" data-delay="1400">cryptography,</span>
                    <span className="word" data-delay="1550">forensics,</span>
                    <span className="word" data-delay="1700">and</span>
                    <span className="word" data-delay="1850">reverse</span>
                    <span className="word" data-delay="2000">engineering.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Who Can Participate */}
            <div className="opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '5s' }}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-6 text-white/90">
                    <span className="word" data-delay="0">Who Can Participate?</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    <span className="word" data-delay="200">Whether</span>
                    <span className="word" data-delay="350">you're</span>
                    <span className="word" data-delay="500">a</span>
                    <span className="word" data-delay="650">seasoned</span>
                    <span className="word" data-delay="800">professional</span>
                    <span className="word" data-delay="950">or</span>
                    <span className="word" data-delay="1100">an</span>
                    <span className="word" data-delay="1250">ambitious</span>
                    <span className="word" data-delay="1400">student,</span>
                    <span className="word" data-delay="1550">AegisCTF</span>
                    <span className="word" data-delay="1700">welcomes</span>
                    <span className="word" data-delay="1850">all</span>
                    <span className="word" data-delay="2000">skill</span>
                    <span className="word" data-delay="2150">levels</span>
                    <span className="word" data-delay="2300">to</span>
                    <span className="word" data-delay="2450">compete</span>
                    <span className="word" data-delay="2600">and</span>
                    <span className="word" data-delay="2750">learn.</span>
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">👥</span>
                      </div>
                      <p className="text-white/60 text-sm">All Skill Levels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-20 opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '5.5s' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                <a href="/register" className="block w-full h-full">Join the Competition</a>
              </button>
              <button className="px-8 py-4 border border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-12 text-sm text-white/50 opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '6s' }}>
            <p>AEGISCTF 2025 - WHERE LEGENDS ARE FORGED</p>
            <div className="w-px h-8 bg-white/30 mx-auto mt-4"></div>
          </div>
        </div>
      </div>

      {/* Interactive Gradient */}
      {showGradient && (
        <div
          className="fixed pointer-events-none w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out opacity-100"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192
          }}
        />
      )}
    </div>
  )
}
