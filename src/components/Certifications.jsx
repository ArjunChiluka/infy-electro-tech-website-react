import { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { certifications } from '../data/siteData.js'

export default function Certifications() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-ink-950">
      <div className="section-container">
        <SectionHeading
          align="center"
          eyebrow="Tested & Certified"
          title="CPRI-verified to IS/IEC 61439"
          desc="Every panel design is backed by third-party testing from the Central Power Research Institute (CPRI)."
          className="mx-auto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.button
                onClick={() => setLightboxSrc(c.img)}
                whileHover={{ y: -6 }}
                className="card-surface overflow-hidden w-full text-left group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-ink-950/50 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity h-9 w-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white">
                      <Expand size={15} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-volt-400">{c.num}</div>
                  <h5 className="font-display text-white font-medium mt-1.5 text-sm">{c.title}</h5>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-steel-500 text-sm mt-10">
          Click any certificate to view a larger scan. Full test reports available on request.
        </p>
      </div>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </section>
  )
}
