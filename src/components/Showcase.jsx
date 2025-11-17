import React from 'react'
import { motion } from 'framer-motion'

const specs = [
  { label: 'Gewicht', value: '2,9 kg' },
  { label: 'Leistung', value: '2,4 kW' },
  { label: 'Kettengeschwindigkeit', value: '28 m/s' },
  { label: 'Lautstärke', value: '82 dB(A)' },
  { label: 'Akkulaufzeit', value: 'bis zu 180 min' },
]

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-950 py-24 text-white">
      <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="animate-pulse-slow absolute -left-36 top-10 h-72 w-72 rotate-45 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="animate-pulse-slower absolute -right-24 bottom-10 h-80 w-80 -rotate-12 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-5xl">Design, das schneidet</h2>
            <p className="mt-4 text-zinc-300">
              Das monolithische Gehäuse mit gebürsteter Metalloberfläche liegt sicher in der Hand.
              Durchdachte Ergonomie, perfekt ausbalanciert – für maximale Kontrolle in jeder Situation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm text-zinc-400">{s.label}</div>
                  <div className="text-lg font-semibold">{s.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-3 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-full w-full rounded-2xl bg-[conic-gradient(at_70%_30%,_#0ea5e9_0%,_#10b981_30%,_#1f2937_60%,_#0ea5e9_100%)]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5 mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
