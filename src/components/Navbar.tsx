import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteMetadata } from '../data/content'

const sections = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'theory', label: 'Lý thuyết' },
  { id: 'timeline', label: 'Lịch sử' },
  { id: 'reality', label: 'Thực tiễn' },
  { id: 'quiz', label: 'Tương tác' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showLabel, setShowLabel] = useState<string | null>(null)
  const [navVisible, setNavVisible] = useState(false)
  const scrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
      setNavVisible(scrollTop > 100)
      scrollRef.current = scrollTop

      // Determine active section
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-dark-700">
        <motion.div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, #c9a84c, #e74c3c, #7c3aed)',
            width: `${scrollProgress}%`,
          }}
          transition={{ ease: 'linear', duration: 0.1 }}
        />
      </div>

      {/* Top Brand */}
      <AnimatePresence>
        {navVisible && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-1 left-6 z-50 flex items-center gap-3"
          >
            <span className="text-xs font-mono text-gold-DEFAULT/70 hidden sm:block">
              {siteMetadata.course}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right-side Navigation Dots */}
      <AnimatePresence>
        {navVisible && (
          <motion.nav
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 hide-mobile"
          >
            {sections.map((s) => (
              <div
                key={s.id}
                className="relative flex items-center group"
                onMouseEnter={() => setShowLabel(s.id)}
                onMouseLeave={() => setShowLabel(null)}
              >
                {/* Label */}
                <AnimatePresence>
                  {showLabel === s.id && (
                    <motion.span
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className="absolute right-6 text-xs font-inter text-cream whitespace-nowrap bg-dark-800 border border-gold-muted px-2 py-1 rounded-md"
                    >
                      {s.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {/* Dot */}
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`nav-dot transition-all duration-300 ${activeSection === s.id ? 'active' : ''}`}
                  aria-label={`Go to ${s.label}`}
                />
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
