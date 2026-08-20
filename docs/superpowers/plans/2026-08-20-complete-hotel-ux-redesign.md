# Complete Hotel UX Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a cohesive, compact hotel UX with a validated internal stay-request flow and contact form.

**Architecture:** Add two focused client components for request forms and a `/book` route. Shared navigation and booking components link to that route; a final stylesheet loaded after legacy CSS establishes the design system without rewriting verified content or accessibility behavior.

**Tech Stack:** Next.js 15, React 19, TypeScript, Vitest, CSS.

**Spec:** `docs/superpowers/specs/2026-08-20-complete-hotel-ux-redesign-design.md`

## Global Constraints

- Keep booking inside the site; do not link booking CTAs to Accor.
- Do not claim a request, message, availability or reservation is confirmed without a backend.
- Preserve verified facts, routes, SEO, keyboard navigation, gallery and direct contact/directions links.
- Do not commit because the shared checkout contains unrelated uncommitted work.

---

### Task 1: Internal stay-request journey

**Files:**
- Create: `src/app/book/page.tsx`, `src/components/BookingRequestForm.tsx`, `tests/booking-page.test.tsx`
- Modify: `src/components/BookingBar.tsx`, `src/components/SiteHeader.tsx`, `src/components/FinalBookingCta.tsx`, public page CTA links

**Interfaces:**
- Produces `BookingRequestForm({ initialValues })`, using `checkIn`, `checkOut`, `guests`, `rooms` query values.
- All booking buttons use `href="/book"` or encoded `/book?...` URLs.

- [ ] **Step 1: Write the failing tests**

```tsx
expect(screen.getByRole("heading", { name: /plan your stay/i })).toBeInTheDocument();
expect(screen.getByText(/requires hotel confirmation/i)).toBeInTheDocument();
expect(screen.getByRole("button", { name: /send stay request/i })).toBeInTheDocument();
```

- [ ] **Step 2: Run the booking test and verify it fails**

Run: `npm.cmd test -- tests/booking-page.test.tsx`

- [ ] **Step 3: Implement the route, validation and shared internal links**

```tsx
if (checkIn && checkOut && checkOut <= checkIn) {
  setError("Choose a check-out date after check-in.");
  return;
}
setStatus("Request delivery is not configured yet. The hotel must confirm availability.");
```

- [ ] **Step 4: Run the focused booking test and full suite**

Run: `npm.cmd test -- tests/booking-page.test.tsx` then `npm.cmd test`

### Task 2: Contact form without a false delivery claim

**Files:**
- Create: `src/components/ContactForm.tsx`
- Modify: `src/app/contact/page.tsx`, `tests/refinement.test.tsx`

**Interfaces:**
- Produces `ContactForm()` with full name, email, optional phone, subject and message fields.

- [ ] **Step 1: Write failing tests for labels and invalid submission**

```tsx
expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
fireEvent.click(screen.getByRole("button", { name: /send message/i }));
expect(await screen.findByRole("alert")).toHaveTextContent(/enter your full name/i);
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `npm.cmd test -- tests/refinement.test.tsx`

- [ ] **Step 3: Implement compact validated contact form and unavailable-delivery message**

```tsx
setStatus("Message delivery is not configured yet. Please call or email the hotel directly.");
```

- [ ] **Step 4: Run focused and full tests**

Run: `npm.cmd test -- tests/refinement.test.tsx` then `npm.cmd test`

### Task 3: Remove redundant conversion and location patterns

**Files:**
- Modify: `src/app/page.tsx`, `src/app/hotel/page.tsx`, `src/app/location/page.tsx`, `src/app/contact/page.tsx`, `src/app/rooms/page.tsx`, `src/app/rooms/[slug]/page.tsx`, `src/components/FinalBookingCta.tsx`, `src/components/SiteFooter.tsx`
- Test: `tests/home-page.test.tsx`, `tests/rooms-page.test.tsx`

- [ ] **Step 1: Write failing assertions for the retained contextual location and booking actions**

```tsx
expect(screen.getByRole("link", { name: /view location/i })).toHaveAttribute("href", "/location");
expect(screen.getAllByRole("link", { name: /book your stay/i })[0]).toHaveAttribute("href", "/book");
```

- [ ] **Step 2: Run focused tests and verify they fail**

Run: `npm.cmd test -- tests/home-page.test.tsx tests/rooms-page.test.tsx`

- [ ] **Step 3: Retain only contextual location links and compact booking prompts where useful**

- [ ] **Step 4: Run the focused tests and full suite**

Run: `npm.cmd test`

### Task 4: Systematic visual composition and responsive refinement

**Files:**
- Create: `src/styles/complete-redesign.css`
- Modify: `src/app/layout.tsx`, shared page markup only where centered introductions or compact CTA composition require classes.

- [ ] **Step 1: Apply the documented typography bounds, spacing rhythm, card surfaces and responsive grid transitions**
- [ ] **Step 2: Verify no route markup or interaction test regresses**

Run: `npm.cmd test`

### Task 5: Final quality gate

**Files:** None unless verification reveals a defect.

- [ ] **Step 1: Run typecheck, production build and route checks**

Run: `npm.cmd run typecheck` and `npm.cmd run build`

- [ ] **Step 2: Inspect responsive rendering at 1440, 1024, 768, 430 and 360px; report any unavailable browser capability honestly**
