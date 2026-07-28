import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { products, moreProducts } from '../data/siteData.js'

export default function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-ink-900">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Products Range"
            title="Panels built to IEC-61439, engineered to order"
            desc="Standard bolt-fitted frames (no welding) for easy maintenance, with adjustable and individually fed busbar arrangements as standard."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="card-surface overflow-hidden h-full group"
              >
                <div className="relative h-52 overflow-hidden">
                  {p.tag && (
                    <span className="absolute top-4 left-4 z-10 text-[11px] font-mono uppercase tracking-wider bg-ink-950/80 backdrop-blur text-volt-400 px-3 py-1.5 rounded-full border border-volt-500/30">
                      {p.tag}
                    </span>
                  )}
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-white text-lg font-semibold mb-2">{p.title}</h4>
                  <p className="text-steel-500 text-sm leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.badges.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1 text-[11px] text-steel-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                      >
                        <Check size={11} className="text-volt-400" /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center gap-3 justify-center">
          {moreProducts.map((c) => (
            <span
              key={c}
              className="text-sm text-steel-300 bg-ink-800/60 border border-white/8 px-4 py-2 rounded-full hover:border-volt-500/40 hover:text-white transition-colors"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
