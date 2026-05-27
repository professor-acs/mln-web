import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
  const { displayed: quoteText, done: quoteDone } = useTypewriter(
    siteMetadata.mainQuote,
    35,
    1200
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.08) 0%, rgba(192,57,43,0.05) 40%, transparent 70%), linear-gradient(180deg, #0a0a1a 0%, #0f0f2a 100%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="floating absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.6), transparent)',
            top: '10%',
            left: '-10%',
            animationDelay: '0s',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="floating absolute w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(192,57,43,0.7), transparent)',
            top: '60%',
            right: '-5%',
            animationDelay: '3s',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="floating absolute w-64 h-64 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.5), transparent)',
            bottom: '10%',
            left: '30%',
            animationDelay: '1.5s',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Course tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold-muted bg-dark-800/50 text-gold-DEFAULT text-xs font-mono tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-gold-DEFAULT animate-pulse" />
          Triết học Marx-Lenin · Chương III · Chủ nghĩa duy vật lịch sử
        </motion.div>

        {/* H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #f0ece4 30%, #c9a84c 60%, #e8c96d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
          }}
        >
          {siteMetadata.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-cinzel text-xl sm:text-2xl font-semibold text-crimson-light mb-10 tracking-[0.15em]"
        >
          {siteMetadata.subtitle}
        </motion.h2>

        {/* Main Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-card glow-gold p-8 mb-6 mx-auto max-w-3xl"
        >
          <div className="text-gold-DEFAULT/40 text-5xl font-serif mb-4 leading-none">"</div>
          <p className="font-inter text-xl sm:text-2xl italic text-cream leading-relaxed min-h-[3em]">
            {quoteText}
            {!quoteDone && <span className="typewriter-cursor" />}
          </p>
          <div className="text-gold-DEFAULT/40 text-5xl font-serif mt-2 leading-none text-right">"</div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: quoteDone ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-sm text-gold-DEFAULT/70 mt-4"
          >
            {siteMetadata.quoteAuthor}
          </motion.p>
        </motion.div>

        {/* Vietnamese translation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-sm font-mono text-gold-DEFAULT/60 italic mb-10"
        >
          {siteMetadata.quoteVietnamese}
        </motion.p>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="font-inter text-base sm:text-lg text-cream/70 leading-relaxed max-w-2xl mx-auto mb-16"
        >
          {siteMetadata.heroSubtext}
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          onClick={() => document.getElementById('theory')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-semibold text-dark-DEFAULT transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #e8c96d)',
            boxShadow: '0 0 40px rgba(201,168,76,0.4)',
          }}
        >
          Khám phá lý thuyết
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="text-xs text-cream/30 font-mono tracking-widest">SCROLL</span>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #0a0a1a)' }}
      />
    </section>
  )
}
