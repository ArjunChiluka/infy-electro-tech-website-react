import { motion } from 'framer-motion'
import { Eye, Target, HeartHandshake } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { aboutParagraphs, mvv, company } from '../data/siteData.js'

const icons = { Vision: Eye, Mission: Target, Values: HeartHandshake }

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-ink-900">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
        <Reveal className="relative lg:sticky lg:top-28">
          <div className="rounded-4xl overflow-hidden ring-1 ring-white/10 shadow-glow">
            <img
              src="/assets/about.jpg"
              alt="CNC TruPunch 1000 machine on the factory floor"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-8 left-6 right-6 sm:left-8 sm:right-auto sm:w-80 glass rounded-3xl p-6 shadow-glow"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-volt-400">
              {company.founderRole}
            </div>
            <div className="font-display text-white text-xl font-semibold mt-1">
              {company.founderName}
            </div>
            <p className="text-steel-400 text-sm mt-2 leading-relaxed">{company.founderBio}</p>
          </motion.div>
        </Reveal>

        <div className="mt-8 lg:mt-0">
          <span className="eyebrow">Who we are</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mt-4">
            A licensed electrical contractor and CPRI-approved panel manufacturer
          </h2>
          <div className="mt-6 space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-steel-400 leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {mvv.map((card, i) => {
              const Icon = icons[card.title]
              return (
                <Reveal key={card.title} delay={i * 0.1}>
                  <div className="card-surface p-5 h-full hover:border-volt-500/30 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-volt-500/10 flex items-center justify-center text-volt-400 mb-4">
                      <Icon size={18} />
                    </div>
                    <h4 className="font-display text-white font-semibold mb-3">{card.title}</h4>
                    <ul className="space-y-2">
                      {card.items.map((it) => (
                        <li key={it} className="text-xs text-steel-500 leading-relaxed flex gap-2">
                          <span className="text-volt-400 mt-0.5">▸</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
