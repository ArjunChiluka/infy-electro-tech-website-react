import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Download, ChevronDown, ShieldCheck } from 'lucide-react'
import { company, heroStats } from '../data/siteData.js'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="hero" className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-0 bg-noise" />

      {/* floating shapes */}
      <motion.div
        aria-hidden
        className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-volt-500/20 blur-[90px] animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px] animate-float-slower"
      />

      <div className="section-container relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-volt-400 animate-pulse" />
              {company.addressShort} · Est. {company.founded} · CPRI Approved
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-semibold text-white leading-[1.05] mt-6">
              Precision-Built Power Panels,{' '}
              <span className="text-gradient italic">Engineered to Outlast the Grid.</span>
            </h1>

            <p className="mt-7 text-steel-400 text-lg leading-relaxed max-w-xl">
              {company.name} manufactures CPRI-tested PCC, MCC and APFC panels rated up to 6300A,
              and executes H.T. &amp; L.T. electrical installations up to 33kV on a turnkey basis —
              the panel partner industries across Andhra Pradesh have trusted for over a decade.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {['CPRI Tested & Certified', 'In-House CNC Manufacturing', 'Turnkey Execution, Start to Finish'].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-steel-300">
                    <ShieldCheck size={16} className="text-volt-400 shrink-0" />
                    {t}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="contact" smooth duration={500} offset={-80} className="btn-primary cursor-pointer">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link to="contact" smooth duration={500} offset={-80} className="btn-ghost cursor-pointer">
                <Download size={16} /> Download Brochure
              </Link>
              <Link
                to="products"
                smooth
                duration={500}
                offset={-90}
                className="text-sm font-semibold text-steel-300 hover:text-volt-400 transition cursor-pointer inline-flex items-center gap-1.5"
              >
                View Product Range <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-glow ring-1 ring-white/10">
              <img
                src="/assets/hero-banner.jpg"
                alt="Infy Electro Tech power distribution and manufacturing facility"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 flex items-center gap-3 shadow-glow"
            >
              <div className="h-11 w-11 rounded-xl bg-volt-500/20 flex items-center justify-center text-xl">⚡</div>
              <div>
                <div className="text-white font-semibold text-sm">CPRI Approved</div>
                <div className="text-steel-500 text-xs">Tested &amp; Certified</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <Link
          to="about"
          smooth
          duration={500}
          className="hidden sm:flex flex-col items-center gap-2 mx-auto mt-24 w-fit text-steel-500 cursor-pointer group"
        >
          <span className="text-xs font-mono uppercase tracking-widest group-hover:text-volt-400 transition">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-9 w-6 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-volt-400" />
          </motion.span>
        </Link>
      </div>

      {/* stat plate */}
      <div ref={ref} className="relative border-t border-white/8 bg-ink-900/60 backdrop-blur">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="py-8 px-4 sm:px-8 text-center md:text-left"
            >
              <div className="font-display text-3xl sm:text-4xl font-semibold text-white">
                {inView && <CountUp end={s.value} duration={1.6} separator="," />}
                {s.suffix}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-steel-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
