import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const routes = [
  { path: '/', label: 'Trang chủ' },
  { path: '/theory', label: 'Lý Luận' },
  { path: '/timeline', label: 'Lịch Sử' },
  { path: '/reality', label: 'Hiện thực' },
  { path: '/quiz', label: 'Quiz' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false)
  }, [location.pathname])

  const currentPath = location.pathname

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled || mobileMenuOpen ? 'py-4 bg-dark/95 backdrop-blur-xl border-b border-white/15' : 'py-10 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 md:gap-6 cursor-pointer group relative z-50"
          onClick={() => navigate('/')}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-accent/20 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
            <span className="text-accent font-serif font-bold text-lg md:text-xl relative z-10">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif font-medium text-xs md:text-sm tracking-widest uppercase">
              Marx-Lenin
            </span>
            <span className="text-[8px] md:text-[10px] text-accent font-mono uppercase tracking-[0.4em]">
              Archive 03
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {routes.map((r) => {
            const isActive = currentPath === r.path
            return (
              <Link
                key={r.path}
                to={r.path}
                className={`relative text-xs font-mono uppercase tracking-[0.4em] transition-all duration-500 ${isActive ? 'text-accent font-bold' : 'text-slate-100 hover:text-white'
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

        {/* Status Indicator & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-[10px] font-mono text-slate-100 uppercase tracking-widest">Trạng thái Hệ thống</span>
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">Hoạt động</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block transition-transform"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white block transition-opacity"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block transition-transform"
            />
          </button>

          <div className="hidden md:flex w-8 h-8 rounded-full border border-white/10 items-center justify-center group hover:border-accent/40 transition-colors duration-500">
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-8 py-10 gap-6">
              {routes.map((r) => {
                const isActive = currentPath === r.path
                return (
                  <Link
                    key={r.path}
                    to={r.path}
                    className={`text-sm font-mono uppercase tracking-[0.3em] transition-all duration-300 ${isActive ? 'text-accent font-bold pl-4 border-l-2 border-accent' : 'text-slate-300'
                      }`}
                  >
                    {r.label}
                  </Link>
                )
              })}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Archive</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Live</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
