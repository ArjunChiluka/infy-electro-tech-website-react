import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { company } from '../data/siteData.js'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.06 }}
        href={`tel:${company.phonesRaw[0]}`}
        aria-label="Call Infy Electro Tech"
        className="group flex items-center gap-0 hover:gap-2.5 h-14 rounded-full bg-ink-800 border border-white/10 text-white shadow-glow overflow-hidden pl-4 pr-4 hover:pr-5"
      >
        <Phone size={20} className="text-volt-400 shrink-0" />
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300">
          Call Now
        </span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        whileHover={{ scale: 1.06 }}
        href={company.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Infy Electro Tech on WhatsApp"
        className="group flex items-center gap-0 hover:gap-2.5 h-14 rounded-full bg-volt-500 text-ink-950 shadow-glow-volt overflow-hidden pl-4 pr-4 hover:pr-5"
      >
        <MessageCircle size={20} className="shrink-0" fill="currentColor" />
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  )
}
