import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoreTheory from './components/CoreTheory'
import Timeline from './components/Timeline'
import Reality21 from './components/Reality21'
import Quiz from './components/Quiz'
import AiAppendix from './components/AiAppendix'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a1a' }}>
      {/* Background star field */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="pb-16">
        <Hero />

        {/* Section separator */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
        </div>

        <CoreTheory />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.3), transparent)' }} />
        </div>

        <Timeline />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }} />
        </div>

        <Reality21 />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />
        </div>

        <Quiz />
      </main>

      {/* Pinned footer + Modal */}
      <AiAppendix />
    </div>
  )
}
