'use client'

import { useEffect, useState } from 'react'

export default function TeamPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showGradient, setShowGradient] = useState(false)
  const [activeTab, setActiveTab] = useState('create')
  const [formData, setFormData] = useState({
    teamName: '',
    teamDescription: '',
    maxMembers: 4,
    joinCode: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

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
  }, [activeTab])

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

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (activeTab === 'create') {
      if (!formData.teamName.trim()) {
        newErrors.teamName = 'Team name is required'
      } else if (formData.teamName.length < 3) {
        newErrors.teamName = 'Team name must be at least 3 characters'
      }

      if (formData.maxMembers < 2 || formData.maxMembers > 10) {
        newErrors.maxMembers = 'Team size must be between 2 and 10 members'
      }
    } else {
      if (!formData.joinCode.trim()) {
        newErrors.joinCode = 'Join code is required'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (activeTab === 'create') {
        console.log('Creating team:', formData)
      } else {
        console.log('Joining team with code:', formData.joinCode)
      }

      setShowSuccess(true)
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 2000)
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

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
              <a href="/challenges" className="block text-lg hover:text-white/80 transition-colors">CHALLENGES</a>
            </li>
            <li className="nav-item" style={{ animationDelay: '1s' }}>
              <a href="/team" className="block text-lg text-white/90">TEAM</a>
            </li>
            <li className="nav-item" style={{ animationDelay: '1.2s' }}>
              <a href="/dashboard" className="block text-lg hover:text-white/80 transition-colors">DASHBOARD</a>
            </li>
            <li className="nav-item" style={{ animationDelay: '1.4s' }}>
              <a href="/leaderboard" className="block text-lg hover:text-white/80 transition-colors">LEADERBOARD</a>
            </li>
          </ul>
        </nav>

        <div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-8 py-12">
          <div className="text-center max-w-2xl mx-auto w-full">
            <div className="w-12 h-px bg-white/30 mx-auto mb-6"></div>
            <div className="w-12 h-12 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
              <span className="text-green-400 text-xl">✓</span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight tracking-tight mb-4">
              <div className="mb-2">
                <span className="word" data-delay="0">{activeTab === 'create' ? 'TEAM CREATED' : 'TEAM JOINED'}</span>
              </div>
            </h1>
            <p className="text-base leading-relaxed text-white/70 mb-6 max-w-lg mx-auto">
              <span className="word" data-delay="600">{activeTab === 'create' ? 'Your team has been created successfully.' : 'You have successfully joined the team.'}</span>
            </p>
            <div className="opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '1.5s' }}>
              <p className="text-white/50 text-sm mb-6">Redirecting to dashboard...</p>
              <div className="w-px h-4 bg-white/30 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

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
            <a href="/challenges" className="block text-lg hover:text-white/80 transition-colors">CHALLENGES</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.2s' }}>
            <a href="/dashboard" className="block text-lg hover:text-white/80 transition-colors">DASHBOARD</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.4s' }}>
            <a href="/leaderboard" className="block text-lg hover:text-white/80 transition-colors">LEADERBOARD</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.6s' }}>
            <a href="/admin" className="block text-lg hover:text-white/80 transition-colors">ADMIN</a>
          </li>
        </ul>
      </nav>

      <div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-8 py-12">
        <div className="text-center max-w-2xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-3">
              <span className="word" data-delay="0">Team Management</span>
            </h2>
            <div className="w-12 h-px bg-white/30 mx-auto"></div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <div className="mb-3">
              <span className="word" data-delay="800">BUILD YOUR</span>
            </div>
            <div className="text-2xl lg:text-3xl font-normal text-white/80">
              <span className="word" data-delay="1200">TEAM</span>
            </div>
          </h1>

          <p className="text-base leading-relaxed text-white/70 mb-6 max-w-lg mx-auto">
            <span className="word" data-delay="1600">Create</span>
            <span className="word" data-delay="1750">a</span>
            <span className="word" data-delay="1900">new</span>
            <span className="word" data-delay="2050">team</span>
            <span className="word" data-delay="2200">or</span>
            <span className="word" data-delay="2350">join</span>
            <span className="word" data-delay="2500">an</span>
            <span className="word" data-delay="2650">existing</span>
            <span className="word" data-delay="2800">one</span>
            <span className="word" data-delay="2950">to</span>
            <span className="word" data-delay="3100">compete</span>
            <span className="word" data-delay="3250">together.</span>
          </p>

          {errors.general && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-sm max-w-lg mx-auto">
              {errors.general}
            </div>
          )}

          <div className="max-w-lg mx-auto opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4s' }}>
            <div className="flex mb-8 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('create')}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === 'create'
                    ? 'bg-white text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Create Team
              </button>
              <button
                onClick={() => setActiveTab('join')}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === 'join'
                    ? 'bg-white text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Join Team
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'create' ? (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                      Team Name: *
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm ${
                        errors.teamName ? 'border-red-500/50' : 'border-white/20'
                      }`}
                      placeholder="Enter your team name"
                    />
                    {errors.teamName && (
                      <p className="mt-1 text-xs text-red-400 text-left">{errors.teamName}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                      Description (Optional):
                    </label>
                    <textarea
                      name="teamDescription"
                      value={formData.teamDescription}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm resize-none"
                      placeholder="Describe your team's goals or focus area..."
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                      Max Team Members: *
                    </label>
                    <select
                      name="maxMembers"
                      value={formData.maxMembers}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                    >
                      {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} members</option>
                      ))}
                    </select>
                    {errors.maxMembers && (
                      <p className="mt-1 text-xs text-red-400 text-left">{errors.maxMembers}</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                      Team Join Code: *
                    </label>
                    <input
                      type="text"
                      name="joinCode"
                      value={formData.joinCode}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm ${
                        errors.joinCode ? 'border-red-500/50' : 'border-white/20'
                      }`}
                      placeholder="Enter team join code"
                    />
                    {errors.joinCode && (
                      <p className="mt-1 text-xs text-red-400 text-left">{errors.joinCode}</p>
                    )}
                  </div>
                </>
              )}

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-4 py-2 font-bold text-sm transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isLoading
                      ? 'bg-white/70 text-black cursor-wait'
                      : 'bg-white text-black hover:bg-white/90'
                  }`}
                >
                  {isLoading
                    ? (activeTab === 'create' ? 'Creating Team...' : 'Joining Team...')
                    : (activeTab === 'create' ? 'Create Team' : 'Join Team')
                  }
                </button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-sm font-medium text-white/90 mb-2">💡 Team Guidelines</h3>
              <ul className="text-xs text-white/60 space-y-1">
                <li>• Team names must be unique and appropriate</li>
                <li>• Maximum 10 members per team</li>
                <li>• Join codes are provided by team captains</li>
                <li>• Teams can be modified until competition starts</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/50 opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4.5s' }}>
            <p>SYSTEM READY FOR TEAM OPERATIONS</p>
            <div className="w-px h-4 bg-white/30 mx-auto mt-2"></div>
          </div>
        </div>
      </div>

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
