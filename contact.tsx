"use client"

import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            I'd love to hear from you. Whether it's a question about blockchain, a project collaboration, or just a
            friendly chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition">
                <Mail size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-gray-100 font-semibold mb-1">Email</h3>
                <p className="text-gray-400 text-sm">deepanshu@example.com</p>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center group-hover:scale-110 transition">
                <Github size={24} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-gray-100 font-semibold mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm">github.com/deepanshu</p>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-gray-100 font-semibold mb-6">Follow Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition"
            >
              <Github className="text-blue-400" size={24} />
            </a>
            <a
              href="#"
              className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition"
            >
              <Linkedin className="text-purple-400" size={24} />
            </a>
            <a
              href="#"
              className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-xl border border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-500/10 transition"
            >
              <Instagram className="text-pink-400" size={24} />
            </a>
          </div>
        </div>

        <div className="text-center py-8 border-t border-blue-500/20">
          <p className="text-gray-500 text-sm">
            Designed and developed by Deepanshu Baliyan © 2025. Built with React, Next.js, and passion for Web3.
          </p>
        </div>
      </div>
    </section>
  )
}
