import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ScrollStage from './components/ScrollStage'
import ParallaxShowcase from './components/ParallaxShowcase'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <ScrollStage />
      <ParallaxShowcase />
      <Showcase />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-zinc-400">
        © {new Date().getFullYear()} Ritzelnator. Entwickelt für Präzision.
      </footer>
    </div>
  )
}

export default App
