<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6d28d9,100:0f172a&height=200&section=header&text=Portfolio&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Andreas%20Keazer%20Canlas%20%E2%80%94%20Full-Stack%20Developer%20%26%20AI%2FML%20Engineer&descAlignY=58&descSize=18" width="100%"/>

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[Live Site →](https://your-deployment-url.vercel.app)**

</div>

<br/>

## About

This is my personal developer portfolio — a full-bleed, editorial-grid style
site built to showcase my projects, background, and how to get in touch.
It's a solo full-stack thesis developer's home on the web: clinical AI
platforms, small-business tools, and everything in between.

## Features

- 🖥️ **Full-bleed editorial grid layout** — bordered panels that reach the
  true viewport edge at every screen size, no fixed max-width container
- 🌗 **Light & dark mode** via `next-themes`, togglable from the nav
- 🎞️ **Scroll-reveal animation system** built on Framer Motion, with a
  shared set of stagger/fade variants reused across every section
- 🖱️ **Swipe-gesture interactions** — project galleries and the About-page
  portrait respond to an actual swipe motion (mouse or touch), not a
  click-and-hold drag
- 📱 **Fully responsive** — from small phones to ultrawide desktop monitors
- 🗂️ **Content-driven architecture** — all copy, projects, tech stack, and
  contact info live in a single typed `lib/data.ts`, so pages are just
  presentation

## Pages

| Route | Description |
|---|---|
| `/` | Hero, About summary, work highlights, tech stack |
| `/projects` | Full project archive with image galleries |
| `/about` | Bio, philosophy, timeline, expertise, certificates |
| `/contact` | Contact channels, resume, credits |

## Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer)

</div>

## Project Structure

```
├── app/
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page
│   ├── projects/page.tsx     # Project archive
│   ├── globals.css           # Design tokens, theme, keyframes
│   ├── layout.tsx            # Root layout, theme + background
│   └── page.tsx              # Homepage
├── components/
│   ├── Hero.tsx               # Homepage hero
│   ├── AboutSummary.tsx       # Homepage about/services summary
│   ├── WorkSummary.tsx        # Homepage project highlights
│   ├── ProjectList.tsx        # Full project list (with Gallery)
│   ├── Gallery.tsx            # Swipeable project image gallery
│   ├── PortraitSwap.tsx       # Swipe-triggered portrait swap
│   ├── Nav.tsx                # Site navigation + theme toggle
│   ├── TechStackStrip.tsx     # Tech stack pill row
│   ├── Services.tsx           # Services list
│   ├── Reveal.tsx             # Scroll-reveal wrapper
│   └── motion.tsx             # Shared Framer Motion variants
├── lib/
│   ├── data.ts                 # All site content (profile, projects, etc.)
│   └── useSwipeGesture.ts      # Shared swipe-detection hook
└── public/
    └── projects/                # Project screenshots, by project slug
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/rezkae/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Editing Content

Almost everything on the site — profile info, project entries, tech stack,
services, and contact links — lives in `lib/data.ts`. Update that file
rather than hunting through individual components.

## Deployment

This project deploys to [Vercel](https://vercel.com/) out of the box —
connect the repo and it builds with zero configuration.

```bash
npm run build
```

## License

This project's code is available for reference. Please don't copy the
personal content (name, photos, project write-ups, resume) as your own.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6d28d9,100:0f172a&height=100&section=footer" width="100%"/>

</div>
