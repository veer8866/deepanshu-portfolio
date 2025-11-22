"use client"

import { useEffect, useRef, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          Education & Goals
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-xl border border-purple-500/20 transition-all ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Education</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-purple-400 font-semibold">12th Standard</h4>
                <p className="text-gray-400 text-sm">Completed</p>
              </div>
              <div className="border-t border-purple-500/20 pt-4">
                <h4 className="text-purple-400 font-semibold">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-400 text-sm">Meerut Institute of Technology</p>
                <p className="text-gray-500 text-sm">2025 – Present</p>
              </div>
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-xl border border-pink-500/20 transition-all ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Career Goals</h3>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                My primary goal is to become a skilled Blockchain Developer, specializing in smart contract development
                and decentralized application architecture.
              </p>
              <div className="space-y-2 pt-3 border-t border-pink-500/20">
                <p className="text-pink-300 text-sm">📚 Learning Path:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>✓ Solidity Programming</li>
                  <li>✓ Web3.js Library</li>
                  <li>✓ Smart Contract Security</li>
                  <li>✓ DeFi Protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
