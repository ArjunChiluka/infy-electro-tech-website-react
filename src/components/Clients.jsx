import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import { clients } from '../data/siteData.js'
import 'swiper/css'

export default function Clients() {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
      <div className="section-container">
        <SectionHeading
          align="center"
          eyebrow="Prestigious Projects & Valued Partners"
          title="Trusted across industries"
          desc="Long-term partnerships built on trust, mutual respect and open communication — spanning agro, pharma, hospitality, education, healthcare and construction."
          className="mx-auto"
        />
      </div>

      <Reveal delay={0.15} className="mt-16 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-ink-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-ink-900 to-transparent z-10" />
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          loop
          freeMode
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          allowTouchMove={false}
          className="!px-6"
        >
          {[...clients, ...clients].map((c, i) => (
            <SwiperSlide key={i} style={{ width: 'auto' }}>
              <div className="h-24 w-40 sm:h-28 sm:w-48 rounded-2xl bg-white flex items-center justify-center p-4 shadow-card">
                <img src={c.img} alt={c.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}
