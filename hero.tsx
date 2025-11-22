"use client"

import { ArrowRight, Github, Linkedin } from "lucide-react"
import ParticleNetwork from "./particle-network"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleNetwork />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm animate-glow-in">
              <span className="text-sm text-blue-300">Welcome to my portfolio</span>
            </div>
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Deepanshu Baliyan
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-2 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          Blockchain Enthusiast | BCA Student
        </p>

        <p className="text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.8s" }}>
          Learning blockchain fundamentals and building beginner-level projects. Passionate about Web3, Smart Contracts,
          and decentralized applications.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in"
          style={{ animationDelay: "1s" }}
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1"
          >
            View Projects <ArrowRight className="inline ml-2" size={20} />
          </button>
          <button className="px-8 py-3 rounded-lg border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/10 transition">
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <a
            href="#"
            className="p-3 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition hover:scale-110 transform"
          >
            <Github size={24} className="text-blue-400" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition hover:scale-110 transform"
          >
            <Linkedin size={24} className="text-purple-400" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg border border-pink-500/30 bg-pink-500/10 hover:bg-pink-500/20 transition hover:scale-110 transform"
          >
            <span className="text-pink-400 font-bold">f</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-blue-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
