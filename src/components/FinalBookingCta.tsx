import { ReactNode } from "react";
import Link from "next/link";

export function FinalBookingCta({ eyebrow = "Your Marrakech stay", title = <>Starts <em>here.</em></> }: { eyebrow?: string; title?: ReactNode }) {
  return <section className="reserve"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><Link className="button" href="/contact#contact-form">Book your stay</Link></section>;
}
