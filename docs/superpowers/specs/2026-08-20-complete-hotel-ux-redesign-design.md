# Complete Hotel UX Redesign

## Goal

Transform the existing ibis Marrakech Palmeraie site into one compact, editorial hospitality experience: restrained typography, deliberate composition, an internal stay-request journey and useful rather than repetitive page-level calls to action.

## Design system

- Keep the verified ibis content, warm ivory/terracotta/olive palette, Playfair Display and DM Sans.
- Use a controlled scale: hero 43-68px, page hero 38-56px, section headings 30-44px, card titles 21-28px, body 16px, labels 11-12px, controls 13-14px.
- Use `clamp()` only within those bounds. Mobile headings must never exceed 48px.
- Apply a 4/8px spacing rhythm, 64-80px desktop section padding and 40-56px mobile padding. Cards use modest radii, visible borders and subtle shadows.
- Center only standalone introductions and conversion panels; retain left/split layouts for explanatory and directional content.

## Booking request

`/book` is an internal client page. Header CTAs, existing booking bars and retained page prompts link to it. Query parameters carry `checkIn`, `checkOut`, `guests` and `rooms`; the page validates dates and required guest details. Submission presents no success state and makes no availability or reservation claim. It instead explains that an API or hotel delivery endpoint is needed to send and confirm the request.

## Contact

The contact page retains telephone, email, address and directions, then adds a compact client-side form containing full name, email, optional phone, subject and message. It validates required fields and email syntax; without a delivery service it communicates that message delivery is not configured rather than claiming it was sent.

## Information architecture and composition

- Keep the homepage hero, booking entry point, introduction, rooms, experience, amenities and review content. Replace the large homepage location block with a compact contextual location link.
- Keep the dedicated Location route as the complete address/map/directions experience.
- Keep room index/detail content, facts, gallery, map, accessibility behavior and metadata.
- Replace the repeated full-height `FinalBookingCta` with a compact reusable booking prompt only where context supports it: room index/detail and the booking route. Remove it from Hotel, Location and Contact.
- Give gallery, amenities, reviews and hotel facts centered introductions where this improves scanning; retain split layouts for Rooms, Hotel, Location and Contact.

## Accessibility and future integration

Forms use real labels, `aria-describedby`, inline alert regions and keyboard-visible focus. The booking and contact forms expose clean request payload shapes locally so an API can replace their unavailable-delivery notices without changing the layouts. Existing direct phone, mail and directions links remain available.

## Verification

Add behavior tests before booking/contact implementation. Run tests, typecheck and production build. Inspect the built routes at desktop, laptop, tablet, mobile and small-mobile widths when a usable browser is available; otherwise report that limitation precisely.
