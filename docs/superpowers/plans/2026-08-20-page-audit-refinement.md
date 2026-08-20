# Page Audit Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every public ibis Marrakech Palmeraie route complete, responsive, accessible and factually accurate without changing its approved identity.

**Architecture:** Shared layout and content components establish one responsive system. Typed verified data continues to power routes, while isolated client components own mobile navigation, booking validation and real-image-ready gallery interaction.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS, Vitest, Testing Library, Lucide.

**Spec:** `docs/superpowers/specs/2026-08-20-page-audit-refinement-design.md`

## Global Constraints

- Local work only: do not push to GitHub or deploy to Netlify.
- Do not use, download or present unlicensed hotel photography as genuine.
- Preserve verified Accor booking, contact and Google Maps destinations.
- Keep `.next` for development and `.next-production` for production builds.
- Do not invent hotel facts, prices, ratings, availability, amenities or travel times.

---

### Task 1: Establish test coverage and data/metadata helpers

**Files:**
- Create: `src/lib/site.ts`, `src/lib/metadata.ts`, `tests/refinement.test.tsx`
- Modify: `src/data/hotel.ts`, `src/data/rooms.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`

- [ ] Write failing tests for canonical metadata, room-specific descriptions, a valid sitemap URL and hotel schema without fabricated rating or price fields.
- [ ] Run `npm test -- refinement.test.tsx` and observe the expected missing-helper failure.
- [ ] Implement focused helpers and data fields needed by the route content.
- [ ] Re-run the test file and confirm the new assertions pass.

### Task 2: Shared responsive shell and controls

**Files:**
- Create: `src/components/PageHero.tsx`, `src/components/ImageSlot.tsx`, `src/components/FinalBookingCta.tsx`
- Modify: `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `src/components/BookingBar.tsx`, `src/components/HotelMap.tsx`, `src/app/globals.css`, `src/styles/tokens.css`
- Test: `tests/refinement.test.tsx`

- [ ] Write failing tests for mobile navigation state, official booking targets, date-order validation and direct footer route links.
- [ ] Run the scoped tests and observe expected behaviour failures.
- [ ] Implement the smallest shared controls and responsive CSS to satisfy the tests.
- [ ] Re-run the scoped tests and confirm they pass.

### Task 3: Complete page content and room template

**Files:**
- Create: `src/components/GalleryGrid.tsx`
- Modify: `src/app/page.tsx`, `src/app/rooms/page.tsx`, `src/app/rooms/[slug]/page.tsx`, `src/app/hotel/page.tsx`, `src/app/gallery/page.tsx`, `src/app/location/page.tsx`, `src/app/contact/page.tsx`, `src/styles/rooms.css`, `src/styles/home-polish.css`
- Test: `tests/refinement.test.tsx`, existing route tests

- [ ] Write failing tests for all room-detail sections, direct contact actions, location map, gallery categories and the removal of public integration-pending copy.
- [ ] Run scoped tests and observe expected failures.
- [ ] Compose the complete routes from shared components and verified data.
- [ ] Re-run scoped tests and confirm they pass.

### Task 4: Verification and rendered responsive audit

**Files:**
- Modify only findings from validation.

- [ ] Run `npm test`, `npm run typecheck`, and `npm run build`.
- [ ] Use a local rendered app to inspect all ten public routes at 1440, 1024, 768, 430, 390 and 360px.
- [ ] Verify no horizontal overflow, keyboard menu behaviour, focus handling, responsive comparison, maps, buttons and page landmarks.
- [ ] Record the commands and actual results in the handoff; do not push or deploy.
