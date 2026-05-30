export default function StarField() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-dark">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.05] bg-grain mix-blend-overlay" />

      {/* Luxury Gradient Orbs - Increased opacity and spread */}
      <div className="absolute top-[-15%] left-[-5%] w-[80%] h-[80%] rounded-full bg-accent/10 blur-[120px] animate-pulse" 
        style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[-15%] right-[-5%] w-[70%] h-[70%] rounded-full bg-philosophy-burgundy/15 blur-[100px] animate-pulse"
        style={{ animationDuration: '15s' }} />
      
      {/* Central light to reduce "dark void" feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent/[0.04] blur-[140px]" />

      {/* Grid Pattern - slightly more visible for structure */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, 
          backgroundSize: '80px 80px' 
        }}
      />
    </div>
  )
}
