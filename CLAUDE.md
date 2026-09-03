# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

CentraLaundry — company profile website for a laundry business (reference brand: pusatmesinlaundry.com). Sells laundry appliances (washers, dryers, finishing equipment) and turnkey laundry business packages.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based theme via `@theme` in `src/app/globals.css` — there is no `tailwind.config.ts`)
- Data layer: dummy/static TypeScript data only, no database yet. Product and package data live in `src/data/*.ts`; swap these for real fetches once a DB is introduced.

## Commands

```
npm run dev     # start dev server
npm run build   # production build + type check
npm run lint    # eslint
```

No test runner configured yet.

## Architecture

- `src/app/` — App Router routes: `/`, `/products`, `/products/[id]`, `/packages`, `/packages/[id]`, `/about`, `/contact`. Detail routes use `generateStaticParams()` against the dummy data arrays for static generation.
- `src/components/` — shared UI: `Header`, `Footer`, `Button` (primary/outline variants), `ProductCard`, `PackageCard`.
- `src/data/` — dummy data source of truth (`products.ts`, `packages.ts`). Detail pages look up by `id` and call `notFound()` if missing.
- `src/types/index.ts` — `Product` and `BusinessPackage` interfaces shared by data and components.
- Path alias `@/*` maps to `src/*`.

## Brand colors

Extracted from pusatmesinlaundry.com's theme CSS custom properties (`--clenq-*`), defined as Tailwind utilities in `globals.css`:

| Utility        | Hex       | Role                                                  |
| -------------- | --------- | ----------------------------------------------------- |
| `brand-yellow` | `#f5b700` | Accent / CTA buttons                                  |
| `brand-navy`   | `#043e74` | Primary brand color (headers, headings, body accents) |
| `brand-dark`   | `#172000` | Secondary dark tone (footer)                          |
| `brand-blue`   | `#298be7` | Secondary accent (links, price highlights)            |

Use these via Tailwind classes, e.g. `bg-brand-navy`, `text-brand-yellow`.
