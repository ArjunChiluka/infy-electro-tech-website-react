import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, desc, align = 'left', className = '' }) {
  return (
    <Reveal
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.1] mt-3">
        {title}
      </h2>
      {desc && <p className="mt-5 text-steel-400 text-base sm:text-lg leading-relaxed">{desc}</p>}
    </Reveal>
  )
}
