# ibis Marrakech Palmeraie Page Audit Refinement

## Goal

Refine the existing approved Marrakech editorial identity into a coherent, complete, responsive and accessible site across every public route. This is a local-only implementation: no remote push, Netlify deployment or unlicensed hotel photography.

## Decisions

- Keep the cream, terracotta and olive palette; Playfair Display + DM Sans; existing navigation and booking destination; verified Accor facts; supplied Google Maps destination; and the separate `.next`/`.next-production` outputs.
- Consolidate responsive type, spacing, button, placeholder and content-width rules in the existing global CSS layer. Editorial display headings use `clamp()` values constrained for laptop and mobile screens.
- Use shared `PageHero`, labelled image-slot, final CTA, map, header, footer and room-detail sections so routes remain visually related and future photography can be supplied through data rather than a layout rewrite.
- The header becomes a small client component only for an accessible mobile menu. The gallery uses a client lightbox architecture that activates only when a future approved image source is supplied; placeholders never impersonate photography.
- Every booking action uses the supplied official Accor URL. The booking bar validates logical date order but does not claim availability or complete a booking.
- The contact route replaces its non-functional form with direct, verified telephone, email and directions actions.
- Each route exposes unique title, description, canonical and Open Graph metadata. Sitemap, robots and JSON-LD use a configurable public site URL, falling back to the current supplied public URL rather than an invalid `TODO` URL.

## Route Coverage

- `/`: preserves existing composition; tightens heading/spacing, mobile booking controls, card balance and map sizing.
- `/rooms`: preserves all current sections; improves card/action alignment and provides a labelled scrollable comparison at small widths.
- `/rooms/[slug]`: adds a complete reusable hero, verified essentials and distinctions, future gallery slots, related rooms, back link and official CTA.
- `/hotel`: adds verified hotel narrative, stay facts, neutral Palmeraie context, experience links and future-photo slot.
- `/gallery`: adds categories and varied labelled future-photo compositions with a real-image-ready dialog architecture.
- `/location`: adds a major embedded map, verified address/direction actions, attributed Accor travel estimates and restrained booking CTA.
- `/contact`: adds verified direct-contact actions and map; omits the inactive visitor form.

## Quality Gates

- Automated test coverage is added before the changed behaviour.
- Run `npm test`, `npm run typecheck`, and `npm run build`.
- Inspect every public route at 1440, 1024, 768, 430, 390 and 360px; check overflow, headings, navigation, CTAs, maps, forms, footer and keyboard behaviour.
- Report any machine limitation that prevents an actual browser assertion and do not represent it as completed.
