import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { theoryCards } from '../data/content'

const colorConfig = {
  gold: {
    accent: '#c9a84c',
    glow: 'rgba(201,168,76,0.3)',
    border: 'rgba(201,168,76,0.4)',
    badge: 'bg-yellow-900/40 text-yellow-300 border-yellow-700/50',
    numberBg: 'bg-gold-DEFAULT/10 border border-gold-DEFAULT/30',
  },
  crimson: {
    accent: '#e74c3c',
    glow: 'rgba(231,76,60,0.3)',
    border: 'rgba(231,76,60,0.4)',
    badge: 'bg-red-900/40 text-red-300 border-red-700/50',
    numberBg: 'bg-red-900/20 border border-red-700/30',
  },
  purple: {
    accent: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
    border: 'rgba(124,58,237,0.4)',
    badge: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
    numberBg: 'bg-purple-900/20 border border-purple-700/30',
  },
}

function TheoryCard({ card, index }: { card: typeof theoryCards[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const cfg = colorConfig[card.color as keyof typeof colorConfig]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="flip-card-container"
      style={{ height: '480px' }}
    >
      <div className={`flip-card-inner w-full h-full ${flipped ? 'flipped' : ''}`}>
        {/* FRONT */}
        <div
          className="flip-card-front w-full h-full glass-card p-8 flex flex-col cursor-pointer"
          style={{
            borderColor: cfg.border,
            boxShadow: flipped ? 'none' : `0 0 40px ${cfg.glow}`,
          }}
          onClick={() => setFlipped(true)}
        >
          <div className="text-5xl mb-4">{card.icon}</div>
          <div className={`inline-block text-xs font-mono px-3 py-1 rounded-full border mb-4 ${cfg.badge}`}>
            {card.subtitle}
          </div>
          <h3 className="font-cinzel text-2xl font-bold mb-4" style={{ color: cfg.accent }}>
            {card.title}
          </h3>
          <p className="font-inter text-cream/70 text-sm leading-relaxed flex-1">
            {card.frontSummary}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-inter" style={{ color: cfg.accent }}>
            <span>Nhấn để xem chi tiết</span>
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="flip-card-back glass-card p-8 flex flex-col overflow-y-auto"
          style={{ borderColor: cfg.border }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-cinzel text-xl font-bold" style={{ color: cfg.accent }}>
              {card.title}
            </h3>
            <button
              onClick={() => setFlipped(false)}
              className="text-cream/50 hover:text-cream transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Card-specific back content */}
          {card.id === 'class-def' && card.criteria && (
            <div className="space-y-3 flex-1">
              {card.criteria.map((c) => (
                <div key={c.number} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-mono text-xs font-bold flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${cfg.glow}`, color: cfg.accent }}>
                    {c.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream mb-1">{c.title}</p>
                    <p className="text-xs text-cream/60 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {card.id === 'origin' && card.stages && (
            <div className="space-y-3 flex-1">
              {card.stages.map((s, i) => (
                <div key={i}>
                  <div className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold text-cream">{s.era}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${cfg.glow}`, color: cfg.accent }}>
                          {s.state}
                        </span>
                      </div>
                      <p className="text-xs text-cream/60 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  {s.arrow && (
                    <div className="flex justify-center my-1">
                      <svg className="w-5 h-5 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {card.id === 'struggle' && card.forms && (
            <div className="space-y-3 flex-1">
              {card.forms.map((f, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-cream mb-1">{f.title}</p>
                    <p className="text-xs text-cream/60 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key takeaway */}
          {card.keyTakeaway && (
            <div className="mt-4 p-4 rounded-xl border" style={{ borderColor: cfg.border, background: `${cfg.glow}` }}>
              <p className="text-xs font-inter text-cream/90 leading-relaxed">
                <span className="font-bold" style={{ color: cfg.accent }}>💡 Tóm luận: </span>
                {card.keyTakeaway}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function CoreTheory() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="theory" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-gold-DEFAULT/60 tracking-widest uppercase border border-gold-muted rounded-full px-4 py-2">
            <span>Block 02</span>
            <span className="w-1 h-1 rounded-full bg-gold-DEFAULT/60" />
            <span>Lý thuyết cốt lõi</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black mb-4">
            <span className="gold-text">Nền Tảng Lý Luận</span>
          </h2>
          <p className="font-inter text-cream/60 max-w-2xl mx-auto">
            Ba trụ cột lý thuyết định nghĩa giai cấp và đấu tranh giai cấp theo chủ nghĩa duy vật lịch sử
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {theoryCards.map((card, i) => (
            <TheoryCard key={card.id} card={card} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-xs font-mono text-cream/30 italic">
            * Nguồn: V.I. Lenin, "Sáng kiến vĩ đại", Toàn tập, Tập 39 · Giáo trình Triết học Mác-Lênin, Bộ GD&ĐT
          </p>
        </motion.div>
      </div>
    </section>
  )
}
