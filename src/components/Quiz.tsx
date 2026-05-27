import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { quizQuestions } from '../data/content'

interface ConfettiPiece {
  id: number
  x: number
  color: string
  duration: number
  delay: number
  size: number
  radius: number
}

function Confetti({ show }: { show: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const colors = ['#c9a84c', '#e74c3c', '#27ae60', '#00d4ff', '#7c3aed', '#e8c96d']

  useEffect(() => {
    if (show) {
      const newPieces = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 1.5,
        size: Math.random() * 8 + 6,
        radius: Math.random() > 0.5 ? 50 : 2,
      }))
      setPieces(newPieces)
      const t = setTimeout(() => setPieces([]), 5000)
      return () => clearTimeout(t)
    }
  }, [show])

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece pointer-events-none"
          style={{
            left: `${p.x}vw`,
            background: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--radius': `${p.radius}%`,
            borderRadius: `${p.radius}%`,
          } as React.CSSProperties}
        />
      ))}
    </>
  )
}

type QuizState = 'idle' | 'question' | 'answered' | 'explained'

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [quizState, setQuizState] = useState<QuizState>('idle')
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [scores, setScores] = useState({ correct: 0, wrong: 0 })
  const [answeredAll, setAnsweredAll] = useState(false)
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const question = quizQuestions[currentQ]

  const handleStart = () => {
    setQuizState('question')
    setSelectedAnswer(null)
  }

  const handleAnswer = (optionId: string) => {
    if (quizState !== 'question') return
    setSelectedAnswer(optionId)
    setQuizState('answered')
    const isCorrect = optionId === question.correct
    if (isCorrect) {
      setShowConfetti(true)
      setScores((s) => ({ ...s, correct: s.correct + 1 }))
      setTimeout(() => setShowConfetti(false), 100)
    } else {
      setScores((s) => ({ ...s, wrong: s.wrong + 1 }))
    }
  }

  const handleShowExplanation = () => setQuizState('explained')

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ((q) => q + 1)
      setQuizState('question')
      setSelectedAnswer(null)
    } else {
      setAnsweredAll(true)
    }
  }

  const handleReset = () => {
    setCurrentQ(0)
    setQuizState('idle')
    setSelectedAnswer(null)
    setScores({ correct: 0, wrong: 0 })
    setAnsweredAll(false)
  }

  const getOptionClass = (optId: string) => {
    if (quizState === 'question') return ''
    if (optId === question.correct) return 'correct'
    if (optId === selectedAnswer && optId !== question.correct) return 'wrong'
    return 'opacity-40'
  }

  return (
    <section id="quiz" className="py-24 px-6 relative overflow-hidden">
      <Confetti show={showConfetti} />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08), transparent 60%)' }} />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase border border-purple-700/50 rounded-full px-4 py-2 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Block 04 · Tương tác trực tiếp</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black mb-4 text-cream">
            Quiz <span style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Triết Học</span>
          </h2>
          <p className="font-inter text-cream/60 max-w-xl mx-auto">
            Thử thách hiểu biết của bạn về lý thuyết giai cấp Marx!
          </p>
          <div className="section-divider mt-6" style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }} />
        </motion.div>

        {/* Quiz Card */}
        <AnimatePresence mode="wait">

          {/* IDLE */}
          {quizState === 'idle' && !answeredAll && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="glass-card p-10 text-center"
              style={{ borderColor: 'rgba(124,58,237,0.4)' }}
            >
              <div className="text-6xl mb-6">🎮</div>
              <h3 className="font-cinzel text-2xl font-bold text-cream mb-3">
                Sẵn sàng thử thách chưa?
              </h3>
              <p className="font-inter text-cream/60 mb-8">
                {quizQuestions.length} câu hỏi về lý thuyết giai cấp Marx · Không giới hạn thời gian
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {quizQuestions.map((q, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/40 text-sm font-inter text-cream/70">
                    <span>{q.emoji}</span>
                    <span>Câu {i + 1}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-10 py-4 rounded-2xl font-inter font-bold text-white text-lg transition-all"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.5)',
                }}
              >
                🚀 Bắt đầu Quiz!
              </motion.button>
            </motion.div>
          )}

          {/* QUESTION / ANSWERED / EXPLAINED */}
          {(quizState === 'question' || quizState === 'answered' || quizState === 'explained') && !answeredAll && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Progress */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 rounded-full bg-dark-700">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentQ + (quizState !== 'question' ? 1 : 0)) / quizQuestions.length) * 100}%`,
                      background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
                    }}
                  />
                </div>
                <span className="font-mono text-sm text-cream/50">
                  {currentQ + 1}/{quizQuestions.length}
                </span>
                <div className="flex gap-3 text-sm font-mono">
                  <span className="text-green-400">✓ {scores.correct}</span>
                  <span className="text-red-400">✗ {scores.wrong}</span>
                </div>
              </div>

              {/* Question */}
              <div className="glass-card p-8" style={{ borderColor: 'rgba(124,58,237,0.4)' }}>
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl flex-shrink-0">{question.emoji}</span>
                  <div>
                    <span className="text-xs font-mono text-purple-300/70 mb-2 block">
                      Câu hỏi {currentQ + 1}
                    </span>
                    <p className="font-inter text-lg sm:text-xl text-cream font-medium leading-relaxed">
                      {question.question}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((opt) => (
                    <motion.button
                      key={opt.id}
                      whileHover={quizState === 'question' ? { scale: 1.01, x: 4 } : {}}
                      whileTap={quizState === 'question' ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(opt.id)}
                      disabled={quizState !== 'question'}
                      className={`quiz-option w-full flex items-center gap-4 p-4 rounded-xl border text-left ${getOptionClass(opt.id)}`}
                      style={{
                        background: quizState === 'question'
                          ? 'rgba(255,255,255,0.04)'
                          : undefined,
                        borderColor: quizState === 'question' ? 'rgba(255,255,255,0.15)' : undefined,
                      }}
                    >
                      <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-cinzel font-bold text-sm bg-gradient-to-br ${opt.color} text-white`}>
                        {opt.id}
                      </span>
                      <span className="font-inter text-sm text-cream/90 leading-relaxed">{opt.text}</span>
                      {quizState !== 'question' && opt.id === question.correct && (
                        <span className="ml-auto text-green-400 flex-shrink-0">✓</span>
                      )}
                      {quizState !== 'question' && opt.id === selectedAnswer && opt.id !== question.correct && (
                        <span className="ml-auto text-red-400 flex-shrink-0">✗</span>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Post-answer actions */}
                {quizState === 'answered' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex flex-wrap gap-3"
                  >
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold ${
                      selectedAnswer === question.correct
                        ? 'bg-green-900/30 text-green-300 border border-green-700/50'
                        : 'bg-red-900/30 text-red-300 border border-red-700/50'
                    }`}>
                      {selectedAnswer === question.correct ? '🎉 Chính xác!' : '❌ Chưa đúng!'}
                    </div>
                    <button
                      onClick={handleShowExplanation}
                      className="px-4 py-2 rounded-xl text-sm font-inter border border-purple-700/50 text-purple-300 hover:bg-purple-900/20 transition-colors"
                    >
                      📖 Xem giải thích
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {quizState === 'explained' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="glass-card p-6 overflow-hidden"
                    style={{ borderColor: selectedAnswer === question.correct ? 'rgba(39,174,96,0.4)' : 'rgba(192,57,43,0.4)' }}
                  >
                    <p className="font-bold text-cream mb-3 font-inter">
                      {question.explanation.short}
                    </p>
                    <p className="font-inter text-sm text-cream/70 leading-relaxed">
                      {question.explanation.long}
                    </p>
                    <button
                      onClick={handleNext}
                      className="mt-6 px-6 py-3 rounded-xl font-inter font-bold text-white transition-all hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                        boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                      }}
                    >
                      {currentQ < quizQuestions.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🏆'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* RESULTS */}
          {answeredAll && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 text-center"
              style={{ borderColor: 'rgba(201,168,76,0.4)' }}
            >
              <div className="text-6xl mb-4">
                {scores.correct === quizQuestions.length ? '🏆' : scores.correct > 0 ? '🎯' : '📚'}
              </div>
              <h3 className="font-cinzel text-3xl font-black mb-2 gold-text">Kết quả</h3>
              <p className="font-inter text-cream/70 mb-8">
                Bạn trả lời đúng{' '}
                <span className="text-green-400 font-bold text-2xl">{scores.correct}</span>
                /{quizQuestions.length} câu
              </p>

              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-cinzel font-black text-green-400">{scores.correct}</div>
                  <div className="text-xs font-mono text-cream/50 mt-1">Đúng</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-4xl font-cinzel font-black text-red-400">{scores.wrong}</div>
                  <div className="text-xs font-mono text-cream/50 mt-1">Sai</div>
                </div>
              </div>

              <p className="font-inter text-cream/60 text-sm mb-8 max-w-md mx-auto">
                {scores.correct === quizQuestions.length
                  ? 'Xuất sắc! Bạn đã nắm vững lý thuyết giai cấp Marx! 🎉'
                  : 'Hãy xem lại lý thuyết và thử lại — Marx đang theo dõi bạn! 📖'}
              </p>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl font-inter font-bold transition-all hover:scale-105 border border-gold-muted text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-dark-DEFAULT"
              >
                🔄 Chơi lại
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
