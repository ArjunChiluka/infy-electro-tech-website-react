# Infy Electro Tech — Corporate Website (React)

A premium, modern React rebuild of the Infy Electro Tech corporate site, built with
Vite, Tailwind CSS, Framer Motion, Swiper, React CountUp, React Scroll, React Helmet
Async and React Intersection Observer.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The production build is emitted to `dist/` and is ready to deploy to Vercel, Netlify
or any static host — no backend required.

## Structure

- `src/components` — page sections (Hero, About, Products, Services, Manufacturing,
  Certifications, Clients, Contact, Footer, Navbar, floating buttons, scroll-to-top)
- `src/components/ui` — small reusable primitives (Reveal animation wrapper, section
  heading)
- `src/data/siteData.js` — all company content in one place (easy to edit)
- `public/assets` — all images copied from the original static site

## Deploying to Vercel

1. Push this project to a Git repository.
2. Import it in Vercel — framework preset **Vite** is auto-detected.
3. Build command: `npm run build`, output directory: `dist`.
