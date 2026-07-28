import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Workflow, Wrench, Users, Award } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { whyChooseUs } from '../data/siteData.js'

const icons = [ShieldCheck, Cpu, Workflow, Wrench, Users, Award]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="section-container relative">
        <SectionHeading
          align="center"
          eyebrow="Why Industries Choose Us"
          title="Built on engineering discipline, not shortcuts"
          desc="Every panel is designed, fabricated and tested in-house — giving you one accountable partner for quality, timelines and after-sales support."
          className="mx-auto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card-surface p-7 h-full group hover:border-volt-500/40 hover:bg-ink-800/80 transition-colors"
                >
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-volt-500/20 to-amber-500/10 flex items-center justify-center text-volt-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-white text-lg font-semibold mb-2.5">{item.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
