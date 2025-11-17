import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Neu: Ritzelnator X — Präzision trifft rohe Kraft
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Ritzelnator
            <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent"> Pro</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-200/90 sm:text-xl">
            Die nächste Generation der Hochleistungs-Kettensäge. Ultraleicht, vibrationsarm
            und gnadenlos präzise – entwickelt für Profis, geliebt von Enthusiasten.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('features')}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg shadow-white/10 transition-colors hover:bg-zinc-100"
            >
              Jetzt entdecken
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToId('cta')}
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Vorbestellen
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}
