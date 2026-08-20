# ibis Marrakech Palmeraie Website Design

## Goal

Build a fast, accessible, editorial-quality Next.js website for the real ibis Marrakech Palmeraie hotel. The website improves the hotel's digital presentation without representing it as a luxury or boutique property it is not.

## Verified hotel profile

- **Name:** ibis Marrakech Palmeraie
- **Official hotel page:** https://all.accor.com/hotel/6290/index.en.shtml
- **Google Maps source:** https://maps.app.goo.gl/NVaACVyJ1ke46bXp8
- **Category:** 3-star hotel
- **Address:** Avenue Abdelkrim Khattabi, Route de Casablanca, 40000 Marrakech, Morocco
- **Inventory:** 147 air-conditioned rooms
- **Verified in-room features:** private bathroom, desk area, television, free Wi-Fi
- **Verified hotel facilities:** outdoor pool with terrace, bar, international restaurant, meeting room, free Wi-Fi
- **Verified room types:** Standard Room with 1 double bed; Standard Room with 2 single beds; Junior Suite with 1 double bed and sofa; Junior Suite with a double bed and mountain view
- **Verified positioning:** calm location close to the Palm Grove; Accor states 10 minutes from the city centre and 20 minutes from Jemaa el-Fnaa

The implementation must cite these facts only in reusable structured data. It must not infer missing room sizes, opening hours, booking URLs, exact coordinates, phone/email details, review scores, review totals, social links, or accessibility services.

## Product scope

The initial English website will include:

- Home page with hero, hotel introduction, room preview, pool/restaurant experience features, amenities, guest-review sentiment, gallery, location and reservation CTA.
- Dynamic room detail pages at `/rooms/[slug]`.
- Hotel, gallery, location and contact pages.
- A booking interface that gathers dates, guests and rooms but sends users to `TODO_BOOKING_URL` until an official booking-engine deep link is supplied.
- Google Maps links using the supplied short URL. The embedded map is deferred until verified coordinates or an official embeddable Google Maps URL is available; the UI will retain a clearly styled map destination panel rather than render a false map.
- A language selector and translation dictionary architecture for English, French and Arabic. English is initially complete; future Arabic content must use RTL document direction.

## Information and trust model

All hotel facts live in typed `src/data` modules, separated from presentation components. Each fact has a verification source URL or is a named `TODO_*` placeholder. Components must never hard-code hotel facts.

Google review content will not include fabricated testimonials, ratings, dates, reviewer names or category scores. A factually cautious editorial sentiment block will state that publicly visible guest feedback commonly discusses service, pool, room cleanliness/comfort, breakfast and maintenance, with balanced positive and negative themes only after the source data is captured in `src/data/reviews.ts`. Before that capture, the section will be omitted rather than fabricated. The primary review CTA always links to the supplied Google Maps listing.

Images will use local, descriptive placeholder art directions only until legally reusable official hotel images are added to `public/images/hotel`. Filenames and alt copy identify the represented hotel space without claiming an image is a real photograph. A single image registry maps each image slot to expected source, alt text and priority; no random stock photography will be presented as ibis Marrakech Palmeraie.

## Visual system

The visual language combines a warm ivory canvas, charcoal text, deep olive utility tones and selective terracotta accents. It uses an editorial serif for display typography and a restrained sans-serif for interface text. The composition is spacious, image-led and asymmetrical, with hard-edged grids softened by modest rounded corners.

Marrakech influence is limited to earth tones, sunlit material references and subtle line-pattern detailing. No decorative clichés, ornate iconography or generic card grids are used. The visual tone remains calm, contemporary and honest to an accessible city hotel.

The header begins transparent on photographic hero content and becomes a solid, elevated surface after scrolling. On small screens it opens a full-viewport navigation panel with clear close control, focus management and no generic drawer appearance. Motion is limited to fades, image scale and transitions, and is disabled or reduced under `prefers-reduced-motion`.

## Architecture

Use Next.js App Router and TypeScript. Server components render static content and pages by default; client components are confined to interactive controls such as navigation, booking fields, language control and gallery lightbox.

Route-level metadata provides canonical URLs, title templates, descriptions and Open Graph data. `sitemap.ts` and `robots.ts` are generated from the route set. Hotel schema is emitted only with verified name, address, official URL and verified amenities; optional fields are omitted until verified.

`next/image` handles image dimensions, responsive sizes, priority hero loading and lazy below-the-fold content. CSS is contained in a global token layer and focused CSS modules or component-level styles, avoiding UI libraries. Icons come from a compact icon package or inline SVG components only where a semantic label is available.

## Proposed file boundaries

- `src/data/`: verified hotel, rooms, amenities, reviews, gallery, experiences, location and translation data.
- `src/components/layout/`: header, mobile menu, footer, skip link, page shell.
- `src/components/sections/`: home-page editorial sections with no route logic.
- `src/components/ui/`: buttons, booking fields, section heading, icon list, reveal utilities and lightbox.
- `src/app/`: routes, layout, metadata, sitemap, robots and room detail pages.
- `src/lib/`: metadata/schema helpers, URL validation and class utilities.
- `public/images/hotel/`: source-controlled image registry destinations and documented placeholders.

## Page behaviours

The home page has a clear reading order: transparent header, full-height hero, booking bar, hotel introduction, room compositions, experiences, food/pool features, verified amenities, conditional review sentiment, gallery, location and reservation close.

Room pages render only the four verified room categories and expose verified capacity and bedding. They show a field only when its data is verified. Related rooms are derived from the room data module, not copied into routes.

Contact presents the verified address and Google Maps link. Phone, email and booking links appear only when verified. The contact form is client-side only and clearly states that delivery integration is required; it must never pretend that a message has been sent.

## Quality, accessibility and performance

Every route has a single H1, semantic landmarks, visible keyboard focus, descriptive controls, labelled fields and meaningful image alternatives. Dialog/menu interactions are keyboard reachable and escape closable. Contrast meets WCAG AA for normal text.

Layouts are designed from a 320px viewport upward with no horizontal overflow. The app uses no analytics, tracking, payment flow or unnecessary client-side data loading. It ships with optimized font loading, `next/image`, minimal client JavaScript and production build checks.

## Verification approach

Tests will cover hotel-data integrity, valid room route generation and key UI controls. Automated production builds and lint/type checks are required. Manual responsive verification covers desktop, tablet and mobile navigation; booking UI; rooms; gallery; link targets; reduced motion; keyboard navigation; heading order; and placeholder visibility.

## Source register

- Accor official profile: https://all.accor.com/hotel/6290/index.en.shtml
- User-provided Google Maps location: https://maps.app.goo.gl/NVaACVyJ1ke46bXp8

