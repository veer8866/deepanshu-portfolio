"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" className="relative py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? "animate-slide-up" : "opacity-0"}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a BCA student at Meerut Institute of Technology, passionate about blockchain technology and Web3
              development. Currently exploring the fundamentals of blockchain, smart contracts, and decentralized
              applications.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              My journey into tech started with a curiosity about how the internet works, which evolved into a deep
              interest in blockchain and cryptocurrency. I'm committed to learning Solidity, Web3.js, and building
              practical blockchain solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I'm interested in cybersecurity, decentralized finance (DeFi), and the potential of
              blockchain technology to reshape industries. I love collaborating with like-minded developers and
              contributing to open-source projects.
            </p>
          </div>

          <div className={`relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-2">Current Focus</h3>
                  <p className="text-gray-400">Blockchain Fundamentals & Web3 Development</p>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">Education</h3>
                  <p className="text-gray-400">BCA at Meerut Institute of Technology (2025–Present)</p>
                </div>
                <div>
                  <h3 className="text-pink-400 font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Meerut, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
