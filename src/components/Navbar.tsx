import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'theory', label: 'Theory' },
  { id: 'timeline', label: 'History' },
  { id: 'reality', label: 'Reality' },
  { id: 'quiz', label: 'Interactive' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(s.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-dark/80 backdrop-blur-xl border-b border-white/5' : 'py-10 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6 cursor-pointer group"
          onClick={() => scrollTo('hero')}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-accent/20 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
            <span className="text-accent font-serif font-bold text-xl relative z-10">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-100 font-serif font-medium text-sm tracking-widest uppercase">
              Marx-Lenin
            </span>
            <span className="text-[8px] text-accent/60 font-mono uppercase tracking-[0.4em]">
              Archive 03
            </span>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-500 ${activeSection === s.id ? 'text-accent' : 'text-slate-500 hover:text-slate-100'
                }`}
            >
              {s.label}
              {activeSection === s.id && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-accent/60"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Status Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">System Status</span>
            <span className="text-[9px] font-mono text-accent uppercase tracking-widest">Active</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group hover:border-accent/40 transition-colors duration-500">
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
}
