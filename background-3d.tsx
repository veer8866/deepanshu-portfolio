"use client"

import { useEffect, useRef } from "react"

export default function Background3D({ scrollY }: { scrollY: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll("[data-parallax]")
    elements.forEach((el: Element) => {
      const element = el as HTMLElement
      const speed = Number.parseFloat(element.dataset.parallax || "0.5")
      element.style.transform = `translateY(${scrollY * speed}px)`
    })
  }, [scrollY])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none">
      <div
        data-parallax="0.1"
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-20"
      />
      <div
        data-parallax="0.15"
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl opacity-15"
      />
      <div
        data-parallax="0.08"
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl opacity-10"
      />
      <div
        data-parallax="0.12"
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl opacity-15"
      />
    </div>
  )
}
