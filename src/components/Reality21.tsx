import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, Area, AreaChart
} from 'recharts'
import CountUp from 'react-countup'
import { realityData } from '../data/content'

function InequalityChart() {
  const [chartType, setChartType] = useState<'bar' | 'area'>('area')
  const [chartRef] = useInView({ threshold: 0.2, triggerOnce: true })

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-800 border border-gold-muted rounded-xl p-4 shadow-2xl">
          <p className="font-mono text-gold-DEFAULT font-bold mb-2">Năm {label}</p>
          {payload.map((p: any, i: number) => (
            <p key={i} className="text-sm font-inter" style={{ color: p.color }}>
              {p.name}: <span className="font-bold">{p.value}%</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div ref={chartRef} className="glass-card p-6 mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="font-cinzel text-lg font-bold text-cream mb-1">
            Bất Bình Đẳng Tài Sản Toàn Cầu (1980–2024)
          </h4>
          <p className="text-xs font-mono text-cream/40">Nguồn: Oxfam Global Inequality Report</p>
        </div>
        <div className="flex gap-2">
          {(['area', 'bar'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setChartType(t)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                chartType === t
                  ? 'bg-gold-DEFAULT text-dark-DEFAULT font-bold'
                  : 'border border-gold-muted text-gold-DEFAULT'
              }`}
            >
              {t === 'area' ? 'Đường' : 'Cột'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={realityData.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c9a84c" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#c9a84c" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="name" stroke="#f0ece450" tick={{ fontFamily: 'JetBrains Mono', fontSize: 11 }} />
              <YAxis stroke="#f0ece450" tick={{ fontFamily: 'JetBrains Mono', fontSize: 11 }}
                tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontFamily: 'Inter', fontSize: 12, color: '#f0ece4aa' }} />
              <Area type="monotone" dataKey="top1" name="Top 1% giàu nhất"
                stroke="#c9a84c" fill="url(#goldGrad)" strokeWidth={2.5} dot={{ fill: '#c9a84c', r: 4 }} />
              <Area type="monotone" dataKey="bottom50" name="Bottom 50% nghèo nhất"
                stroke="#00d4ff" fill="url(#blueGrad)" strokeWidth={2.5} dot={{ fill: '#00d4ff', r: 4 }} />
            </AreaChart>
          ) : (
            <BarChart data={realityData.chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="name" stroke="#f0ece450" tick={{ fontFamily: 'JetBrains Mono', fontSize: 11 }} />
              <YAxis stroke="#f0ece450" tick={{ fontFamily: 'JetBrains Mono', fontSize: 11 }}
                tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontFamily: 'Inter', fontSize: 12, color: '#f0ece4aa' }} />
              <Bar dataKey="top1" name="Top 1% giàu nhất" fill="#c9a84c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="bottom50" name="Bottom 50% nghèo nhất" fill="#00d4ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function StatCard({ stat, index }: { stat: typeof realityData.stats[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 text-center"
      style={{ borderColor: `${stat.color}40` }}
    >
      <div className="font-cinzel text-4xl sm:text-5xl font-black mb-2" style={{ color: stat.color }}>
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2}
            decimals={stat.value % 1 !== 0 ? 1 : 0}
            suffix={stat.suffix}
          />
        ) : '0'}
      </div>
      <p className="text-xs font-inter text-cream/60 leading-relaxed">{stat.label}</p>
    </motion.div>
  )
}

export default function Reality21() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const activeCase = realityData.caseStudies[activeCaseStudy]

  return (
    <section id="reality" className="py-24 px-6 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.05), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.05), transparent 60%)',
          position: 'absolute', inset: 0,
        }} />
        {/* Grid lines */}
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          position: 'absolute', inset: 0,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase border rounded-full px-4 py-2"
            style={{ borderColor: 'rgba(0,212,255,0.3)', color: '#00d4ff' }}>
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span>Block 03 · Thực tiễn thế kỷ 21</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black mb-4">
            <span className="neon-text">Giai Cấp Thời Số</span>
          </h2>
          <p className="font-inter text-cream/60 max-w-2xl mx-auto">
            Bản chất bóc lột giai cấp không biến mất — nó khoác lên mình bộ vest tech startup và di chuyển trên cơ sở hạ tầng kỹ thuật số
          </p>
          <div className="w-16 h-px mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {realityData.stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>

        {/* Case Study Tabs */}
        <div className="flex gap-3 mb-6">
          {realityData.caseStudies.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseStudy(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-inter font-semibold text-sm transition-all duration-300 ${
                activeCaseStudy === i
                  ? 'text-dark-DEFAULT'
                  : 'glass-card text-cream/60 hover:text-cream'
              }`}
              style={activeCaseStudy === i ? {
                background: `linear-gradient(135deg, ${c.tagColor}, ${c.tagColor}cc)`,
                boxShadow: `0 0 30px ${c.tagColor}40`,
              } : {}}
            >
              <span>{c.icon}</span>
              <span className="hidden sm:inline">{c.tag}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
            style={{ borderColor: `${activeCase.tagColor}40` }}
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">{activeCase.icon}</span>
              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border"
                  style={{ borderColor: `${activeCase.tagColor}50`, color: activeCase.tagColor }}>
                  {activeCase.tag}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-2 text-cream">
                  {activeCase.title}
                </h3>
              </div>
            </div>

            <p className="font-inter text-cream/70 text-sm leading-relaxed mb-8 italic border-l-2 pl-4"
              style={{ borderColor: activeCase.tagColor }}>
              {activeCase.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeCase.analysis.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl border bg-white/3"
                  style={{ borderColor: `${activeCase.tagColor}25` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-xs font-bold font-mono" style={{ color: activeCase.tagColor }}>
                      {item.label}
                    </p>
                  </div>
                  <p className="text-sm font-inter text-cream/70 leading-relaxed">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Inequality Chart */}
        <InequalityChart />

        {/* Marx conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(201,168,76,0.08))', border: '1px solid rgba(0,212,255,0.2)' }}
        >
          <p className="font-cinzel text-lg text-cream/90">
            Câu hỏi của thế kỷ 21: <span className="neon-text font-bold">"Ai sở hữu AI?"</span>{' '}
            chính là câu hỏi về <span className="gold-text font-bold">quyền lực giai cấp</span> của thời đại mới.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
