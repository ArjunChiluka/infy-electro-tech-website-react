import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Products from './components/Products.jsx'
import Services from './components/Services.jsx'
import Manufacturing from './components/Manufacturing.jsx'
import Certifications from './components/Certifications.jsx'
import Clients from './components/Clients.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import ScrollTop from './components/ScrollTop.jsx'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  name: 'Infy Electro Tech',
  image: '/assets/hero-banner.jpg',
  logo: '/assets/logo.jpg',
  description:
    'Manufacturers, Engineers, Contractors & Consultants for PCC, MCC, APFC panels and turnkey electrical installation. CPRI approved.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 192/5,6, JRD Tata Industrial Estate, 7th Road, Jawahar Autonagar, Kanuru',
    addressLocality: 'Vijayawada',
    addressRegion: 'Andhra Pradesh',
    postalCode: '520007',
    addressCountry: 'IN',
  },
  telephone: '+91-9640149888',
  foundingDate: '2013',
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Infy Electro Tech | Electrical Control Panel Manufacturers, Vijayawada</title>
        <meta
          name="description"
          content="Infy Electro Tech — Manufacturers, Engineers, Contractors & Consultants for PCC, MCC, APFC panels and turnkey electrical installation. CPRI approved. Vijayawada, Andhra Pradesh."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Infy Electro Tech | Electrical Control Panel Manufacturers, Vijayawada" />
        <meta
          property="og:description"
          content="CPRI-approved manufacturer of PCC, MCC, APFC panels and turnkey electrical installation up to 33kV. Vijayawada, Andhra Pradesh."
        />
        <meta property="og:image" content="/assets/hero-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Infy Electro Tech | Electrical Control Panel Manufacturers, Vijayawada" />
        <meta
          name="twitter:description"
          content="CPRI-approved manufacturer of PCC, MCC, APFC panels and turnkey electrical installation up to 33kV."
        />
        <meta name="twitter:image" content="/assets/hero-banner.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <Services />
        <Manufacturing />
        <Certifications />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollTop />
    </>
  )
}
