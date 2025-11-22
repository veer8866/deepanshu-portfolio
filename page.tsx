"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Interests from "@/components/interests"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Background3D from "@/components/background-3d"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Background3D scrollY={scrollY} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Interests />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
