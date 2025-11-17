import React from 'react'
import { motion } from 'framer-motion'
import { Bolt, ShieldCheck, Waves, Gauge, Sparkles, Wrench } from 'lucide-react'

const features = [
  {
    icon: Bolt,
    title: 'Titan-PowerDrive',
    desc: 'Brushless Hochleistungsmotor mit 12.000 U/min für kompromisslose Schnittgeschwindigkeit.'
  },
  {
    icon: ShieldCheck,
    title: 'SmartSafe Guardian',
    desc: 'Intelligente Sensorik stoppt die Kette in Millisekunden bei Rückschlag oder Blockade.'
  },
  {
    icon: Waves,
    title: 'VibeZero Balance',
    desc: 'Aktive Vibrationsdämpfung für präzise Führung und ermüdungsfreies Arbeiten.'
  },
  {
    icon: Gauge,
    title: 'FeatherLite Chassis',
    desc: 'Gehäuse aus Luftfahrt-Aluminium — maximal stabil, minimal schwer.'
  },
  {
    icon: Sparkles,
    title: 'NanoEdge Kette',
    desc: 'Mikrogeschliffene Kettenglieder mit Diamantbeschichtung für butterweiche Schnitte.'
  },
  {
    icon: Wrench,
    title: 'Toolless Service',
    desc: 'Werkzeugloses Spannen & Wechseln – schneller zurück an die Arbeit.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-5xl"
        >
          Leistung trifft Kontrolle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-300"
        >
          Der Ritzelnator ist mehr als eine Kettensäge – er ist ein präzises Schneidsystem
          für anspruchsvolle Projekte in Forst, Bau und Design.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-transform group-hover:translate-x-6 group-hover:-translate-y-3" />
              <f.icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
