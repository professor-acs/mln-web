import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timelineEpochs } from '../data/content'

function EpochCard({ epoch, index }: { epoch: typeof timelineEpochs[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.1 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 last:mb-0"
    >
      {/* Desktop Center Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
          isHovered ? 'bg-accent scale-150 shadow-[0_0_15px_rgba(212,175,55,0.8)]' : 'bg-white/20'
        }`} />
      </div>

      {/* Content Side */}
      <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'} flex flex-col`}>
        <div className="mb-6">
          <span className={`font-mono text-[10px] uppercase tracking-[0.5em] mb-2 block transition-colors duration-500 ${
            isHovered ? 'text-accent' : 'text-slate-300'
          }`}>
            {epoch.period}
          </span>
          <h3 className={`font-serif text-4xl leading-tight transition-colors duration-500 ${
            isHovered ? 'text-white' : 'text-slate-200'
          }`}>
            {epoch.era}
          </h3>
        </div>

        <motion.div 
          className={`p-10 rounded-sm border transition-all duration-700 relative overflow-hidden group ${
            index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
          } ${
            isHovered 
              ? 'bg-slate-900/60 border-accent/40 shadow-[0_0_50px_rgba(212,175,55,0.1)] scale-[1.02]' 
              : 'bg-slate-900/40 border-white/10 backdrop-blur-sm'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Permanent Accent Line (Top) */}
          <div className={`absolute top-0 left-0 h-[2px] transition-all duration-700 ${
            isHovered ? 'w-full bg-accent' : 'w-12 bg-accent/30'
          }`} />

          {/* Background Decorative Index */}
          <div className={`absolute -right-4 -bottom-8 font-serif text-9xl transition-all duration-1000 select-none pointer-events-none ${
            isHovered ? 'text-accent/[0.08] translate-y-0' : 'text-white/[0.03] translate-y-4'
          }`}>
            0{index + 1}
          </div>

          {/* Radiant Background Effect */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 70%)'
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-10">
              <div className={`text-4xl transition-all duration-700 ${
                isHovered ? 'opacity-100 grayscale-0 scale-110 rotate-0' : 'opacity-40 grayscale-[0.5] -rotate-6'
              }`}>
                {epoch.icon}
              </div>
              <div className={`flex-1 h-[1px] transition-all duration-700 ${
                isHovered ? 'bg-accent/40' : 'bg-white/10'
              }`} />
              <div className="flex items-center gap-3">
                 <span className={`text-[9px] font-mono uppercase tracking-widest transition-colors duration-500 ${
                   isHovered ? 'text-accent' : 'text-slate-200'
                 }`}>
                   Analysis
                 </span>
                 <motion.div animate={{ rotate: isHovered ? 180 : 0 }} transition={{ duration: 0.5 }}>
                    <svg className={`w-3 h-3 transition-colors duration-500 ${
                      isHovered ? 'text-accent' : 'text-slate-200'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                 </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className={`${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                <p className={`text-[9px] font-mono uppercase mb-2 tracking-widest transition-colors duration-500 ${
                  isHovered ? 'text-accent/80' : 'text-accent/40'
                }`}>Thống trị</p>
                <p className={`text-base font-serif transition-colors duration-500 ${
                  isHovered ? 'text-slate-100' : 'text-slate-300'
                }`}>{epoch.oppressor.name}</p>
              </div>
              <div className={`${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                <p className={`text-[9px] font-mono uppercase mb-2 tracking-widest transition-colors duration-500 ${
                  isHovered ? 'text-accent/80' : 'text-accent/40'
                }`}>Bị trị</p>
                <p className={`text-base font-serif transition-colors duration-500 ${
                  isHovered ? 'text-slate-100' : 'text-slate-300'
                }`}>{epoch.oppressed.name}</p>
              </div>
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 border-t border-white/10 space-y-6">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                       <p className="text-[9px] font-mono text-accent uppercase tracking-widest mb-2">Conflict Nature</p>
                       <p className="text-sm text-slate-300 leading-relaxed font-light italic">"{epoch.conflict}"</p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                       <p className="text-[9px] font-mono text-accent uppercase tracking-widest mb-2">Dialectical Result</p>
                       <p className="text-sm text-slate-200 leading-relaxed font-light">{epoch.result}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Side (Desktop Only) */}
      <div className={`hidden md:flex items-center justify-center ${index % 2 === 0 ? 'md:order-2' : ''}`}>
        <div className="relative w-64 h-64 flex items-center justify-center">
           <div className={`absolute inset-0 border rounded-full transition-all duration-700 ${
             isHovered ? 'border-accent/20 scale-110 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/5 scale-100'
           }`} />
           <div className={`absolute inset-4 border border-accent/5 rounded-full animate-[spin_20s_linear_infinite] transition-opacity duration-700 ${
             isHovered ? 'opacity-100' : 'opacity-0'
           }`} />
           <div className={`text-7xl select-none transition-all duration-700 ${
             isHovered ? 'opacity-20 scale-125' : 'opacity-[0.03] scale-100'
           }`}>{epoch.icon}</div>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-dark">
              <span className={`text-[8px] font-mono tracking-[0.6em] uppercase whitespace-nowrap transition-colors duration-500 ${
                isHovered ? 'text-accent' : 'text-slate-400'
              }`}>
                Historical Milestone
              </span>
           </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-40 px-6 relative bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-accent/60" />
            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">
              Section 03: History of Struggle
            </span>
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-slate-100 mb-8 leading-[1.1]">
            Bánh Xe <span className="text-accent italic">Tiến Hóa</span> <br />
            Của Nhân Loại
          </h2>
          
          <p className="font-sans text-slate-200 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
            Nhìn lại hành trình của các hình thái kinh tế - xã hội, nơi mỗi cuộc cách mạng 
            là một nấc thang tất yếu đưa xã hội lên tầm cao mới.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {timelineEpochs.map((epoch, i) => (
            <EpochCard key={epoch.id} epoch={epoch} index={i} />
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 p-16 glass-card border-accent/10 text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 border border-white/5 rounded-full flex items-center justify-center bg-dark">
             <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
          </div>
          <p className="font-serif text-3xl md:text-4xl text-slate-100 italic mb-10 leading-relaxed tracking-tight">
            "Đấu tranh giai cấp là động lực trực tiếp của lịch sử các xã hội có giai cấp."
          </p>
          <div className="h-[1px] w-24 bg-accent/30 mx-auto mb-8" />
          <p className="text-[10px] font-mono text-slate-350 uppercase tracking-[0.5em]">
            Friedrich Engels & Karl Marx
          </p>
        </motion.div>
      </div>
    </section>
  )
}
