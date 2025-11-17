import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function ScrollStage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const zMove = useTransform(scrollYProgress, [0, 1], [0, -200])
  const yRise = useTransform(scrollYProgress, [0, 1], [40, -40])
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.7])
  const smoothGlow = useSpring(glow, { stiffness: 80, damping: 20, mass: 0.4 })

  return (
    <section ref={ref} className="relative min-h-[140vh] w-full overflow-hidden bg-black py-28 text-white">
      {/* Background grid and fog */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]; [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-5xl"
        >
          Tiefe. Glas. Bewegung.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-center text-zinc-300"
        >
          Scroll-gebundene 3D-Ebene mit fluidem Glass-Effekt, die den Ritzelnator in einer atmosphärischen Bühne präsentiert.
        </motion.p>

        {/* 3D Stage */}
        <div className="relative mt-10 aspect-[16/9] w-full overflow-visible rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-4 backdrop-blur-xl" style={{ perspective: 1200 }}>
          {/* floating shards */}
          <motion.div
            style={{ rotate: rotate, opacity: smoothGlow }}
            className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md will-change-transform"
          />
          <motion.div
            style={{ rotate: rotate, y: yRise }}
            className="pointer-events-none absolute -right-6 bottom-10 h-36 w-36 rounded-full bg-white/5 blur-2xl will-change-transform"
          />

          {/* Core 3D object group */}
          <motion.div
            style={{ transformStyle: 'preserve-3d', y: yRise }}
            className="relative h-full w-full rounded-2xl"
          >
            {/* Outer glass ring */}
            <motion.div
              style={{ transform: 'translateZ(60px)', rotate: rotate, opacity: smoothGlow }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_120px_rgba(16,185,129,0.25)]"
            />

            {/* Inner core */}
            <motion.div
              style={{ transform: 'translateZ(140px) rotateX(10deg)', boxShadow: '0 0 80px rgba(59,130,246,0.25)' }}
              animate={{ rotateY: [0, 12, 0, -12, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%),linear-gradient(135deg,rgba(20,184,166,0.25),rgba(99,102,241,0.2))] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.18),transparent_40%,rgba(255,255,255,0.18))] mix-blend-overlay" />
            </motion.div>

            {/* Blade ring */}
            <motion.div
              style={{ transform: 'translateZ(100px)', rotate: rotate }}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30"
            >
              <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_0deg,#10b981_0_6deg,transparent_6deg_12deg)] opacity-30" />
              <div className="absolute inset-10 rounded-full border border-white/10" />
            </motion.div>

            {/* Depth plate */}
            <motion.div
              style={{ transform: 'translateZ(-140px)', opacity: 0.9 }}
              className="absolute inset-6 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
