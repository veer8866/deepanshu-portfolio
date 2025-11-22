"use client"

import { useState } from "react"
import TiltCard from "./tilt-card"
import ParallaxSection from "./parallax-section"

const skillsData = [
  { name: "HTML", icon: "🏗️", category: "Frontend" },
  { name: "CSS", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "Python Basics", icon: "🐍", category: "Backend" },
  { name: "C Basics", icon: "📝", category: "Backend" },
  { name: "Blockchain Fundamentals", icon: "⛓️", category: "Web3" },
  { name: "Web3 Concepts", icon: "🌐", category: "Web3" },
  { name: "Git", icon: "📦", category: "Tools" },
]

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <ParallaxSection speed={0.3}>
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <TiltCard key={index} className="tilt-card">
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="relative bg-slate-800/50 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 hover:border-purple-500/50 transition duration-300 transform group-hover:scale-105">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">{skill.name}</h3>
                    <p className="text-xs text-blue-400">{skill.category}</p>

                    {hoveredIndex === index && (
                      <div className="mt-4 pt-4 border-t border-blue-500/20">
                        <p className="text-xs text-gray-400">
                          {skill.category === "Web3" ? "Actively learning" : "Learning and improving"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </ParallaxSection>
  )
}
