"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotationX = (mouseY - centerY) / 10
    const rotationY = (centerX - mouseX) / 10

    setRotation({ x: rotationX, y: rotationY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} transition-transform duration-200 ease-out`}
      style={{
        transformStyle: "preserve-3d",
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
    >
      {children}
    </div>
  )
}
