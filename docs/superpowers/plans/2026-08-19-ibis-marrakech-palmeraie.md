# ibis Marrakech Palmeraie Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a production-quality, SEO-oriented Next.js website for the real ibis Marrakech Palmeraie hotel.

**Architecture:** Next.js App Router renders static, metadata-rich route segments backed by typed, source-labelled hotel data. Server components own content pages while small client components handle menus, date/guest selection and the gallery lightbox. Global design tokens and focused CSS modules keep the visual system premium, responsive and maintainable.

**Tech Stack:** Next.js, React, TypeScript, CSS Modules, `next/image`, `next/font`, Vitest, Testing Library, Lucide React.

**Spec:** `docs/superpowers/specs/2026-08-19-ibis-marrakech-palmeraie-design.md`

## Global Constraints

- Use only verified ibis Marrakech Palmeraie facts stored in structured `src/data` modules.
- Keep all missing factual data as named `TODO_*` placeholders; never invent hotel facts, images, reviews, prices, coordinates or contact details.
- Use the supplied Google Maps short URL for all directions/review destination links.
- Render in English initially; structure strings for future French and Arabic, including RTL support.
- Meet WCAG AA contrast, keyboard navigation, focus visibility, semantic heading order and reduced-motion preferences.
- Design from 320px upward with no horizontal overflow and use `next/image` sizes/lazy loading to protect performance.

---

## File structure

```
src/
  app/                 routes, root metadata, sitemap and robots
  components/
    layout/            Header, MobileMenu, Footer, SkipLink
    sections/          home-page editorial sections
    ui/                Button, BookingBar, SectionHeading, GalleryLightbox
  data/                verified facts and source-labelled content
  lib/                 metadata, schema and class helpers
  styles/              global tokens and resets
public/images/hotel/   documented image slots/placeholders
tests/                 data and component behaviour tests
```

### Task 1: Create the Next.js foundation and design tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `vitest.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`, `src/styles/tokens.css`, `tests/setup.ts`
- Test: `tests/app-shell.test.tsx`

**Interfaces:**
- Produces `RootLayout({ children }: { children: React.ReactNode }): JSX.Element` with language, font and skip link.

- [ ] Write `tests/app-shell.test.tsx` asserting a rendered layout exposes a `main` landmark and a skip link targeting `#main-content`.
- [ ] Run `npm test -- app-shell.test.tsx` and confirm it fails before the layout exists.
- [ ] Implement TypeScript/Next/Vitest configuration, root layout, font variables, a CSS reset, colour/type/spacing tokens, focus-visible rules and reduced-motion fallback.
- [ ] Re-run `npm test -- app-shell.test.tsx` and confirm it passes.
- [ ] Run `npm run lint` and `npm run typecheck`.

### Task 2: Model verified hotel content and validation helpers

**Files:**
- Create: `src/data/hotel.ts`, `src/data/rooms.ts`, `src/data/amenities.ts`, `src/data/experiences.ts`, `src/data/gallery.ts`, `src/data/location.ts`, `src/data/reviews.ts`, `src/data/translations.ts`, `src/lib/hotel.ts`
- Test: `tests/hotel-data.test.ts`

**Interfaces:**
- Produces `hotel`, `rooms`, `amenities`, `experiences`, `galleryItems`, `location`, `reviewSummary`, and `getRoomBySlug(slug: string)`.
- Every displayable fact follows `{ value: string; source: string }` or is an explicit `TODO_*` constant.

- [ ] Write data tests ensuring four exact verified room slugs exist, every room has bedding/capacity, Google Maps URLs use the supplied source URL and omitted review data has no testimonial fields.
- [ ] Run `npm test -- hotel-data.test.ts` and confirm it fails before data modules exist.
- [ ] Implement typed source-labelled data using the Accor page and supplied Maps URL; set `TODO_BOOKING_URL`, never include invented phone/email/rating/coordinates.
- [ ] Implement `getRoomBySlug` as a `Room | undefined` lookup and test a known and unknown slug.
- [ ] Re-run `npm test -- hotel-data.test.ts` and confirm it passes.

### Task 3: Add reusable UI and responsive site navigation

**Files:**
- Create: `src/components/ui/Button.tsx`, `src/components/ui/SectionHeading.tsx`, `src/components/ui/IconList.tsx`, `src/components/layout/SkipLink.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`, `src/components/layout/Footer.tsx` and corresponding `.module.css` files.
- Test: `tests/navigation.test.tsx`

**Interfaces:**
- `Button({ href, variant, children })` renders native links for route/external destinations.
- `Header()` renders desktop links and delegates mobile state to `MobileMenu()`.
- `MobileMenu({ open, onClose })` is focusable, escape closable and provides navigation links.

- [ ] Write navigation tests that open the menu, close it with Escape and verify labelled primary navigation links are present.
- [ ] Run `npm test -- navigation.test.tsx` and confirm it fails before components exist.
- [ ] Implement text-first responsive navigation, scroll-state styling, focus trap/return, visible close control and accessible footer using only verified address and map link.
- [ ] Implement `Button` variants with contrast-safe hover/focus states, never using anonymous icon-only controls.
- [ ] Re-run `npm test -- navigation.test.tsx` and confirm it passes.

### Task 4: Build the booking and editorial home-page sections

**Files:**
- Create: `src/components/ui/BookingBar.tsx`, `src/components/sections/Hero.tsx`, `HotelIntro.tsx`, `RoomPreview.tsx`, `ExperienceFeature.tsx`, `Amenities.tsx`, `GuestFeedback.tsx`, `LocationPreview.tsx`, `BookingCta.tsx`, `src/app/page.tsx` and associated style files.
- Test: `tests/booking-bar.test.tsx`, `tests/home-page.test.tsx`

**Interfaces:**
- `BookingBar({ compact?: boolean })` stores `checkIn`, `checkOut`, `guests`, `rooms` client-side and directs to `TODO_BOOKING_URL` only when replaced by an approved value.
- `HomePage()` composes all editorial sections from data modules.

- [ ] Write booking tests that label date/guest/room fields and prevent a false booking success state.
- [ ] Write page tests that assert the H1 is the official hotel name, four rooms link to their routes, only verified amenities display, and the maps CTA uses `location.googleMapsUrl`.
- [ ] Run `npm test -- booking-bar.test.tsx home-page.test.tsx` and confirm they fail before implementation.
- [ ] Implement the cinematic hero, restrained booking UI, asymmetric introduction, large room compositions, restaurant/pool experiences, facilities and destination panel; omit reviews until the data module carries verified summary content.
- [ ] Add image art-direction placeholders with truthful `alt` text and `next/image` sizes; do not imply the temporary visual is official hotel photography.
- [ ] Re-run the two test files and confirm they pass at desktop and 320px viewport widths.

### Task 5: Implement dynamic room routes and permanent content pages

**Files:**
- Create: `src/app/rooms/page.tsx`, `src/app/rooms/[slug]/page.tsx`, `src/app/hotel/page.tsx`, `src/app/gallery/page.tsx`, `src/app/location/page.tsx`, `src/app/contact/page.tsx`, `src/components/ui/GalleryLightbox.tsx`, route styles.
- Test: `tests/room-routes.test.tsx`, `tests/contact-page.test.tsx`

**Interfaces:**
- `generateStaticParams(): { slug: string }[]` returns room slugs from `rooms`.
- `generateMetadata({ params }): Metadata` returns room-specific titles/descriptions.
- Unknown room routes call `notFound()`.

- [ ] Write tests for static params, verified room heading/bed/capacity output and undefined room lookup behaviour.
- [ ] Write contact-page tests asserting address/map link presence and absence of unverified phone/email.
- [ ] Run `npm test -- room-routes.test.tsx contact-page.test.tsx` and confirm they fail before implementation.
- [ ] Implement reusable room hero/details/gallery/related-room route composition, gallery lightbox keyboard controls, Hotel narrative, location page and clearly non-delivering contact form.
- [ ] Re-run the test files and verify keyboard lightbox behaviour manually.

### Task 6: Add SEO, structured data and static crawl controls

**Files:**
- Create: `src/lib/metadata.ts`, `src/lib/schema.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx`, `public/manifest.webmanifest`
- Modify: `src/app/layout.tsx`, individual page metadata exports.
- Test: `tests/seo.test.ts`

**Interfaces:**
- `createPageMetadata(input: PageMetadataInput): Metadata` supplies title, description, canonical/OG metadata.
- `createHotelSchema(): WithContext<Hotel>` omits unknown fields.

- [ ] Write SEO tests confirming sitemap includes all permanent routes/room routes and schema has official name/address but no phone, aggregateRating or geo fields.
- [ ] Run `npm test -- seo.test.ts` and confirm it fails before helpers exist.
- [ ] Implement metadata helpers, safe Hotel schema, robots, sitemap and a generated brand-safe Open Graph image without unverified imagery.
- [ ] Re-run `npm test -- seo.test.ts` and inspect generated JSON-LD from the home page.

### Task 7: Polish, visual QA and production verification

**Files:**
- Modify only files found by test/lint/build or visual QA.
- Test: all `tests/**/*.test.*`.

**Interfaces:**
- No changed public interfaces; this task resolves discovered defects only.

- [ ] Run `npm test`, `npm run lint`, `npm run typecheck` and `npm run build`; record and resolve every failure.
- [ ] Run the production app and manually inspect home, room, Hotel, Gallery, Location and Contact routes at 320px, 768px and 1440px.
- [ ] Verify heading hierarchy, skip link, focus rings, mobile menu Escape behaviour, gallery controls, reduced motion, all links and absence of horizontal overflow.
- [ ] Check every displayed hotel fact against the structured source data and search the codebase for unstructured phone/email/rating/price claims.
- [ ] Record final commands and outcomes in the completion handoff.

## Plan self-review

- Spec coverage: Tasks 1-7 cover the stack, structured verified facts, design system, responsive routes, booking interface, maps/reviews safeguards, i18n-ready content, SEO, accessibility, performance and production checks.
- Placeholder scan: the plan names `TODO_BOOKING_URL` only as a deliberate user-required data constant; no step is deferred or ambiguous.
- Interface consistency: all route generation uses the `rooms` source and `getRoomBySlug`; metadata/schema paths use the typed hotel data modules.

