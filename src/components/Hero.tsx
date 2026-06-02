import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { siteMetadata } from '../data/content'

function useTypewriter(text: string, speed = 50, startDelay = 500) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          setDone(true)
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

export default function Hero() {
  const navigate = useNavigate()
  const { displayed: quoteText, done: quoteDone } = useTypewriter(
    siteMetadata.mainQuote,
    40,
    1000
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Subtle Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-16"
        >
          <div className="h-[1px] w-8 bg-accent/40" />
          <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase">
            {siteMetadata.course}
          </span>
          <div className="h-[1px] w-8 bg-accent/40" />
        </motion.div>

        {/* Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.95] text-slate-100 tracking-tighter">
            {siteMetadata.title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'bị' || word.toLowerCase() === 'lãng' ? 'italic text-accent' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Premium Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="relative max-w-3xl mx-auto mb-16 py-12 px-8 border-y border-white/5"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-dark text-[10px] font-mono text-slate-350 uppercase tracking-widest">
            Thesis
          </div>
          
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-slate-200 leading-[1.3] mb-8">
            "{quoteText}"
            {!quoteDone && <span className="typewriter-cursor" />}
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
              {siteMetadata.quoteAuthor}
            </p>
            <div className="h-8 w-[1px] bg-gradient-to-b from-accent/40 to-transparent" />
          </div>
        </motion.div>

        {/* Refined Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="font-sans text-slate-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-20 font-light"
        >
          {siteMetadata.heroSubtext}
        </motion.p>

        {/* Premium Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col items-center gap-16"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate('/theory')}
              className="btn-premium px-12 py-5"
            >
              Khám phá hệ tư tưởng
            </button>
            <button
              onClick={() => navigate('/timeline')}
              className="btn-outline-premium px-12 py-5"
            >
              Lịch sử đấu tranh
            </button>
          </div>

          {/* Minimalist Scroll */}
          <div className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
            <span className="text-[9px] font-mono tracking-[0.5em] uppercase text-accent">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
