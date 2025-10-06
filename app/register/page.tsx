'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'

export default function Register() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showGradient, setShowGradient] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
  }, [isLogin])

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

    if (!isLogin) {
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required'
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters'
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      if (isLogin) {
        // Handle login
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })

        if (error) {
          setErrors({ general: error.message })
          return
        }

        if (data.user) {
          console.log('Login successful:', data.user)
          window.location.href = '/dashboard'
        }
      } else {
        // Handle signup with username
        const { data, error: signupError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        })

        if (signupError) {
          setErrors({ general: signupError.message })
          return
        }

        if (data.user) {
          // Insert profile data into profiles table
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              {
                id: data.user.id,
                username: formData.username,
                email: formData.email,
              },
            ])

          if (profileError) {
            console.error('Profile creation error:', profileError)
            setErrors({ general: `Profile setup failed: ${profileError.message}. Please contact support.` })
            return
          }

          console.log('User registered successfully:', data.user)
          setShowSuccess(true)
          setTimeout(() => {
            window.location.href = '/team'
          }, 2000)
        }
      }
    } catch (error) {
      console.error('Auth error:', error)
      setErrors({ general: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleOAuthLogin = async (provider: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as 'google' | 'github',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      })

      if (error) {
        console.error('OAuth error:', error)
        setErrors({ general: error.message })
      } else {
        console.log(`${provider} OAuth initiated:`, data)
      }
    } catch (error) {
      console.error('OAuth error:', error)
      setErrors({ general: 'OAuth authentication failed. Please try again.' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

        {/* Main Content */}
        <div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-8 py-12">
          <div className="text-center max-w-2xl mx-auto w-full">
            <div className="w-12 h-px bg-white/30 mx-auto mb-6"></div>

            <div className="w-12 h-12 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
              <span className="text-green-400 text-xl">✓</span>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold leading-tight tracking-tight mb-4">
              <div className="mb-2">
                <span className="word" data-delay="0">WELCOME</span>
              </div>
              <div className="mb-2">
                <span className="word" data-delay="200">TO</span>
              </div>
              <div className="text-xl lg:text-2xl font-normal text-white/80">
                <span className="word" data-delay="400">AEGISCTF</span>
              </div>
            </h1>

            <p className="text-base leading-relaxed text-white/70 mb-6 max-w-lg mx-auto">
              <span className="word" data-delay="600">Your</span>
              <span className="word" data-delay="750">account</span>
              <span className="word" data-delay="900">has</span>
              <span className="word" data-delay="1050">been</span>
              <span className="word" data-delay="1200">created</span>
              <span className="word" data-delay="1350">successfully.</span>
            </p>

            <div className="opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '1.5s' }}>
              <p className="text-white/50 text-sm mb-6">Redirecting to team setup...</p>
              <div className="w-px h-4 bg-white/30 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    )
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
      <div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-8 py-12">
        <div className="text-center max-w-2xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-3">
              <span className="word" data-delay="0">{isLogin ? 'Authentication Portal' : 'Registration Portal'}</span>
            </h2>
            <div className="w-12 h-px bg-white/30 mx-auto"></div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <div className="mb-3">
              <span className="word" data-delay="800">JOIN THE CHALLENGE</span>
            </div>
          </h1>

          <p className="text-base leading-relaxed text-white/70 mb-6 max-w-xl mx-auto">
            <span className="word" data-delay="2000">{isLogin ? 'Enter' : 'Secure'}</span>
            <span className="word" data-delay="2150">your</span>
            <span className="word" data-delay="2300">credentials</span>
            <span className="word" data-delay="2450">to</span>
            <span className="word" data-delay="2600">{isLogin ? 'access' : 'begin'}</span>
            <span className="word" data-delay="2750">the</span>
            <span className="word" data-delay="2900">ultimate</span>
            <span className="word" data-delay="3050">cybersecurity</span>
            <span className="word" data-delay="3200">experience.</span>
          </p>

          {/* Error Message */}
          {errors.general && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-sm max-w-lg mx-auto">
              {errors.general}
            </div>
          )}

          <div className="max-w-lg mx-auto opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Field (Signup only) */}
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                    Username: *
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm ${
                      errors.username ? 'border-red-500/50' : 'border-white/20'
                    }`}
                    placeholder="Enter your display name"
                  />
                  {errors.username && (
                    <p className="mt-1 text-xs text-red-400 text-left">{errors.username}</p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                  Email: *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm ${
                    errors.email ? 'border-red-500/50' : 'border-white/20'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 text-left">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                  Password: *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm ${
                    errors.password ? 'border-red-500/50' : 'border-white/20'
                  }`}
                  placeholder={isLogin ? "Enter your password" : "Create a password (min 8 chars)"}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-400 text-left">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field (Signup only) */}
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white/90 mb-2 text-left">
                    Confirm Password: *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm ${
                      errors.confirmPassword ? 'border-red-500/50' : 'border-white/20'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400 text-left">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Submit Button */}
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
                    ? (isLogin ? 'Authenticating...' : 'Creating Account...')
                    : (isLogin ? 'Access System' : 'Create Account')
                  }
                </button>
              </div>
            </form>

            {/* OAuth Section */}
            <div className="mt-6 space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-black text-white/60">Or authenticate with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleOAuthLogin('google')}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs">Google</span>
                </button>

                <button
                  onClick={() => handleOAuthLogin('github')}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-xs">GitHub</span>
                </button>
              </div>
            </div>

            {/* Toggle Login/Signup */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-xs">
                {isLogin ? "New to the system? " : "Already have access? "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setErrors({})
                    setFormData({ username: '', email: '', password: '', confirmPassword: '' })
                  }}
                  className="text-white/90 hover:text-white underline transition-colors text-xs"
                >
                  {isLogin ? 'Create Account' : 'Login'}
                </button>
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/50 opacity-0 animate-[word-appear_0.6s_ease-out_forwards]" style={{ animationDelay: '4.5s' }}>
            <p>SYSTEM READY FOR AUTHENTICATION</p>
            <div className="w-px h-4 bg-white/30 mx-auto mt-2"></div>
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
