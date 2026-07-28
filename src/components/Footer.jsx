import { Link } from 'react-scroll'
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import { company, navLinks } from '../data/siteData.js'

const productLinks = ['PCC Panels', 'MCC Panels', 'APFC Panels', 'Bus Ducts', 'Feeder Pillars', 'Energy Meter Boards']

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-white/8">
      <div className="section-container py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.jpg" alt="Infy Electro Tech logo" className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/15" />
            <div>
              <div className="font-display text-white font-semibold">{company.name}</div>
              <div className="text-[11px] text-steel-500 font-mono uppercase tracking-wider">{company.tagline}</div>
            </div>
          </div>
          <p className="text-steel-500 text-sm leading-relaxed mt-5">
            CPRI-approved manufacturer of PCC, MCC, APFC and control panels, and a licensed electrical
            contractor delivering H.T. &amp; L.T. installations up to 33kV on a turnkey basis. Vijayawada,
            Andhra Pradesh — since {company.founded}.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[
              { Icon: Facebook, label: 'Facebook', href: '#' },
              { Icon: Instagram, label: 'Instagram', href: '#' },
              { Icon: Linkedin, label: 'LinkedIn', href: '#' },
              { Icon: Youtube, label: 'YouTube', href: '#' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-steel-400 hover:text-volt-400 hover:border-volt-500/40 transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} smooth duration={500} offset={-90} className="cursor-pointer">
              {l.label}
            </Link>
          ))}
        </FooterCol>

        <FooterCol title="Products">
          {productLinks.map((p) => (
            <Link key={p} to="products" smooth duration={500} offset={-90} className="cursor-pointer">
              {p}
            </Link>
          ))}
        </FooterCol>

        <div>
          <h5 className="text-white font-display font-semibold mb-5">Contact</h5>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-steel-500">
              <MapPin size={16} className="text-volt-400 shrink-0 mt-0.5" />
              {company.addressFull}
            </li>
            <li className="flex gap-3 text-sm text-steel-500">
              <Phone size={16} className="text-volt-400 shrink-0 mt-0.5" />
              <a href={`tel:${company.phonesRaw[0]}`} className="hover:text-volt-400 transition">
                {company.phones[0]}
              </a>
            </li>
            <li className="flex gap-3 text-sm text-steel-500">
              <Mail size={16} className="text-volt-400 shrink-0 mt-0.5" />
              <a href={`mailto:${company.email}`} className="hover:text-volt-400 transition">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-steel-600">
          <span>{company.name} — {company.tagline} &amp; Consultants</span>
          <span>© {new Date().getFullYear()} · All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h5 className="text-white font-display font-semibold mb-5">{title}</h5>
      <ul className="space-y-3 text-sm text-steel-500">
        {Array.isArray(children)
          ? children.map((c, i) => (
              <li key={i} className="hover:text-volt-400 transition w-fit">
                {c}
              </li>
            ))
          : children}
      </ul>
    </div>
  )
}
