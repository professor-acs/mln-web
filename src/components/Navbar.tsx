import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const routes = [
  { path: '/', label: 'Intro' },
  { path: '/theory', label: 'Theory' },
  { path: '/timeline', label: 'History' },
  { path: '/reality', label: 'Reality' },
  { path: '/quiz', label: 'Interactive' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentPath = location.pathname

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-dark/95 backdrop-blur-xl border-b border-white/15' : 'py-10 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-accent/20 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
            <span className="text-accent font-serif font-bold text-xl relative z-10">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-100 font-serif font-medium text-sm tracking-widest uppercase">
              Marx-Lenin
            </span>
            <span className="text-[10px] text-accent/80 font-mono uppercase tracking-[0.4em]">
              Archive 03
            </span>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {routes.map((r) => {
            const isActive = currentPath === r.path
            return (
              <Link
                key={r.path}
                to={r.path}
                className={`relative text-xs font-mono uppercase tracking-[0.4em] transition-all duration-500 ${isActive ? 'text-accent font-bold' : 'text-slate-200 hover:text-white'
                  }`}
              >
                {r.label}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent/85"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Status Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-[10px] font-mono text-slate-200 uppercase tracking-widest">System Status</span>
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">Active</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group hover:border-accent/40 transition-colors duration-500">
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
}
