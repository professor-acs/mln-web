import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { theoryCards } from '../data/content'

function TheoryCard({ card, index }: { card: typeof theoryCards[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
      className={`flip-card-container cursor-pointer group ${flipped ? 'flipped' : ''}`}
      style={{ height: '560px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner w-full h-full">
        {/* FRONT */}
        <div 
          className={`flip-card-front w-full h-full glass-card p-10 flex flex-col relative overflow-hidden transition-all duration-700 ${
            isHovered ? 'bg-slate-900/60 border-accent/40 shadow-[0_0_50px_rgba(212,175,55,0.1)] scale-[1.02]' : 'bg-slate-900/40 border-white/5'
          }`}
        >
          {/* Decorative Background Icon */}
          <div className={`absolute -right-6 -top-6 text-9xl transition-all duration-1000 select-none pointer-events-none ${
            isHovered ? 'opacity-[0.08] rotate-0 scale-110' : 'opacity-[0.02] -rotate-12 scale-100'
          }`}>
            {card.icon}
          </div>

          {/* Radiant Glow */}
          <AnimatePresence>
            {isHovered && !flipped && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.1) 0%, transparent 60%)'
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex flex-col h-full">
            <div className={`w-16 h-16 rounded-sm border mb-12 flex items-center justify-center text-4xl transition-all duration-700 ${
              isHovered ? 'bg-accent/10 border-accent/40 rotate-0 shadow-[0_0_20px_rgba(212,175,55,0.2)]' : 'bg-white/5 border-white/10 -rotate-6'
            }`}>
              {card.icon}
            </div>
            
            <div className="mb-8">
              <span className={`font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block transition-colors duration-500 ${
                isHovered ? 'text-accent' : 'text-slate-500'
              }`}>
                {card.subtitle}
              </span>
              <h3 className={`font-serif text-3xl leading-tight transition-colors duration-500 ${
                isHovered ? 'text-white' : 'text-slate-300'
              }`}>
                {card.title}
              </h3>
            </div>
            
            <p className={`font-sans text-sm leading-relaxed flex-1 font-light transition-colors duration-500 ${
              isHovered ? 'text-slate-300' : 'text-slate-500'
            }`}>
              {card.frontSummary}
            </p>

            <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className={`text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-500 ${
                isHovered ? 'text-accent opacity-100 translate-x-0' : 'text-slate-600 opacity-60 -translate-x-2'
              }`}>
                Xem chi tiết
              </span>
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                isHovered ? 'border-accent bg-accent text-dark rotate-0' : 'border-white/10 text-slate-500 rotate-[-45deg]'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back glass-card p-10 flex flex-col border-accent/30 bg-slate-950/90 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
          <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
            <div>
              <h3 className="font-serif text-2xl text-white">
                {card.title}
              </h3>
              <p className="text-[9px] font-mono text-accent uppercase tracking-[0.4em] mt-2">Hệ tư tưởng · Chương III</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center bg-accent/5">
               <span className="text-accent">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </span>
            </div>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            {card.id === 'class-def' && card.criteria && (
              <div className="space-y-4">
                {card.criteria.map((c) => (
                  <div key={c.number} className="flex gap-6 items-start">
                    <span className="font-serif italic text-accent text-xl opacity-40">{c.number}</span>
                    <div>
                      <p className="text-slate-100 text-sm font-medium mb-1">{c.title}</p>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {card.id === 'origin' && card.stages && (
              <div className="space-y-6">
                {card.stages.map((s, i) => (
                  <div key={i} className="relative pl-8 border-l border-white/5">
                    <div className="absolute -left-[1px] top-0 w-[2px] h-4 bg-accent" />
                    <div className="mb-2">
                       <span className="text-[9px] font-mono text-accent uppercase tracking-widest">{s.era}</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {card.id === 'struggle' && card.forms && (
              <div className="space-y-4">
                {card.forms.map((f, i) => (
                  <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-sm">
                    <div className="flex items-center gap-4 mb-2">
                       <span className="text-xl opacity-60">{f.icon}</span>
                       <p className="text-slate-100 text-sm font-medium">{f.title}</p>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {card.keyTakeaway && (
            <div className="mt-8 p-6 bg-accent/[0.03] border border-accent/10 rounded-sm">
              <p className="text-xs font-sans text-slate-300 leading-relaxed italic">
                <span className="text-accent font-mono font-bold not-italic uppercase text-[9px] tracking-widest mr-2">Cốt yếu:</span>
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
  return (
    <section id="theory" className="py-40 px-6 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-accent/60" />
              <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">
                Section 02: Core Ideology
              </span>
            </motion.div>
            
            <h2 className="font-serif text-5xl md:text-7xl text-slate-100 mb-8 leading-[1.1]">
              Nền Tảng <span className="text-accent italic">Lý Luận</span> <br />
              Về Giai Cấp
            </h2>
            
            <p className="font-sans text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
              Hệ thống hóa ba trụ cột định nghĩa bản chất xã hội và quy luật vận động 
              của nhân loại dưới nhãn quan duy vật biện chứng.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
             <div className="inline-block px-10 py-10 border border-white/5 rounded-full">
               <span className="block text-6xl font-serif text-accent/20">03</span>
               <span className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.5em] mt-2 block">
                 Pillars
               </span>
             </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {theoryCards.map((card, i) => (
            <TheoryCard key={card.id} card={card} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
             <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
               Official Reference Archive
             </p>
          </div>
          <p className="text-xs font-serif italic text-slate-500 max-w-md text-center md:text-right leading-relaxed">
            V.I. Lenin, "Sáng kiến vĩ đại" & Giáo trình Triết học Mác-Lênin (Bộ Giáo dục và Đào tạo Việt Nam)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
