# Andreas Keazer Canlas — Portfolio

Next.js 14 + TypeScript + Tailwind CSS portfolio, built as four separate
pages rather than one long scroll.

## Pages

- `/` — Home. A short intro and a summary of three projects.
- `/projects` — The full write-up of all three projects.
- `/about` — Bio, work experience, education, and certificates.
- `/contact` — Email, phone, GitHub, and LinkedIn.

Nav and footer are shared across all four from `app/layout.tsx`.

## Design direction

- **Layout language**: numbered section labels, big display-type headers,
  a persistent top nav with an "Available" status indicator.
- **Palette**: near-black base with a violet accent (`#7C5CFC`) and a
  second "scan" green (`#3DDC97`).
- **Signature element**: the `.reticle` corner-bracket hover effect (see
  `app/globals.css`) is a callback to the bounding boxes MELAScan's
  YOLOv11 model draws around a detected lesion. It shows up on buttons,
  project cards, and links throughout the site.
- **Image placeholders**: any spot without a real photo yet uses the
  `ImagePlaceholder` component (`components/ImagePlaceholder.tsx`), so the
  layout stays final even before every image exists.

## Images

Real screenshots are wired in for two of the three projects, pulled from
your thesis paper and case study PDFs and stored in `public/projects/`:

- **MELAScan** (`public/projects/melascan/`): lesion scanning with the AI
  bounding box, dashboard, a flagged suspicious-lesion report, patient
  records, and appointment scheduling.
- **Exercise Lab** (`public/projects/exercise-lab/`): home page hero,
  exercise demo library, BMI calculator, login screen.
- **NomVet Clinic** has no screenshots on hand, so it still falls back to
  `ImagePlaceholder` on both the home summary and `/projects`. Drop real
  screenshots into a new `public/projects/nomvet-clinic/` folder and add
  them to that project's `images` array in `lib/data.ts` once you have
  them.

Still using `ImagePlaceholder`:

- The hero portrait on `/` and the portrait on `/about` (no photo of you
  provided yet).

## Content still to fill in

- `lib/data.ts` → `profile.resumeHref`: currently `"#"`. Point it at a
  hosted resume PDF once you have one.
- The two portrait placeholders above, once you have a photo.
- NomVet Clinic screenshots, as described above.
- `app/layout.tsx` → `metadataBase`: set to your real domain once you have
  one.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: `next/font/google` fetches Inter, Space Grotesk, and JetBrains Mono
> at build time, so the first `npm run dev` / `npm run build` needs an open
> network connection. This is normal, not a bug in the code.

## Deploying

Push to GitHub and import the repo on Vercel. No configuration needed;
this is a stock Next.js app.

## Structure

```
app/
  layout.tsx        Fonts, metadata, shared Nav + Footer
  page.tsx           Home: Hero + 3-project summary + tech stack
  globals.css        Design tokens + the .reticle signature element
  projects/page.tsx  Full project list
  about/page.tsx     Bio, experience, education, certificates
  contact/page.tsx   Contact details
components/
  Nav.tsx
  Hero.tsx
  WorkSummary.tsx    Home page's 3-project summary cards
  ProjectList.tsx     Full detail cards + image galleries used on /projects
  ImagePlaceholder.tsx
  Footer.tsx
lib/
  data.ts            All copy, project, and experience content lives here
public/
  projects/melascan/       Real MELAScan screenshots
  projects/exercise-lab/   Real Exercise Lab screenshots
```
