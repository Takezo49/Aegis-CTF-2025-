'use client'

import { useEffect, useState } from 'react'

interface ServerConfig {
  ip: string
  port: string
  status: 'Active' | 'Inactive'
}

export default function AdminPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showGradient, setShowGradient] = useState(false)
  const [formData, setFormData] = useState<ServerConfig>({
    ip: '192.168.1.10',
    port: '1337',
    status: 'Active'
  })
  const [history, setHistory] = useState<ServerConfig[]>([
    { ip: '192.168.1.10', port: '1337', status: 'Active' },
    { ip: '10.0.0.5', port: '8080', status: 'Inactive' },
    { ip: '172.16.0.1', port: '9001', status: 'Active' }
  ])

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // Add current config to history
    setHistory(prev => [formData, ...prev.slice(0, 4)]) // Keep only last 5 entries

    // Show success message
    alert(`Server set to ${formData.ip}:${formData.port} (${formData.status})!`)

    // Here you would typically save to backend/Supabase
    console.log('Saving server config:', formData)
  }

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
            <a href="/dashboard" className="block text-lg hover:text-white/80 transition-colors">DASHBOARD</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.2s' }}>
            <a href="/leaderboard" className="block text-lg hover:text-white/80 transition-colors">LEADERBOARD</a>
          </li>
          <li className="nav-item" style={{ animationDelay: '1.4s' }}>
            <a href="/admin" className="block text-lg text-white/90">ADMIN</a>
          </li>
        </ul>
        <div className="absolute bottom-8 left-8 nav-item" style={{ animationDelay: '1.8s' }}>
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
      <div className="relative z-10 min-h-screen ml-64">
        {/* Header Section */}
        <div className="p-8 border-b border-white/10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-3">
                <span className="word" data-delay="0">Server Administration</span>
              </h2>
              <div className="w-12 h-px bg-white/30 mx-auto"></div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              <div className="mb-3">
                <span className="word" data-delay="800">CTF SERVER</span>
              </div>
              <div className="text-2xl lg:text-3xl font-normal text-white/80">
                <span className="word" data-delay="1200">CONTROL PANEL</span>
              </div>
            </h1>

            <p className="text-base leading-relaxed text-white/70 mb-0 max-w-lg mx-auto">
              <span className="word" data-delay="1600">Manage</span>
              <span className="word" data-delay="1750">and</span>
              <span className="word" data-delay="1900">configure</span>
              <span className="word" data-delay="2050">your</span>
              <span className="word" data-delay="2200">CTF</span>
              <span className="word" data-delay="2350">server</span>
              <span className="word" data-delay="2500">settings</span>
              <span className="word" data-delay="2650">and</span>
              <span className="word" data-delay="2800">monitor</span>
              <span className="word" data-delay="2950">active</span>
              <span className="word" data-delay="3100">connections.</span>
            </p>
          </div>
        </div>

        {/* Admin Content */}
        <div className="p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current Active Server Card */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white/90">Current Active Server</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                  <div className="text-sm text-white/60 mb-1">IP Address</div>
                  <div className="text-xl font-mono text-white/90">{formData.ip}</div>
                </div>
                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                  <div className="text-sm text-white/60 mb-1">Port</div>
                  <div className="text-xl font-mono text-white/90">{formData.port}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${formData.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                  <span className="text-sm text-white/70">Status: {formData.status}</span>
                </div>
                <div className="text-xs text-white/50">
                  Last updated: {new Date().toLocaleString()}
                </div>
              </div>
            </div>

            {/* Set New Server Form */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white/90 mb-6">Set New Server Configuration</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* IP Input */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    IP Address: *
                  </label>
                  <input
                    type="text"
                    name="ip"
                    value={formData.ip}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                    placeholder="e.g., 192.168.1.10"
                  />
                </div>

                {/* Port Input */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Port: *
                  </label>
                  <input
                    type="text"
                    name="port"
                    value={formData.port}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                    placeholder="e.g., 1337"
                  />
                </div>

                {/* Status Selector */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Status: *
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSave}
                  className="px-8 py-3 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save / Publish Configuration
                </button>
              </div>
            </div>

            {/* Server History (Optional) */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white/90 mb-6">Server Configuration History</h3>

              <div className="space-y-3">
                {history.map((server, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5 hover:bg-black/30 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`inline-block w-2 h-2 rounded-full ${server.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                      <div>
                        <div className="font-mono text-white/90">{server.ip}:{server.port}</div>
                        <div className="text-xs text-white/60">Status: {server.status}</div>
                      </div>
                    </div>
                    <div className="text-xs text-white/50">
                      {new Date(Date.now() - (index * 3600000)).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {history.length === 0 && (
                <div className="text-center py-8 text-white/50">
                  <p>No server history available</p>
                </div>
              )}
            </div>

            {/* Admin Tips */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">💡 Admin Tips</h3>
              <ul className="text-sm text-blue-300 space-y-1">
                <li>• Always test server connectivity before setting as Active</li>
                <li>• Use standard ports (1337, 8080, 9001) for CTF servers</li>
                <li>• Keep server configurations updated for security</li>
                <li>• Monitor server status regularly during competitions</li>
              </ul>
            </div>

            {/* Footer */}
            <div className="text-center">
              <p className="text-white/50 text-sm">
                Admin Panel - System Ready for Configuration
              </p>
              <div className="w-px h-4 bg-white/30 mx-auto mt-2"></div>
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
