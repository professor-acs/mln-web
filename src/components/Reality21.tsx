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
        <div className="bg-slate-900 border border-white/5 p-4 shadow-2xl">
          <p className="font-mono text-accent text-[10px] uppercase tracking-widest mb-2">Year {label}</p>
          {payload.map((p: any, i: number) => (
            <p key={i} className="text-xs font-sans text-slate-300 flex justify-between gap-4">
              <span className="opacity-60">{p.name}:</span>
              <span className="font-bold text-slate-100">{p.value}%</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div ref={chartRef} className="p-10 glass-card border-white/5 mt-20">
      <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
        <div>
          <h4 className="font-serif text-2xl text-slate-100 mb-2">
            Bất Bình Đẳng Tài Sản Toàn Cầu
          </h4>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
            Data Source: World Inequality Database (1980–2024)
          </p>
        </div>
        <div className="flex gap-1 p-1 bg-white/5 rounded-sm">
          {(['area', 'bar'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setChartType(t)}
              className={`px-6 py-2 rounded-sm text-[9px] font-mono uppercase tracking-[0.2em] transition-all ${
                chartType === t
                  ? 'bg-accent text-dark font-bold'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 360 }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={realityData.chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4af37" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.03} vertical={false} />
              <XAxis dataKey="name" stroke="#475569" tick={{ fontFamily: 'Space Grotesk', fontSize: 9 }} axisLine={false} tickLine={false} dy={10} />
              <YAxis stroke="#475569" tick={{ fontFamily: 'Space Grotesk', fontSize: 9 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="top" align="right" height={40} iconType="circle"
                wrapperStyle={{ fontFamily: 'Space Grotesk', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', paddingBottom: '20px' }} />
              <Area type="monotone" dataKey="top1" name="Top 1%" stroke="#d4af37" fill="url(#areaGrad)" strokeWidth={2} dot={{ fill: '#d4af37', r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
              <Area type="monotone" dataKey="bottom50" name="Bottom 50%" stroke="#475569" fill="transparent" strokeWidth={1} strokeDasharray="4 4" dot={{ fill: '#475569', r: 2, strokeWidth: 0 }} />
            </AreaChart>
          ) : (
            <BarChart data={realityData.chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.03} vertical={false} />
              <XAxis dataKey="name" stroke="#475569" tick={{ fontFamily: 'Space Grotesk', fontSize: 9 }} axisLine={false} tickLine={false} dy={10} />
              <YAxis stroke="#475569" tick={{ fontFamily: 'Space Grotesk', fontSize: 9 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="top" align="right" height={40} iconType="circle"
                wrapperStyle={{ fontFamily: 'Space Grotesk', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', paddingBottom: '20px' }} />
              <Bar dataKey="top1" name="Top 1%" fill="#d4af37" radius={[2, 2, 0, 0]} barSize={32} />
              <Bar dataKey="bottom50" name="Bottom 50%" fill="#1e293b" radius={[2, 2, 0, 0]} barSize={32} />
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="p-12 border-r border-white/5 last:border-0 flex flex-col items-center md:items-start"
    >
      <div className="font-serif text-6xl font-medium text-accent mb-4 tracking-tighter">
        {inView ? (
          <CountUp
            end={stat.value}
            duration={3}
            decimals={stat.value % 1 !== 0 ? 1 : 0}
            suffix={stat.suffix}
          />
        ) : '0'}
      </div>
      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] text-center md:text-left">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function Reality21() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)
  const activeCase = realityData.caseStudies[activeCaseStudy]

  return (
    <section id="reality" className="py-40 px-6 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-accent/60" />
            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">
              Section 04: Digital Era Reality
            </span>
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-slate-100 mb-8 leading-[1.1]">
            Giai Cấp Trong <br />
            <span className="text-accent italic">Thời Đại Số</span>
          </h2>
          
          <p className="font-sans text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
            Bản chất của bóc lột không biến mất — nó chỉ tiến hóa sang những hình thái tinh vi 
            dưới sự hỗ trợ của thuật toán và hạ tầng kỹ thuật số.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 glass-card border-white/5 mb-32">
          {realityData.stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>

        {/* Case Study Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Tabs */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em] mb-10 pl-2">
                Case Study Archives
              </p>
              <div className="space-y-4 relative">
                {/* Vertical Progress Line for Tabs */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
                
                {realityData.caseStudies.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCaseStudy(i)}
                    className="w-full relative group pl-8 py-2 text-left transition-all duration-500"
                  >
                    {/* Active Indicator */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-700 ${
                      activeCaseStudy === i ? 'bg-accent h-full shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-transparent h-0'
                    }`} />
                    
                    <div className="flex flex-col">
                      <span className={`text-[8px] font-mono uppercase tracking-[0.3em] mb-1 transition-colors duration-500 ${
                        activeCaseStudy === i ? 'text-accent' : 'text-slate-600'
                      }`}>
                        Index 0{i + 1}
                      </span>
                      <span className={`font-serif text-xl tracking-tight transition-all duration-500 ${
                        activeCaseStudy === i ? 'text-white translate-x-1' : 'text-slate-500 group-hover:text-slate-300'
                      }`}>
                        {c.tag}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Decorative detail */}
              <div className="mt-20 p-6 border border-white/5 rounded-sm bg-white/[0.01]">
                 <p className="text-[10px] text-slate-600 font-mono leading-relaxed">
                   Các nghiên cứu điển hình nhằm minh chứng sự vận động của quy luật giai cấp trong bối cảnh nền kinh tế số và AI.
                 </p>
              </div>
            </div>
          </div>

          {/* Case Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCaseStudy}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-12 border-accent/10 relative overflow-hidden group"
              >
                {/* Case Study Image Background */}
                {activeCase.image && (
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                    <img 
                       src={activeCase.image} 
                       alt={activeCase.title} 
                       className="w-full h-full object-cover filter grayscale"
                       crossOrigin="anonymous"
                       referrerPolicy="no-referrer"
                     />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-14 h-14 rounded-sm border border-accent/20 flex items-center justify-center text-3xl bg-accent/5">
                      {activeCase.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-white mb-2">{activeCase.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{activeCase.tag}</span>
                        <div className="h-[1px] w-12 bg-white/10" />
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-slate-300 text-lg leading-relaxed mb-12 font-light">
                    {activeCase.intro}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeCase.analysis.map((item: any, i: number) => (
                      <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-sm hover:border-accent/20 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Inequality Chart */}
        <InequalityChart />
      </div>
    </section>
  )
}
