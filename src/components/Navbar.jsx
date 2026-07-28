import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X, ArrowRight, Zap } from 'lucide-react'
import { company, navLinks } from '../data/siteData.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-volt-400 to-amber-400 z-10" style={{ width: `${progress}%` }} />
      <div
        className={`section-container flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass shadow-glow py-2.5 px-5' : 'py-1 px-5'
        }`}
      >
        <Link to="hero" smooth duration={500} className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/assets/logo.jpg"
            alt="Infy Electro Tech logo"
            className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/15 group-hover:ring-volt-400/60 transition"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-white text-lg font-semibold tracking-tight">{company.name}</div>
            <div className="text-[11px] text-steel-500 font-mono uppercase tracking-wider">{company.tagline}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              spy
              smooth
              duration={500}
              offset={-90}
              onSetActive={() => setActive(l.to)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                active === l.to ? 'text-ink-950 bg-volt-400' : 'text-steel-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="contact" smooth duration={500} offset={-80} className="hidden md:inline-flex btn-primary cursor-pointer">
            Get a Quote <ArrowRight size={15} />
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-11 w-11 rounded-xl glass flex items-center justify-center text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden section-container mt-3 overflow-hidden"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={500}
                  offset={-90}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-steel-200 hover:text-white hover:bg-white/5 cursor-pointer flex items-center justify-between"
                >
                  {l.label} <Zap size={14} className="text-volt-400" />
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 cursor-pointer"
              >
                Get a Quote <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
