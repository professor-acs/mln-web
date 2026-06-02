import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoreTheory from './components/CoreTheory'
import Timeline from './components/Timeline'
import Reality21 from './components/Reality21'
import Quiz from './components/Quiz'
import AiAppendix from './components/AiAppendix'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a1a' }}>
      {/* Scroll indicator/reset on route change */}
      <ScrollToTop />

      {/* Background star field */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="pb-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/theory" element={<CoreTheory />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/reality" element={<Reality21 />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>

      {/* Pinned footer + Modal */}
      <AiAppendix />
    </div>
  )
}
