'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showGradient, setShowGradient] = useState(false)

  useEffect(() => {
    const animateWords = () => {
      const words = document.querySelectorAll('.word')
      words.forEach((word: Element) => {
        const delay = parseInt((word as HTMLElement).dataset.delay || '0')
        setTimeout(() => {
          ;(word as HTMLElement).style.animation = 'word-appear 0.8s ease-out forwards'
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
            <a href="/about" className="block text-lg hover:text-white/80 transition-colors">ABOUT</a>
          </li>
        </ul>
        <div className="absolute bottom-8 left-8 nav-item" style={{ animationDelay: '1.4s' }}>
          <div className="text-sm opacity-60">
            <p>v2.1.0</p>
            <p>ONLINE</p>
          </div>
        </div>
      </nav>
      <div className="floating-element" style={{ top: '25%', left: '35%', animationDelay: '3s' }}></div>
      <div className="floating-element" style={{ top: '60%', left: '85%', animationDelay: '3.5s' }}></div>
      <div className="floating-element" style={{ top: '40%', left: '30%', animationDelay: '4s' }}></div>
      <div className="floating-element" style={{ top: '75%', left: '90%', animationDelay: '4.5s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-16 py-20">
        {/* Center Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-4">
              <span className="word" data-delay="0">AegisCTF</span>
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto"></div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
            <div className="mb-4">
              <span className="word" data-delay="800">CTF</span>
            </div>
          </h1>
          
          <p className="text-xl leading-relaxed text-white/70 mb-12 max-w-2xl mx-auto">
            <span className="word" data-delay="1200">Test</span>
            <span className="word" data-delay="1350">your</span>
            <span className="word" data-delay="1500">cybersecurity</span>
            <span className="word" data-delay="1650">skills</span>
            <span className="word" data-delay="1800">in</span>
            <span className="word" data-delay="1950">the</span>
            <span className="word" data-delay="2100">ultimate</span>
            <span className="word" data-delay="2250">hacking</span>
            <span className="word" data-delay="2400">challenge.</span>
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4s' }}>
            <button className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
              <a href="/register" className="block w-full h-full">Register Team</a>
            </button>
            <button className="px-8 py-4 border border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              LEARN MORE
            </button>
          </div>
          
          <div className="mt-12 text-sm text-white/50 opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4.5s' }}>
            <p>SCROLL TO EXPLORE</p>
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
