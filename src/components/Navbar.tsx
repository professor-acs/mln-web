import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sectionContent } from '../data/content'

type SectionType = '3.2.1' | '3.2.2' | '3.2.3'

const staticSections = [
  { id: 'hero', label: 'Khởi đầu' },
]

function getDynamicSections(activeSection: SectionType) {
  const sectionData = sectionContent[activeSection]
  const navLabels = sectionData.navLabels || [
    { id: 'ethnicity', label: 'History' },
    { id: 'reality', label: 'Reality' },
    { id: 'quiz', label: 'Interactive' },
  ]
  return [
    ...staticSections,
    ...navLabels,
  ]
}

const topicSections = [
  { id: '3.2.1', label: '3.2.1' },
  { id: '3.2.2', label: '3.2.2' },
  { id: '3.2.3', label: '3.2.3' },
]

interface NavbarProps {
  readonly activeSection?: SectionType
  readonly onSectionChange?: (section: SectionType) => void
}

export default function Navbar({ activeSection = '3.2.1', onSectionChange }: Readonly<NavbarProps>) {
  const [scrolledNav, setScrolledNav] = useState(false)
  const [showTopicMenu, setShowTopicMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledNav(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTopicSelect = (topic: SectionType) => {
    onSectionChange?.(topic)
    setShowTopicMenu(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolledNav ? 'py-4 bg-dark/80 backdrop-blur-xl border-b border-white/5' : 'py-10 bg-transparent'
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
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-wrap justify-center">
          {getDynamicSections(activeSection).map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-500 whitespace-nowrap ${
                s.id === 'theory' ? 'text-accent' : 'text-slate-500 hover:text-slate-100'
              }`}
            >
              {s.label}
              {s.id === 'theory' && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-accent/60"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Topic Selector */}
        <div className="relative">
          <button
            onClick={() => setShowTopicMenu(!showTopicMenu)}
            className="px-4 py-2 rounded-md border border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-300 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2"
          >
            {activeSection}
            <motion.svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: showTopicMenu ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </button>

          {/* Topic Menu Dropdown */}
          <AnimatePresence>
            {showTopicMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 rounded-md border border-accent/30 bg-dark/95 backdrop-blur-sm overflow-hidden z-50"
              >
                {topicSections.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id as SectionType)}
                    className={`w-full px-4 py-3 text-left text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 border-b border-white/5 last:border-b-0 ${
                      activeSection === topic.id
                        ? 'bg-accent/20 text-accent'
                        : 'text-slate-400 hover:text-accent hover:bg-accent/10'
                    }`}
                  >
                    <motion.div
                      initial={false}
                      animate={{ paddingLeft: activeSection === topic.id ? 8 : 0 }}
                    >
                      {activeSection === topic.id && (
                        <motion.span className="inline-block mr-2">✓</motion.span>
                      )}
                      {topic.label}
                    </motion.div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status Indicator */}
        <div className="hidden sm:flex items-center gap-4">
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
