import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Expand } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { facilityHighlights, facilityGallery } from '../data/siteData.js'

export default function Manufacturing() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <section id="facility" className="relative py-24 lg:py-32 bg-ink-900">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow">At the Heart of Our Operations</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mt-4">
              A fully in-house manufacturing facility
            </h2>
            <p className="text-steel-400 mt-5 leading-relaxed">
              Spanning 10,000 sq. ft, our facility pairs advanced fabrication equipment with
              rigorous CPRI-compliant testing — enabling us to hold products to stringent
              international standards.
            </p>
            <ul className="mt-7 space-y-3.5">
              {facilityHighlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-steel-300 leading-relaxed">
                  <ChevronRight size={16} className="text-volt-400 shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <img
              src="/assets/facility.jpg"
              alt="CNC TruPunch 1000 punching machine close-up"
              className="rounded-3xl h-64 object-cover w-full ring-1 ring-white/10 translate-y-6"
            />
            <img
              src="/assets/facility-2.jpg"
              alt="Factory floor with fabrication equipment"
              className="rounded-3xl h-64 object-cover w-full ring-1 ring-white/10"
            />
          </Reveal>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Infrastructure" title="Inside the 10,000 sq.ft facility" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {facilityGallery.map((g, i) => (
              <Reveal key={g.img} delay={(i % 4) * 0.06}>
                <button
                  onClick={() => setLightboxSrc(g.img)}
                  className="relative group w-full h-56 rounded-2xl overflow-hidden ring-1 ring-white/10 block"
                >
                  <img
                    src={g.img}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/40 transition-colors flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-10 w-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white"
                    >
                      <Expand size={16} />
                    </motion.span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </section>
  )
}
