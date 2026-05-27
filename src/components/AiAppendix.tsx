import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { aiAppendix } from '../data/content'
import { X, ShieldCheck, BookOpen, Cpu, AlertCircle } from 'lucide-react'

export default function AiAppendix() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'statement' | 'log' | 'refs'>('statement')

  const tabs = [
    { id: 'statement' as const, label: 'Cam kết', icon: ShieldCheck },
    { id: 'log' as const, label: 'Nhật ký AI', icon: Cpu },
    { id: 'refs' as const, label: 'Tài liệu tham khảo', icon: BookOpen },
  ]

  return (
    <>
      {/* Pinned Footer Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold-muted/30"
        style={{ background: 'rgba(10,10,26,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-gold-DEFAULT/70 text-xs font-mono">
              📋 Triết học Marx-Lenin · Chương III · Giai cấp và Đấu tranh giai cấp
            </span>
            <span className="hidden sm:inline w-px h-4 bg-gold-muted" />
            <span className="hidden sm:inline text-cream/40 text-xs font-mono">
              Karl Marx & Friedrich Engels, 1848
            </span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-muted text-gold-DEFAULT text-xs font-mono hover:bg-gold-DEFAULT hover:text-dark-DEFAULT transition-all duration-300"
          >
            <ShieldCheck size={12} />
            <span>Phụ lục AI & Cam kết Học thuật</span>
          </button>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="modal-content"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-DEFAULT/20 flex items-center justify-center">
                      <ShieldCheck size={16} className="text-gold-DEFAULT" />
                    </div>
                    <h2 className="font-cinzel text-xl font-bold gold-text">
                      Phụ Lục Học Thuật & Minh Bạch AI
                    </h2>
                  </div>
                  <p className="text-xs font-mono text-cream/40">
                    Đáp ứng Barem 4 · Ứng dụng AI có trách nhiệm · 2 điểm
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-cream/40 hover:text-cream transition-colors p-2 rounded-xl hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-8 border-b border-white/10 pb-4 flex-wrap">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-inter transition-all ${
                        activeTab === tab.id
                          ? 'bg-gold-DEFAULT text-dark-DEFAULT font-bold'
                          : 'text-cream/60 hover:text-cream border border-white/10 hover:border-gold-muted'
                      }`}
                    >
                      <Icon size={14} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">

                {/* Academic Integrity Statement */}
                {activeTab === 'statement' && (
                  <motion.div
                    key="statement"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    {/* Integrity markers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: '✅', label: 'Minh bạch', desc: 'Có phụ lục AI Usage liệt kê đầy đủ công cụ, mục đích và kết quả.' },
                        { icon: '✅', label: 'Có trách nhiệm', desc: 'Kiểm chứng thông tin bằng giáo trình LLCT, nghị quyết và văn bản chính thống.' },
                        { icon: '✅', label: 'Sáng tạo', desc: 'AI đóng vai trò hỗ trợ kỹ thuật, không thay thế toàn bộ tư duy học thuật.' },
                        { icon: '✅', label: 'Liêm chính', desc: 'Phân định rõ AI output và phần sinh viên chỉnh sửa, biên soạn.' },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 rounded-xl border border-green-700/30 bg-green-900/10">
                          <span className="text-xl flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-bold text-sm text-green-300 mb-1">{item.label}</p>
                            <p className="text-xs text-cream/60 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Statement */}
                    <div className="p-6 rounded-2xl border border-gold-muted bg-gold-DEFAULT/5">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertCircle size={16} className="text-gold-DEFAULT" />
                        <h3 className="font-bold font-inter text-gold-DEFAULT">Tuyên bố Cam kết Liêm chính Học thuật</h3>
                      </div>
                      <blockquote className="font-inter text-sm text-cream/80 leading-relaxed italic border-l-2 border-gold-DEFAULT pl-4">
                        "{aiAppendix.statement}"
                      </blockquote>
                    </div>
                  </motion.div>
                )}

                {/* AI Usage Log */}
                {activeTab === 'log' && (
                  <motion.div
                    key="log"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-xs font-mono text-cream/40 mb-4">
                      Nhật ký sử dụng AI · Phân định AI output và phần chỉnh sửa của sinh viên
                    </p>
                    {aiAppendix.usageLog.map((entry, i) => (
                      <div key={i} className="glass-card p-5 border border-white/10">
                        <div className="flex items-center gap-2 mb-4">
                          <Cpu size={14} className="text-neon-blue" />
                          <h4 className="font-mono font-bold text-neon-blue text-sm">{entry.tool}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs font-bold text-cream/40 uppercase tracking-wider mb-2">Mục đích</p>
                            <p className="text-sm text-cream/70 leading-relaxed">{entry.purpose}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-cream/40 uppercase tracking-wider mb-2">Kết quả AI</p>
                            <p className="text-sm text-cream/70 leading-relaxed">{entry.output}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gold-DEFAULT/70 uppercase tracking-wider mb-2">✏️ Sinh viên chỉnh sửa</p>
                            <p className="text-sm text-cream/70 leading-relaxed">{entry.edited}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* References */}
                {activeTab === 'refs' && (
                  <motion.div
                    key="refs"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-3"
                  >
                    <p className="text-xs font-mono text-cream/40 mb-4">
                      Nguồn tài liệu đối chiếu chính thống · Kiểm chứng thông tin AI
                    </p>
                    {aiAppendix.references.map((ref, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/3">
                        <span className="font-cinzel font-black text-gold-DEFAULT text-lg flex-shrink-0 w-6">
                          {i + 1}
                        </span>
                        <p className="font-inter text-sm text-cream/70 leading-relaxed">{ref}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
