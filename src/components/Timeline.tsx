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
      className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 mb-40 last:mb-0 items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Center Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-700 ${
          isHovered ? 'bg-accent scale-125 shadow-[0_0_20px_rgba(212,175,55,1)]' : 'bg-white/20'
        }`} />
      </div>

      {/* Content Side */}
      <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'} flex flex-col`}>
        <div className="mb-6">
          <span className={`font-mono text-xs uppercase tracking-[0.5em] mb-2 block transition-colors duration-500 ${
            isHovered ? 'text-accent' : 'text-slate-100'
          }`}>
            {epoch.period}
          </span>
          <h3 className={`font-serif text-4xl leading-tight transition-colors duration-500 ${
            isHovered ? 'text-white' : 'text-slate-100'
          }`}>
            {epoch.era}
          </h3>
        </div>

        <motion.div 
          className={`p-10 rounded-sm border transition-all duration-700 relative overflow-hidden group w-full max-w-xl ${
            index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
          } ${
            isHovered 
              ? 'bg-slate-900/80 border-accent/50 shadow-[0_0_50px_rgba(212,175,55,0.15)] scale-[1.02]' 
              : 'bg-slate-900/60 border-white/20 backdrop-blur-sm'
          }`}
        >
          {/* Permanent Accent Line (Top) */}
          <div className={`absolute top-0 left-0 h-[2px] transition-all duration-700 ${
            isHovered ? 'w-full bg-accent' : 'w-12 bg-accent/30'
          }`} />

          {/* Background Decorative Index */}
          <div className={`absolute -right-4 -bottom-8 font-mono text-9xl transition-all duration-1000 select-none pointer-events-none ${
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
              <div className={`flex-1 h-[1px] transition-all duration-700 ${
                isHovered ? 'bg-accent/40' : 'bg-white/10'
              }`} />
              <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono uppercase tracking-widest transition-colors duration-500 ${
                    isHovered ? 'text-accent' : 'text-slate-100'
                  }`}>
                   Phân tích
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
                 <p className={`text-xs font-mono uppercase mb-2 tracking-widest transition-colors duration-500 ${
                   isHovered ? 'text-accent/90' : 'text-accent/70'
                 }`}>Thống trị</p>
                <p className={`text-base font-serif transition-colors duration-500 ${
                  isHovered ? 'text-slate-100' : 'text-slate-300'
                }`}>{epoch.oppressor.name}</p>
              </div>
              <div className={`${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                 <p className={`text-xs font-mono uppercase mb-2 tracking-widest transition-colors duration-500 ${
                   isHovered ? 'text-accent/90' : 'text-accent/70'
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
                       <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Bản chất Mâu thuẫn</p>
                       <p className="text-slate-200 mt-4 text-base leading-loose font-light italic">"{epoch.conflict}"</p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                       <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Kết quả Biện chứng</p>
                       <p className="text-slate-200 mt-4 text-base leading-loose font-light">{epoch.result}</p>
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
        <div className="relative w-80 h-80 flex items-center justify-center">
           {/* Image Container */}
           <div className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-1000 ${
             isHovered ? 'scale-[1.08] rotate-0 shadow-[0_0_60px_rgba(212,175,55,0.2)]' : 'scale-100 rotate-0 grayscale-[0.6] opacity-40'
           }`}>
              <img 
                src={epoch.image} 
                alt={epoch.era}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-700" />
           </div>

           <div className={`absolute inset-0 border rounded-full transition-all duration-700 ${
             isHovered ? 'border-accent/40 scale-[1.12]' : 'border-white/10 scale-100'
           }`} />
           
           <div className={`absolute inset-4 border border-accent/10 rounded-full animate-[spin_30s_linear_infinite] transition-opacity duration-700 ${
             isHovered ? 'opacity-100' : 'opacity-0'
           }`} />

           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-dark z-20">
              <span className={`text-[10px] font-mono tracking-[0.6em] uppercase whitespace-nowrap transition-colors duration-500 ${
                isHovered ? 'text-accent' : 'text-slate-100'
              }`}>
                Cột mốc Lịch sử
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
            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">
              Phần 03: Lịch sử Đấu tranh
            </span>
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-slate-100 mb-8 leading-[1.1]">
            Bánh Xe <span className="text-accent italic">Tiến Hóa</span> <br />
            Của Nhân Loại
          </h2>
          
          <p className="font-sans text-slate-100 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
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
          className="mt-48 p-16 glass-card border-accent/25 text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 border border-white/15 rounded-full flex items-center justify-center bg-dark">
             <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
          </div>
          <p className="font-serif text-3xl md:text-4xl text-slate-100 italic mb-10 leading-relaxed tracking-tight">
            "Đấu tranh giai cấp là động lực trực tiếp của lịch sử các xã hội có giai cấp."
          </p>
          <div className="h-[1px] w-24 bg-accent/30 mx-auto mb-8" />
          <p className="text-xs font-mono text-slate-100 uppercase tracking-[0.5em]">
            Friedrich Engels & Karl Marx
          </p>
        </motion.div>
      </div>
    </section>
  )
}
