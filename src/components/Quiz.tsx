import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quizQuestions } from '../data/content'

type QuizState = 'idle' | 'question' | 'answered' | 'explained'

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [quizState, setQuizState] = useState<QuizState>('idle')
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [scores, setScores] = useState({ correct: 0, wrong: 0 })
  const [answeredAll, setAnsweredAll] = useState(false)

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
      setScores((s) => ({ ...s, correct: s.correct + 1 }))
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

  return (
    <section id="quiz" className="py-40 px-6 relative overflow-hidden bg-dark">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-8 bg-accent/40" />
            <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase">
              Section 05: Knowledge Assessment
            </span>
            <div className="h-[1px] w-8 bg-accent/40" />
          </motion.div>
          
          <h2 className="font-serif text-5xl md:text-6xl text-slate-100 mb-8 leading-tight">
            Kiểm Tra <span className="text-accent italic">Nhận Thức</span>
          </h2>
          
          <p className="font-sans text-slate-200 max-w-xl mx-auto text-lg leading-relaxed font-light">
            Thử thách chiều sâu kiến thức của bạn về lý luận giai cấp 
            qua bộ câu hỏi trắc nghiệm chuyên sâu.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="glass-card border-white/5 overflow-hidden">
          <AnimatePresence mode="wait">
            {quizState === 'idle' && !answeredAll && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-16 text-center"
              >
                <div className="w-24 h-24 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                  <div className="absolute inset-2 border border-accent/5 rounded-full animate-pulse" />
                  <span className="text-4xl grayscale opacity-40">📜</span>
                </div>
                <h3 className="font-serif text-3xl text-slate-100 mb-6">Sẵn sàng bắt đầu?</h3>
                <p className="text-slate-300 mb-12 max-w-sm mx-auto font-light leading-relaxed">
                  Bộ câu hỏi tổng hợp các luận điểm quan trọng nhất trong Chương III của Triết học Marx-Lenin.
                </p>
                <button onClick={handleStart} className="btn-premium px-12 py-5">
                  Bắt đầu khảo sát
                </button>
              </motion.div>
            )}

            {(quizState === 'question' || quizState === 'answered' || quizState === 'explained') && !answeredAll && (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-12"
              >
                {/* Progress */}
                <div className="flex items-center justify-between mb-16">
                   <div className="flex items-center gap-6">
                     <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em]">
                       Question {currentQ + 1} of {quizQuestions.length}
                     </span>
                     <div className="flex gap-1.5">
                        {quizQuestions.map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-[1px] transition-all duration-700 ${
                              i === currentQ ? 'w-8 bg-accent' : i < currentQ ? 'w-4 bg-accent/30' : 'w-4 bg-white/5'
                            }`} 
                          />
                        ))}
                     </div>
                   </div>
                   <div className="flex items-center gap-6 text-[9px] font-mono uppercase tracking-[0.2em]">
                     <span className="text-emerald-500/60">Correct: {scores.correct}</span>
                     <span className="text-rose-500/60">Mistakes: {scores.wrong}</span>
                   </div>
                </div>

                {/* Question */}
                <h4 className="font-serif text-3xl text-slate-100 mb-12 leading-relaxed tracking-tight">
                  {question.question}
                </h4>

                {/* Options */}
                <div className="grid grid-cols-1 gap-4 mb-16">
                  {question.options.map((opt) => {
                    const isSelected = selectedAnswer === opt.id
                    const isCorrect = opt.id === question.correct
                    const isWrong = isSelected && !isCorrect
                    
                    let statusClasses = "border-white/5 text-slate-200 hover:border-white/20 hover:bg-white/[0.02]"
                    if (quizState !== 'question') {
                      if (isCorrect) statusClasses = "border-emerald-500/30 bg-emerald-500/[0.03] text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                      else if (isWrong) statusClasses = "border-rose-500/30 bg-rose-500/[0.03] text-rose-400"
                      else statusClasses = "border-white/5 text-slate-400 opacity-40"
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleAnswer(opt.id)}
                        disabled={quizState !== 'question'}
                        className={`w-full p-6 rounded-sm border text-left font-sans text-sm transition-all duration-500 flex items-center gap-6 ${statusClasses}`}
                      >
                        <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[9px] font-mono opacity-60">
                          {opt.id.toUpperCase()}
                        </span>
                        <span className="font-light tracking-wide">{opt.text}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-10 border-t border-white/5">
                  <AnimatePresence>
                    {quizState === 'answered' && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={handleShowExplanation}
                        className="text-[9px] font-mono text-accent uppercase tracking-[0.3em] hover:opacity-100 opacity-60 transition-opacity"
                      >
                        Detailed Analysis
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {quizState !== 'question' && (
                    <button
                      onClick={handleNext}
                      className="btn-premium px-10 py-4"
                    >
                      {currentQ < quizQuestions.length - 1 ? 'Next Phase' : 'Finalize'}
                    </button>
                  )}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {quizState === 'explained' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-10 p-8 bg-accent/[0.02] border-l border-accent/40 rounded-sm"
                    >
                      <p className="text-xs font-sans text-slate-200 leading-relaxed italic font-light">
                        <span className="text-accent font-mono font-bold not-italic uppercase text-[9px] tracking-[0.3em] mr-4">Context:</span>
                        {question.explanation.long}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {answeredAll && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-20 text-center"
              >
                <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                   <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-20" />
                   <span className="text-4xl grayscale opacity-40">🎓</span>
                </div>
                <h3 className="font-serif text-4xl text-slate-100 mb-6">Assessment Complete</h3>
                <div className="flex justify-center gap-16 mb-16">
                   <div>
                     <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-2">Accuracy</p>
                     <p className="text-5xl font-serif text-emerald-500 tracking-tighter">
                       {Math.round((scores.correct / quizQuestions.length) * 100)}%
                     </p>
                   </div>
                   <div>
                     <p className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-2">Correct</p>
                     <p className="text-5xl font-serif text-slate-100 tracking-tighter">{scores.correct}</p>
                   </div>
                </div>
                <button onClick={handleReset} className="btn-outline-premium px-12 py-5">
                  Restart Evaluation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
