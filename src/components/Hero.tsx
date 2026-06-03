import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { siteMetadata } from '../data/content'

function useTypewriter(text: string, speed = 50, startDelay = 500) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          setDone(true)
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

export default function Hero() {
  const navigate = useNavigate()
  const { displayed: quoteText, done: quoteDone } = useTypewriter(
    siteMetadata.mainQuote,
    20,
    300
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Background Hero Image — Karl Marx */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={siteMetadata.heroImage}
          alt="Karl Marx"
          className="w-full h-full object-cover filter grayscale brightness-50"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark/60 via-dark/70 to-dark pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Subtle Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-16"
        >
          <div className="h-[1px] w-8 bg-accent/70" />
          <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase">
            {siteMetadata.course}
          </span>
          <div className="h-[1px] w-8 bg-accent/70" />
        </motion.div>

        {/* Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.95] text-slate-100 tracking-tighter">
            {siteMetadata.title.split(' ').map((word, i) => {
              const lowerWord = word.toLowerCase();
              const isAccent = lowerWord === 'bị' || lowerWord === 'lãng' || lowerWord === 'dân' || lowerWord === 'tộc';
              return (
                <span key={i}>
                  {lowerWord === 'dân' && <br />}
                  <span className={isAccent ? 'italic text-accent' : ''}>
                    {word}{' '}
                  </span>
                </span>
              );
            })}
          </h1>
        </motion.div>

        {/* Premium Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="relative max-w-3xl mx-auto mb-16 py-12 px-8 border-y border-white/15"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-dark text-xs font-mono text-slate-100 uppercase tracking-widest">
            Luận đề
          </div>
          
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-slate-100 leading-[1.3] mb-8">
            "{quoteText}"
            {!quoteDone && <span className="typewriter-cursor" />}
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <p className="font-mono text-xs text-accent uppercase tracking-[0.3em]">
              {siteMetadata.quoteAuthor}
            </p>
            <div className="h-8 w-[1px] bg-gradient-to-b from-accent/70 to-transparent" />
          </div>
        </motion.div>

        {/* Refined Subtext - Upgraded UI/UX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="relative max-w-4xl mx-auto my-16 px-6 md:px-12 py-10 border-l-2 border-accent/30 bg-slate-900/10 backdrop-blur-sm text-left mb-20"
        >
          {/* Ký tự mở đầu trang trọng (Drop Cap) dạng mờ chạy ngầm */}
          <span className="absolute -top-6 -left-4 font-serif text-9xl text-accent/5 select-none pointer-events-none font-bold">
            “
          </span>

          {/* Khối 1: Lời dẫn nhập (Style tự sự, cỡ chữ lớn, thanh lịch) */}
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-slate-100 font-light leading-relaxed mb-8 italic tracking-wide">
            Khi lật mở những trang sử ký, chúng ta thường bị choáng ngợp bởi hào quang của các triều đại, 
            danh tiếng của các vị vua hay sức mạnh của các cuộc viễn chinh. Nhưng đằng sau những biến động 
            vĩ đại đó, có một động lực ngầm liên tục dịch chuyển bánh xe lịch sử...
          </p>

          {/* Khối 2: Tuyên ngôn cốt lõi (Sắc bén, uy quyền, tương phản mạnh) */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-start gap-4">
            {/* Nhãn nhãn thông số công nghệ nhỏ để giữ chất Sci-fi */}
            <span className="font-mono text-xs text-accent tracking-[0.3em] uppercase pt-1 shrink-0">
              [ LUẬN ĐỀ CỐT LÕI ]
            </span>
            
            <div className="space-y-4">
              <h4 className="font-sans text-2xl md:text-3xl font-medium text-white leading-snug">
                Karl Marx gọi đó là{' '}
                <span className="text-gradient-gold font-serif font-bold italic inline-block drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  Đấu tranh giai cấp.
                </span>
              </h4>
              
              <p className="font-sans text-base md:text-lg text-slate-100 leading-loose font-light tracking-wide">
                Đây không phải là một lý thuyết quá khứ — nó là{' '}
                <span className="text-white font-medium border-b border-accent/40 pb-0.5">
                  lăng kính giải mã
                </span>{' '}
                toàn bộ thế giới chúng ta đang sống ngày hôm nay.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Premium Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col items-center gap-16"
        >
          <div className="flex flex-wrap justify-center gap-6 z-20">
            {/* NÚT 1: KHÁM PHÁ HỆ TƯ TƯỞNG */}
            <button
              onClick={() => navigate('/theory')}
              /* Nền kính mờ (bg-white/5 + backdrop-blur) nguyên bản. Khi hover viền sẽ sáng lên và tỏa bóng mờ */
              className="relative px-12 py-5 group overflow-hidden rounded-sm bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center min-w-[300px]"
            >
              {/* 1. HIỆU ỨNG TIA SÁNG LƯỚT CHÉO: Quét qua bề mặt nút như ống kính máy quay */}
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none"></div>

              {/* 2. DẤU NGOẶC TRÁI (Tech Bracket): Trượt từ ngoài vào */}
              <span className="absolute left-6 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 font-mono text-white/40 text-xl pointer-events-none">
                [
              </span>

              {/* 3. VĂN BẢN (Text): Giãn cách chữ (tracking) rộng ra khi hover tạo cảm giác hít thở */}
              <span className="relative z-10 font-sans text-slate-300 tracking-wider group-hover:text-white group-hover:tracking-[0.2em] transition-all duration-700 uppercase text-sm font-medium">
                Khám phá hệ tư tưởng
              </span>

              {/* 4. DẤU NGOẶC PHẢI (Tech Bracket): Trượt từ ngoài vào */}
              <span className="absolute right-6 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 font-mono text-white/40 text-xl pointer-events-none">
                ]
              </span>
            </button>

            {/* NÚT 2: LỊCH SỬ ĐẤU TRANH */}
            <button
              onClick={() => navigate('/timeline')}
              className="relative px-12 py-5 group overflow-hidden rounded-sm bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-700 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center min-w-[300px]"
            >
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out pointer-events-none"></div>

              <span className="absolute left-6 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 font-mono text-white/40 text-xl pointer-events-none">
                [
              </span>

              <span className="relative z-10 font-sans text-slate-300 tracking-wider group-hover:text-white group-hover:tracking-[0.2em] transition-all duration-700 uppercase text-sm font-medium">
                Lịch sử đấu tranh
              </span>

              <span className="absolute right-6 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 font-mono text-white/40 text-xl pointer-events-none">
                ]
              </span>
            </button>
          </div>

          {/* Minimalist Scroll */}
          <div className="flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
            <span className="text-xs font-mono tracking-[0.5em] uppercase text-accent">Cuộn</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
