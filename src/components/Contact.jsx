import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, BadgeCheck, Send, CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { company, quoteOptions } from '../data/siteData.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const infoCards = [
    { icon: MapPin, label: 'Works & Office', value: company.addressFull },
    {
      icon: Phone,
      label: 'Call',
      value: company.phones.join('  ·  '),
      href: `tel:${company.phonesRaw[0]}`,
    },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: BadgeCheck, label: 'Licensed as', value: company.license },
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ink-950">
      <div className="section-container grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mt-4">
            Request a quote or site visit
          </h2>
          <p className="text-steel-400 mt-4 leading-relaxed">
            Reach us directly — our team typically responds within one business day.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-9">
            {infoCards.map((c) => (
              <div key={c.label} className="card-surface p-5">
                <div className="h-10 w-10 rounded-xl bg-volt-500/10 flex items-center justify-center text-volt-400 mb-3">
                  <c.icon size={18} />
                </div>
                <div className="text-white text-sm font-semibold mb-1">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="text-steel-400 text-xs leading-relaxed hover:text-volt-400 transition">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-steel-400 text-xs leading-relaxed">{c.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden ring-1 ring-white/10 h-64">
            <iframe
              src={company.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infy Electro Tech location map"
              className="w-full h-full grayscale-[40%] contrast-125"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="card-surface p-7 sm:p-9 relative overflow-hidden">
            <h3 className="font-display text-white text-2xl font-semibold">Send an enquiry</h3>
            <p className="text-steel-500 text-sm mt-2 mb-7">
              Tell us about your panel or installation requirement — we'll get back within one business day.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" placeholder="Your name" required />
              <Field label="Company" placeholder="Company name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Field label="Phone" placeholder="+91" type="tel" required />
              <Field label="Email" placeholder="you@company.com" type="email" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-steel-400 mb-2">Panel / Service Required</label>
              <select className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-volt-500/60 transition">
                {quoteOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-steel-400 mb-2">Requirement Details</label>
              <textarea
                rows={3}
                placeholder="Panel rating, quantity, site location, timeline..."
                className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-volt-500/60 transition resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-7">
              {submitted ? (
                <>
                  <CheckCircle2 size={16} /> Enquiry Sent
                </>
              ) : (
                <>
                  Submit Enquiry <Send size={15} />
                </>
              )}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-volt-400 text-xs text-center mt-3"
              >
                Thanks — your enquiry has been noted. Our team will contact you within one business day.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-medium text-steel-400 mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-steel-600 focus:outline-none focus:border-volt-500/60 transition"
      />
    </div>
  )
}
