import { useState } from 'react'
import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoreTheory from './components/CoreTheory'
import Timeline from './components/Timeline'
import Reality21 from './components/Reality21'
import Quiz from './components/Quiz'
import AiAppendix from './components/AiAppendix'

type SectionType = '3.2.1' | '3.2.2' | '3.2.3'

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('3.2.1')

  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a1a' }}>
      {/* Background star field */}
      <StarField />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main content */}
      <main className="pb-16">
        <Hero />

        {/* Section separator - slightly more visible on lighter bg */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <CoreTheory activeSection={activeSection} />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        <Timeline />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
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
