import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 text-center shadow-2xl">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Sichere dir den Ritzelnator Pro – limitiert zur Einführung
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mt-3 max-w-2xl text-zinc-300"
          >
            Inklusive NanoEdge Kette, Schnellladegerät und 5 Jahren Garantie. Versand weltweit.
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-black shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-400"
            >
              Vorbestellen ab 899€
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Details ansehen
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
