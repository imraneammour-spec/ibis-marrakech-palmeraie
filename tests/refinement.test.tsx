import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BookingBar } from "@/components/BookingBar";
import { navigationMatches, SiteHeader } from "@/components/SiteHeader";
import ContactPage from "@/app/contact/page";
import GalleryPage from "@/app/gallery/page";
import RoomPage from "@/app/rooms/[slug]/page";

describe("page audit refinements", () => {
  it("keeps parent navigation active for nested room routes only", () => {
    expect(navigationMatches("/rooms", "/rooms")).toBe(true);
    expect(navigationMatches("/rooms/standard-double", "/rooms")).toBe(true);
    expect(navigationMatches("/hotel", "/rooms")).toBe(false);
    expect(navigationMatches("/hotel", "/hotel")).toBe(true);
  });

  it("opens and closes an accessible mobile navigation menu", () => {
    render(<SiteHeader />);

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByRole("dialog", { name: /site navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close menu/i })).toHaveFocus();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: /site navigation/i })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open menu/i })).toHaveFocus();
  });

  it("stops a check-out date before check-in from redirecting to booking", () => {
    render(<BookingBar />);
    fireEvent.change(screen.getByLabelText(/check-in/i), { target: { value: "2026-09-10" } });
    fireEvent.change(screen.getByLabelText(/check-out/i), { target: { value: "2026-09-08" } });
    fireEvent.submit(screen.getByRole("button", { name: /check availability/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(/check-out must be after check-in/i);
  });

  it("keeps contact focused on direct actions and places the existing message form in the right column", () => {
    const { container } = render(<ContactPage />);

    expect(screen.getByRole("link", { name: /call the hotel/i })).toHaveAttribute("href", "tel:+2125243-34020");
    expect(screen.getByRole("link", { name: /email the hotel/i })).toHaveAttribute("href", "mailto:H6290@accor.com");
    expect(screen.queryByText(/address & arrival/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /open in google maps/i })).not.toBeInTheDocument();
    expect(container.querySelectorAll("#contact-form")).toHaveLength(1);
    expect(container.querySelector(".contactFormColumn #contact-form")).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByRole("alert")).toHaveTextContent(/enter your full name/i);
    expect(screen.queryByTitle(/map showing ibis marrakech palmeraie/i)).not.toBeInTheDocument();
  });

  it("sets up intentional future-photography categories without claiming they are photos", () => {
    render(<GalleryPage />);

    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Rooms" })).toBeInTheDocument();
    expect(screen.queryByText(/approved image slot/i)).not.toBeInTheDocument();
  });

  it("renders a complete room detail template from verified room data", async () => {
    render(await RoomPage({ params: Promise.resolve({ slug: "standard-double" }) }));

    expect(screen.getByRole("heading", { name: /standard room.*double bed/i })).toBeInTheDocument();
    expect(screen.getByText(/good to know/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /explore other rooms/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /book your stay/i }).every((link) => link.getAttribute("href") === "/contact#contact-form")).toBe(true);
  });
});
