import { useState, useEffect } from 'react'

const CORES = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#22c55e', '#06b6d4']
const QTD = 100

export function Confetti({ active = false, onComplete }) {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    if (!active) return
    const list = []
    const centerX = 50
    const centerY = 40
    for (let i = 0; i < QTD; i++) {
      const angle = (Math.PI * 2 * i) / QTD + Math.random() * 0.8
      const spread = 40 + Math.random() * 50
      const endX = Math.cos(angle) * spread * (Math.random() > 0.5 ? 1 : -1)
      const endY = 30 + Math.random() * 40 + Math.abs(Math.sin(angle)) * 20
      const delay = Math.random() * 0.15
      list.push({
        id: i,
        delay,
        duration: 2.2 + Math.random() * 1.2,
        startX: centerX,
        startY: centerY,
        endX,
        endY,
        rotation: Math.random() * 720 - 360,
        color: CORES[Math.floor(Math.random() * CORES.length)],
        size: 6 + Math.random() * 10,
      })
    }
    setPieces(list)
    const t = setTimeout(() => onComplete?.(), 4200)
    return () => clearTimeout(t)
  }, [active, onComplete])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      <style>{`
        @keyframes confetti-burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(var(--ex), var(--ey)) scale(0.5) rotate(var(--rot));
          }
        }
      `}</style>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute pointer-events-none"
          style={{
            left: `${p.startX}%`,
            top: `${p.startY}%`,
            width: p.size,
            height: p.size * 1.5,
            background: p.color,
            borderRadius: p.size < 10 ? 2 : 3,
            '--ex': `${p.endX}vw`,
            '--ey': `${p.endY}vh`,
            '--rot': `${p.rotation}deg`,
            animation: `confetti-burst ${p.duration}s ease-out ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  )
}
