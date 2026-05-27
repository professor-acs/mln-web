import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars: Star[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }))

    container.innerHTML = stars
      .map(
        (s) =>
          `<div class="star" style="
            left:${s.x}%;
            top:${s.y}%;
            width:${s.size}px;
            height:${s.size}px;
            --duration:${s.duration}s;
            --delay:${s.delay}s;
          "></div>`
      )
      .join('')
  }, [])

  return <div ref={containerRef} className="star-field" />
}
