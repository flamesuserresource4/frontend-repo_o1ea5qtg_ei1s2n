import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-black py-28 text-white">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-0 h-[120%] w-[120%] rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute -right-10 bottom-0 h-[120%] w-[120%] -rotate-12 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-5xl"
          >
            Parallax in Perfektion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-zinc-300"
          >
            Mehrschichtige Tiefe mit Scroll-gekoppelten Bewegungen – geschaffen, um den Blick zu führen und das Produkt zu inszenieren.
          </motion.p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            style={{ y: fgY }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800">
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-full bg-[conic-gradient(at_30%_70%,#10b981_0%,#3b82f6_30%,#1f2937_60%,#10b981_100%)]"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Fluid Glass Card</h3>
            <p className="mt-2 text-zinc-300">Transparente Layer, weiche Kanten, dynamisches Highlight – inspiriert von industriellem Design.</p>
          </motion.div>

          <motion.div
            style={{ y: fgY }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800">
              <motion.div
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-full bg-[conic-gradient(at_70%_30%,#3b82f6_0%,#10b981_30%,#1f2937_60%,#3b82f6_100%)]"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Depth Matrix</h3>
            <p className="mt-2 text-zinc-300">Kontrastreiche Formen mit subtilen Rotationen erzeugen eine magnetische Tiefe.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
