import { motion } from 'framer-motion'
import { PenTool, Zap, Building2, ClipboardCheck, SprayCan, LifeBuoy } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { services, industries } from '../data/siteData.js'

const icons = [PenTool, Zap, Building2, ClipboardCheck, SprayCan, LifeBuoy]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-ink-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="What We Do"
          title="From panel design to commissioned installation"
          desc="A single accountable partner across the full electrification lifecycle — design, fabrication, testing, installation and support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -6, borderColor: 'rgba(34,208,125,0.4)' }}
                  className="card-surface p-7 h-full flex flex-col"
                >
                  <div className="h-11 w-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-white text-lg font-semibold mb-2.5">{s.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2} className="mt-20">
          <div className="rounded-4xl border border-white/8 bg-gradient-to-br from-ink-800/60 to-ink-900/60 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
              <div>
                <span className="eyebrow">Industries Served</span>
                <h3 className="font-display text-2xl text-white font-semibold mt-3">
                  Trusted across large, medium and small-scale industries
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="text-sm text-steel-300 bg-ink-950/60 border border-white/10 px-4 py-2.5 rounded-full hover:text-volt-400 hover:border-volt-500/30 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
