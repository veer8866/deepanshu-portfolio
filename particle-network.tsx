"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  pulsePhase: number
}

interface Connection {
  from: Particle
  to: Particle
  distance: number
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1)
    canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)

    const particles: Particle[] = []
    const particleCount = 80
    const connectionDistance = 150
    const animationSpeed = 0.005

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        radius: Math.random() * 2.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let animationFrameId: number
    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.15)"
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const connections: Connection[] = []

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulsePhase += animationSpeed

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth
        if (particle.x > canvas.offsetWidth) particle.x = 0
        if (particle.y < 0) particle.y = canvas.offsetHeight
        if (particle.y > canvas.offsetHeight) particle.y = 0

        const pulseValue = Math.sin(particle.pulsePhase) * 0.3 + 0.7
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2,
        )
        gradient.addColorStop(0, `rgba(96, 165, 250, ${particle.opacity * pulseValue * 0.8})`)
        gradient.addColorStop(1, `rgba(96, 165, 250, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.fillStyle = `rgba(147, 197, 253, ${particle.opacity * pulseValue})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            connections.push({
              from: particles[i],
              to: particles[j],
              distance: distance,
            })
          }
        }
      }

      connections.forEach((connection) => {
        const opacity = (1 - connection.distance / connectionDistance) * 0.4
        const gradient = ctx.createLinearGradient(
          connection.from.x,
          connection.from.y,
          connection.to.x,
          connection.to.y,
        )

        gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.8})`)
        gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(connection.from.x, connection.from.y)
        ctx.lineTo(connection.to.x, connection.to.y)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
}
