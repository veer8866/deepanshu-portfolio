"use client"

import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my skills and projects with 3D animations and smooth interactions.",
    tags: ["Next.js", "React", "Tailwind CSS", "3D Effects"],
    links: { github: "#", live: "#" },
  },
  {
    title: "Crypto Price Tracker",
    description:
      "Real-time cryptocurrency price tracking application with live market data, charts, and portfolio management features.",
    tags: ["React", "API Integration", "Charts", "Crypto"],
    links: { github: "#", live: "#" },
  },
  {
    title: "Blockchain Basics Info Page",
    description:
      "Educational resource about blockchain fundamentals, covering concepts like blocks, transactions, and consensus mechanisms.",
    tags: ["HTML/CSS", "JavaScript", "Educational", "Web3"],
    links: { github: "#", live: "#" },
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative h-full bg-slate-800/50 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 hover:border-cyan-500/50 transition duration-300 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-blue-500/20">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
