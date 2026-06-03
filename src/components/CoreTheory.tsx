import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { sectionContent, type SectionType } from '../data/content'

// ─── Flip Card ───────────────────────────────────────────────
function TheoryCard({ card, index }: { card: any; index: number }) {
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
          className={`flip-card-front w-full h-full glass-card p-10 flex flex-col relative overflow-hidden transition-all duration-700 rounded-2xl border border-white/10 hover:border-accent/30 ${
            isHovered ? 'bg-slate-900/80 shadow-[0_0_50px_rgba(212,175,55,0.15)] scale-[1.02]' : 'bg-slate-900/60'
          }`}
        >
          {/* === KHỐI BACKGROUND IMAGE (Xử lý hiệu ứng ảnh) === */}
          {card.image && (
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover object-bottom scale-110 blur-[3px] opacity-60 group-hover:blur-none group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
              
              {/* LỚP 1: MÀNG LỌC TỔNG THỂ (Dìm độ chói của vùng khói sáng) */}
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-1000"></div>
              
              {/* LỚP 2: GRADIENT BẢO VỆ CHỮ (Bí kíp nằm ở các % Stop)
                - from-black/95 từ 0% đến 10%: Đảm bảo Tiêu đề luôn có nền đen kịt.
                - via-black/80 via-[55%]: ÉP dải màu đen kéo dài xuống tận 55% của Card để ôm trọn phần Description.
                - to-transparent: Chỉ để trong suốt ở nửa dưới cùng.
              */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/95 from-10% via-black/80 via-[55%] to-transparent group-hover:opacity-80 transition-opacity duration-1000"></div>

              {/* LỚP 3: GRADIENT ĐÁY (Bảo vệ phần Footer "SEC X") */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent"></div>
            </div>
          )}

          {/* Radiant Glow */}
          <AnimatePresence>
            {isHovered && !flipped && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none z-10"
                style={{ background: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.1) 0%, transparent 60%)' }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-20 flex flex-col h-full justify-between">
            <div>
              {/* Thêm shadow/glow vàng nhẹ cho đường gạch ngang */}
              <div className="w-12 h-[2px] bg-accent mb-6 opacity-80 shadow-[0_0_8px_rgba(212,175,55,0.8)] group-hover:w-20 transition-all duration-700"></div>

              <div className="mb-4">
                <span className={`font-mono text-xs uppercase tracking-[0.5em] mb-4 block transition-colors duration-500 ${
                  isHovered ? 'text-accent' : 'text-slate-100'
                }`}>
                  {card.subtitle}
                </span>
                
                {/* TIÊU ĐỀ: Dùng Text Shadow kẹp 2 lớp */}
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white tracking-wide [text-shadow:_0_4px_20px_rgb(0_0_0_/_100%),_0_2px_4px_rgb(0_0_0_/_100%)]">
                  {card.title}
                </h3>
              </div>

              {/* ĐOẠN VĂN: Sáng slate-100, Glow Đen mạnh, font-normal */}
              <p className="text-slate-100 text-base md:text-lg leading-loose tracking-wide font-normal [text-shadow:_0_2px_15px_rgb(0_0_0_/_100%),_0_1px_3px_rgb(0_0_0_/_100%)]">
                {card.frontSummary}
              </p>
            </div>

            {/* FOOTER CARD: UI Góc */}
            <div className="mt-10 pt-6 border-t border-white/20 flex justify-between items-center relative">
               <span className="font-mono text-accent text-sm font-semibold tracking-[0.1em] [text-shadow:_0_2px_8px_rgb(0_0_0_/_100%)]">
                 SEC {index + 1}
               </span>
               
               {/* Bọc nền đen mờ cho nút dấu + */}
               <div className="w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-accent/60 group-hover:bg-accent/20 transition-all duration-500">
                  <span className="text-white text-sm font-light">+</span>
               </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back glass-card p-10 flex flex-col border-accent/30 bg-slate-950/90 shadow-[0_0_60px_rgba(212,175,55,0.15)] rounded-2xl">
          <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
            <div>
              <h3 className="font-serif text-2xl text-white">{card.title}</h3>
              <p className="text-xs font-mono text-accent uppercase tracking-[0.4em] mt-2">Hệ tư tưởng · Chương III</p>
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
            {/* criteria (class-def) */}
            {card.criteria && (
              <div className="space-y-4">
                {card.criteria.map((c: any) => (
                  <div key={c.number} className="flex gap-6 items-start">
                    <span className="font-serif italic text-accent text-xl opacity-40">{c.number}</span>
                    <div>
                      <p className="text-slate-100 text-base font-medium mb-1">{c.title}</p>
                      <p className="text-slate-100 text-sm leading-loose tracking-wide font-light">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* stages (origin) */}
            {card.stages && (
              <div className="space-y-6">
                {card.stages.map((s: any, i: number) => (
                  <div key={i} className="relative pl-8 border-l border-white/15">
                    <div className="absolute -left-[1px] top-0 w-[2px] h-4 bg-accent" />
                    <div className="mb-2">
                      <span className="text-xs font-mono text-accent uppercase tracking-widest">{s.era}</span>
                    </div>
                    <p className="text-slate-100 text-sm leading-loose tracking-wide font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* forms (struggle, nationality-roles) */}
            {card.forms && (
              <div className="space-y-4">
                {card.forms.map((f: any, i: number) => (
                  <div key={i} className="p-5 bg-white/[0.04] border border-white/15 rounded-sm">
                    <div className="flex items-center gap-4 mb-2">
                      <p className="text-slate-100 text-base font-medium">{f.title}</p>
                    </div>
                    <p className="text-slate-100 text-sm leading-loose tracking-wide font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* points (nationality-concept, class-nation, humanity, dialectical-relation) */}
            {card.points && (
              <div className="space-y-4">
                {card.points.map((p: any, i: number) => (
                  <div key={i} className="p-5 bg-white/[0.04] border border-white/15 rounded-sm">
                    <p className="text-slate-100 text-base font-medium mb-1">{p.title}</p>
                    <p className="text-slate-100 text-sm leading-loose tracking-wide font-light">{p.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* lifeLinks (nationality-historical-char) */}
            {card.lifeLinks && (
              <div className="space-y-4 mt-6 pt-6 border-t border-white/15">
                <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">Liên hệ đời sống</p>
                {card.lifeLinks.map((link: any, i: number) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <div>
                      <p className="text-slate-100 text-sm font-medium mb-1">{link.title}</p>
                      <p className="text-slate-100 text-sm leading-loose tracking-wide italic">{link.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {card.keyTakeaway && (
            <div className="mt-8 p-6 bg-accent/[0.03] border border-accent/10 rounded-sm">
              <p className="text-sm font-sans text-slate-100 leading-loose tracking-wide italic">
                <span className="text-accent font-mono font-bold not-italic uppercase text-xs tracking-widest mr-2">Cốt yếu:</span>
                {card.keyTakeaway}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Component ───────────────────────────────────────────
const SECTIONS: SectionType[] = ['3.2.1', '3.2.2', '3.2.3']

export default function CoreTheory() {
  const [activeSection, setActiveSection] = useState<SectionType>('3.2.1')
  const [showDropdown, setShowDropdown] = useState(false)
  const section = sectionContent[activeSection]

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
              <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">
                {section.subtitle}: Core Ideology
              </span>
            </motion.div>

            <motion.h2
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-7xl text-slate-100 mb-8 leading-[1.1]"
            >
              {section.title}
            </motion.h2>

            <motion.p
              key={`desc-${activeSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-slate-100 max-w-2xl text-lg md:text-xl leading-relaxed font-light"
            >
              {section.description}
            </motion.p>
          </div>

          {/* Section Dropdown */}
          <div className="lg:col-span-4 lg:text-right flex lg:justify-end items-start">
            <div className="relative">
              <button
                id="theory-section-dropdown"
                onClick={() => setShowDropdown(!showDropdown)}
                className="inline-flex items-center gap-3 px-6 py-4 border border-accent/30 bg-accent/5 hover:bg-accent/10 rounded-sm transition-all duration-300 group"
              >
                <span className="text-5xl font-serif text-accent/60 group-hover:text-accent transition-colors duration-300">
                  {activeSection}
                </span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] font-mono text-slate-100 uppercase tracking-[0.5em]">Section</span>
                  <motion.svg
                    className="w-4 h-4 text-accent/60"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    animate={{ rotate: showDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-72 border border-accent/20 bg-slate-950/95 backdrop-blur-sm rounded-sm overflow-hidden z-50 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  >
                    {SECTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setActiveSection(s); setShowDropdown(false) }}
                        className={`w-full px-5 py-4 text-left flex items-center gap-4 transition-all duration-300 border-b border-white/15 last:border-b-0 ${
                          activeSection === s
                            ? 'bg-accent/20 text-accent font-bold'
                            : 'text-slate-100 hover:text-white hover:bg-white/[0.05]'
                        }`}
                      >
                        <span className={`font-serif text-2xl transition-colors duration-300 ${
                          activeSection === s ? 'text-accent' : 'text-white/20'
                        }`}>{s}</span>
                        <div>
                          <p className="text-sm font-medium leading-tight">{sectionContent[s].title}</p>
                          <p className="text-xs font-mono text-slate-100 uppercase tracking-wider mt-0.5">
                            {sectionContent[s].cards.length} cards
                          </p>
                        </div>
                        {activeSection === s && (
                          <motion.div layoutId="sectionCheck" className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {section.cards.map((card: any, i: number) => (
            <TheoryCard key={card.id} card={card} index={i} />
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-xs font-mono text-slate-100 uppercase tracking-[0.3em]">
              Official Reference Archive
            </p>
          </div>
          <p className="text-xs font-serif italic text-slate-100 max-w-md text-center md:text-right leading-relaxed">
            V.I. Lenin, "Sáng kiến vĩ đại" & Giáo trình Triết học Mác-Lênin (Bộ Giáo dục và Đào tạo Việt Nam)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
