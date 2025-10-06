'use client'

import { useEffect, useState } from 'react'

interface Challenge {
  id: string
  title: string
  points: number
  status: 'solved' | 'unsolved'
  category: string
  description: string
}

export default function Dashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showGradient, setShowGradient] = useState(false)
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: '1',
      title: 'SQL Injection Master',
      points: 100,
      status: 'solved',
      category: 'Web',
      description: 'Find the vulnerability in the login form'
    },
    {
      id: '2',
      title: 'Crypto Nightmare',
      points: 150,
      status: 'unsolved',
      category: 'Crypto',
      description: 'Decrypt the ancient cipher'
    },
    {
      id: '3',
      title: 'Reverse Engineering',
      points: 200,
      status: 'unsolved',
      category: 'Reverse',
      description: 'Unpack the mysterious binary'
    },
    {
      id: '4',
      title: 'Forensics Investigation',
      points: 175,
      status: 'unsolved',
      category: 'Forensics',
      description: 'Analyze the suspicious network traffic'
    }
  ])
  const [flagInputs, setFlagInputs] = useState<{[key: string]: string}>({})
  const [isLoading, setIsLoading] = useState<{[key: string]: boolean}>({})

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

  const handleFlagSubmit = async (challengeId: string) => {
    const flag = flagInputs[challengeId]?.trim()
    if (!flag) return

    setIsLoading(prev => ({ ...prev, [challengeId]: true }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // For demo purposes, accept any flag that contains "CTF"
      if (flag.toUpperCase().includes('CTF')) {
        setChallenges(prev => prev.map(challenge =>
          challenge.id === challengeId
            ? { ...challenge, status: 'solved' as const }
            : challenge
        ))
        setFlagInputs(prev => ({ ...prev, [challengeId]: '' }))
        alert('🎉 Correct flag! Challenge solved!')
      } else {
        alert('❌ Incorrect flag. Try again!')
      }
    } catch (error) {
      alert('❌ Error submitting flag. Please try again.')
    } finally {
      setIsLoading(prev => ({ ...prev, [challengeId]: false }))
    }
  }

  const handleFlagInputChange = (challengeId: string, value: string) => {
    setFlagInputs(prev => ({ ...prev, [challengeId]: value }))
  }

  const solvedChallenges = challenges.filter(c => c.status === 'solved').length
  const totalPoints = challenges.filter(c => c.status === 'solved').reduce((sum, c) => sum + c.points, 0)

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
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
      </svg>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-sm border-r border-white/10 z-20 p-8">
        <div className="nav-item mb-8" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl font-bold">AIGIESCTF_2025</h2>
          <div className="w-6 h-px bg-white/30 mt-2"></div>
        </div>
        <ul className="space-y-6">
          <li className="nav-item" style={{ animationDelay: '0.4s' }}>
            <a href="/" className="block text-lg hover:text-white/80 transition-colors">HOME</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '0.6s' }}>
            <a href="/about" className="block text-lg hover:text-white/80 transition-colors">ABOUT</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '0.8s' }}>
            <a href="/team" className="block text-lg hover:text-white/80 transition-colors">TEAM</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1s' }}>
            <a href="/dashboard" className="block text-lg text-white/90">DASHBOARD</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.2s' }}>
            <a href="/leaderboard" className="block text-lg hover:text-white/80 transition-colors">LEADERBOARD</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.4s' }}>
            <a href="/admin" className="block text-lg hover:text-white/80 transition-colors">ADMIN</a>
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
      <div className="relative z-10 min-h-screen ml-64 flex flex-col">
        {/* Header Section */}
        <div className="p-8 border-b border-white/10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-3">
                <span className="word" data-delay="0">CTF Dashboard</span>
              </h2>
              <div className="w-12 h-px bg-white/30 mx-auto"></div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              <div className="mb-3">
                <span className="word" data-delay="800">MISSION</span>
              </div>
              <div className="text-2xl lg:text-3xl font-normal text-white/80">
                <span className="word" data-delay="1200">CONTROL</span>
              </div>
            </h1>

            <p className="text-base leading-relaxed text-white/70 mb-0 max-w-lg mx-auto">
              <span className="word" data-delay="1600">Monitor</span>
              <span className="word" data-delay="1750">your</span>
              <span className="word" data-delay="1900">progress,</span>
              <span className="word" data-delay="2050">tackle</span>
              <span className="word" data-delay="2200">challenges,</span>
              <span className="word" data-delay="2350">and</span>
              <span className="word" data-delay="2500">dominate</span>
              <span className="word" data-delay="2650">the</span>
              <span className="word" data-delay="2800">competition.</span>
            </p>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* CTF Server Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 text-white/90 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  CTF Server Status
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Server IP:</span>
                    <span className="text-green-400 font-mono">192.168.1.10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Port:</span>
                    <span className="text-green-400 font-mono">1337</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Status:</span>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Uptime:</span>
                    <span className="text-green-400">24h 37m</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-xs text-white/50 mb-2">Connection Test:</div>
                  <button className="w-full px-3 py-2 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs hover:bg-green-500/30 transition-colors">
                    PING SERVER
                  </button>
                </div>
              </div>

              {/* Scoreboard Sidebar */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-white/90 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Scoreboard
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded">
                    <div>
                      <div className="text-sm font-medium text-white/90">Your Score</div>
                      <div className="text-xs text-white/60">Individual</div>
                    </div>
                    <div className="text-xl font-bold text-blue-400">{totalPoints}</div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded">
                    <div>
                      <div className="text-sm font-medium text-white/90">Team Score</div>
                      <div className="text-xs text-white/60">Team Total</div>
                    </div>
                    <div className="text-xl font-bold text-purple-400">{totalPoints}</div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                    <div>
                      <div className="text-sm font-medium text-white/90">Challenges Solved</div>
                      <div className="text-xs text-white/60">Progress</div>
                    </div>
                    <div className="text-xl font-bold text-white/90">{solvedChallenges}/{challenges.length}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white/80 text-xs hover:bg-white/20 transition-colors">
                    VIEW FULL LEADERBOARD
                  </button>
                </div>
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white/90 mb-2">Active Challenges</h2>
                <p className="text-white/60 text-sm">Select a challenge and submit the correct flag to earn points</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <div
                    key={challenge.id}
                    className={`bg-white/5 border rounded-lg p-6 transition-all duration-300 hover:bg-white/10 ${
                      challenge.status === 'solved' ? 'border-green-500/30 bg-green-500/5' : 'border-white/10'
                    }`}
                    style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white/90 mb-1">{challenge.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 text-xs rounded ${
                            challenge.status === 'solved'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {challenge.status === 'solved' ? 'SOLVED' : 'UNSOLVED'}
                          </span>
                          <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">
                            {challenge.category}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm mb-4">{challenge.description}</p>
                      </div>
                      <div className={`text-2xl font-bold ml-4 ${
                        challenge.status === 'solved' ? 'text-green-400' : 'text-white/90'
                      }`}>
                        {challenge.points}
                      </div>
                    </div>

                    {challenge.status !== 'solved' && (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={flagInputs[challenge.id] || ''}
                            onChange={(e) => handleFlagInputChange(challenge.id, e.target.value)}
                            placeholder="Enter flag here..."
                            className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                            onKeyPress={(e) => e.key === 'Enter' && handleFlagSubmit(challenge.id)}
                          />
                          <button
                            onClick={() => handleFlagSubmit(challenge.id)}
                            disabled={isLoading[challenge.id] || !flagInputs[challenge.id]?.trim()}
                            className={`px-4 py-2 font-bold text-sm transition-all duration-300 ${
                              isLoading[challenge.id] || !flagInputs[challenge.id]?.trim()
                                ? 'bg-white/10 text-white/50 cursor-not-allowed'
                                : 'bg-white text-black hover:bg-white/90 transform hover:scale-105'
                            }`}
                          >
                            {isLoading[challenge.id] ? '...' : 'SUBMIT'}
                          </button>
                        </div>
                        <div className="text-xs text-white/50">
                          💡 Hint: Flags usually start with "CTF{" and end with "}"
                        </div>
                      </div>
                    )}

                    {challenge.status === 'solved' && (
                      <div className="flex items-center justify-center p-4 bg-green-500/10 rounded border border-green-500/30">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-400 text-lg">✓</span>
                        </div>
                        <span className="text-green-400 font-medium">Challenge Completed!</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white/90 mb-1">{challenges.length}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wide">Total Challenges</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">{solvedChallenges}</div>
                  <div className="text-xs text-green-400 uppercase tracking-wide">Solved</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white/90 mb-1">{totalPoints}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wide">Points Earned</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">#{Math.floor(Math.random() * 10) + 1}</div>
                  <div className="text-xs text-blue-400 uppercase tracking-wide">Rank</div>
                </div>
              </div>
            </div>
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
