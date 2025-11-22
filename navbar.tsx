"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/50 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DB
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-blue-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-blue-400 transition">
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-blue-400 transition">
              Contact
            </button>
          </div>

          <button className="md:hidden text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-blue-500/20 p-4 space-y-2">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-gray-300 hover:text-blue-400 py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left text-gray-300 hover:text-blue-400 py-2"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left text-gray-300 hover:text-blue-400 py-2"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-gray-300 hover:text-blue-400 py-2"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}
