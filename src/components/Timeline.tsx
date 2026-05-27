import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timelineEpochs } from '../data/content'

function EpochCard({ epoch, index }: { epoch: typeof timelineEpochs[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      className="relative"
    >
      {/* Connector line (except last) */}
      {index < timelineEpochs.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 z-10"
          style={{ background: `linear-gradient(90deg, ${epoch.accent}, transparent)` }} />
      )}

      <div
        className="glass-card p-6 cursor-pointer transition-all duration-300"
        style={{
          borderColor: `${epoch.accent}40`,
          boxShadow: expanded ? `0 0 50px ${epoch.accent}30` : 'none',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-4xl mb-2">{epoch.icon}</div>
            <span className="text-xs font-mono tracking-widest uppercase"
              style={{ color: `${epoch.accent}90` }}>
              {epoch.period}
            </span>
            <h3 className="font-cinzel text-xl font-bold mt-1" style={{ color: epoch.accent }}>
              {epoch.era}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-cream/50 mt-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* VS Battle Display */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 p-3 rounded-xl text-center"
            style={{ background: `${epoch.accent}15`, border: `1px solid ${epoch.accent}30` }}>
            <div className="text-2xl mb-1">{epoch.oppressor.icon}</div>
            <p className="text-xs font-bold" style={{ color: epoch.accent }}>{epoch.oppressor.name}</p>
          </div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-cinzel text-lg font-black text-crimson-light flex-shrink-0"
          >
            VS
          </motion.div>

          <div className="flex-1 p-3 rounded-xl text-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="text-2xl mb-1">{epoch.oppressed.icon}</div>
            <p className="text-xs font-bold text-cream/70">{epoch.oppressed.name}</p>
          </div>
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3 border-t border-white/10">
                {/* Oppressor description */}
                <div className="flex gap-2 text-xs">
                  <span className="text-cream/40 w-20 flex-shrink-0 font-mono">Kẻ áp bức:</span>
                  <span className="text-cream/80">{epoch.oppressor.desc}</span>
                </div>
                {/* Oppressed description */}
                <div className="flex gap-2 text-xs">
                  <span className="text-cream/40 w-20 flex-shrink-0 font-mono">Bị áp bức:</span>
                  <span className="text-cream/80">{epoch.oppressed.desc}</span>
                </div>

                {/* Conflict */}
                <div className="p-3 rounded-xl border border-crimson-light/30 bg-crimson-light/10">
                  <p className="text-xs text-cream/90">
                    <span className="font-bold text-crimson-light">⚡ Đỉnh điểm xung đột: </span>
                    {epoch.conflict}
                  </p>
                </div>

                {/* Result */}
                <div className="p-3 rounded-xl" style={{ background: `${epoch.accent}15`, border: `1px solid ${epoch.accent}30` }}>
                  <p className="text-xs text-cream/90">
                    <span className="font-bold" style={{ color: epoch.accent }}>✅ Kết quả lịch sử: </span>
                    {epoch.result}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click hint */}
        {!expanded && (
          <p className="text-xs text-cream/30 font-mono mt-2">↓ Nhấn để xem chi tiết xung đột</p>
        )}
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="timeline" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.04), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-gold-DEFAULT/60 tracking-widest uppercase border border-gold-muted rounded-full px-4 py-2">
            <span>Block 02.3</span>
            <span className="w-1 h-1 rounded-full bg-gold-DEFAULT/60" />
            <span>Chu kỳ lịch sử</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black mb-4">
            <span className="crimson-text">Bánh Xe Lịch Sử</span>
          </h2>
          <p className="font-inter text-cream/60 max-w-2xl mx-auto">
            Ba kỷ nguyên đấu tranh giai cấp trong lịch sử loài người — mỗi cuộc xung đột là một bánh răng trong guồng máy tiến hóa xã hội
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Large quote highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 p-6 rounded-2xl mx-auto max-w-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(192,57,43,0.05))' }}
        >
          <p className="font-cinzel text-lg sm:text-2xl text-cream/90 italic">
            "Đấu tranh giai cấp là <span className="gold-text font-bold">động lực trực tiếp</span> của lịch sử"
          </p>
          <p className="text-xs font-mono text-cream/40 mt-3">— Giáo trình Triết học Mác-Lênin, Chương III</p>
        </motion.div>

        {/* Epoch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {timelineEpochs.map((epoch, i) => (
            <EpochCard key={epoch.id} epoch={epoch} index={i} />
          ))}
        </div>

        {/* Flow arrow at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {timelineEpochs.map((e, i) => (
            <div key={e.id} className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ background: e.accent }} />
                <span className="text-xs font-mono" style={{ color: e.accent }}>{e.era}</span>
              </div>
              {i < timelineEpochs.length - 1 && (
                <svg className="w-6 h-6 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
