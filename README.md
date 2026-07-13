# Travel Time Limo

A Next.js web app for a US chauffeur/limo service — airport transfers, hourly hire, chauffeur hailing, and city-to-city rides. Includes a public marketing site, a multi-step booking flow, and a simple admin bookings view.

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS, shadcn/ui-style components (Radix UI primitives), `class-variance-authority`
- **Animation:** Framer Motion (scroll reveals) and GSAP + `@gsap/react` (timelines, hover, parallax, ScrollTrigger)
- **State:** Hookstate
- **Data:** MongoDB via Mongoose
- **Email:** SendGrid
- **Maps/places:** Google Maps Places autocomplete

## Getting started

Install dependencies:

```bash
yarn install
```

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MONGO_DB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SENDGRID_API_KEY=your_sendgrid_api_key
NEXT_PUBLIC_SENDER_EMAIL=your_sender_email
NEXT_PUBLIC_RECEIVER_EMAIL=your_receiver_email
NEXT_PUBLIC_GOMAPS_PLACES_API_KEY=your_places_api_key
NEXT_PUBLIC_ADMIN_SECRET=your_admin_secret
```

Run the dev server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command       | Description                          |
| ------------- | ------------------------------------- |
| `yarn dev`    | Start the dev server (Turbopack)      |
| `yarn build`  | Production build                      |
| `yarn start`  | Start the production server           |
| `yarn lint`   | Run ESLint                            |

## Project structure

```
app/
  api/                    API routes (bookings, email)
  components/             UI components
    home/                 Landing page sections (hero, services, city routes, features)
    bookings/              Multi-step booking flow (pickup, service class, payment)
    Services/              Marketing pages per service line
    city-to-city/          City-to-city route pages
    Table/                 Admin bookings table
    ui/                    Reusable primitives (button, card, dialog, motion, counter, ...)
  services/               Service landing pages (airport transfer, hourly, etc.)
  bookings/               Booking flow routes
  city-to-city/           City-to-city route pages
  allBookings/[secret]/   Admin bookings view (secret-gated)
  lib/                    Constants, helpers, DB connection, shared styles
  models/                 Mongoose models
  state/                  Hookstate global state
  types/                  Shared TypeScript types
```

## Key features

- **Landing page** — hero with animated entrance/parallax, services grid, top cities & routes with animated counters, features section.
- **Booking flow** — pickup info, service class selection, payment info, confirmation.
- **City-to-city routes** — browsable route directory with per-route detail pages.
- **Admin bookings** — a secret-gated page listing all bookings in a data table.
- **Email notifications** — booking confirmations sent via SendGrid.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com). Set the environment variables above in your Vercel project settings before deploying.
