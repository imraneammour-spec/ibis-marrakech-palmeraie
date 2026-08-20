import Link from "next/link";
import { FinalBookingCta } from "@/components/FinalBookingCta";
import { ImageSlot } from "@/components/ImageSlot";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { hotel } from "@/data/hotel";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Hotel", "Discover ibis Marrakech Palmeraie, a contemporary Accor hotel near the Palm Grove.", "/hotel");

export default function HotelPage() { return <><PageHero eyebrow="The hotel" title={<>A modern pause in the <em>Ochre City.</em></>} /><main><section className="section hotelIntro"><div><p className="lead">{hotel.description}</p><p>ibis Marrakech Palmeraie is a 3-star Accor hotel close to the Palm Grove, offering a practical base for business and leisure stays.</p></div><ImageSlot label="Hotel exterior or arrival" ratio="portrait" /></section><section className="hotelFacts"><div><p className="eyebrow">The stay</p><h2>Everything for an easy <em>arrival.</em></h2></div><div className="factGrid">{hotel.facts.map((fact) => <p key={fact}>{fact}</p>)}</div></section><section className="section hotelContext"><div><p className="eyebrow">Marrakech / Palmeraie</p><h2>Close to the city, with room to <em>pause.</em></h2><p>Set near Marrakech&apos;s Palm Grove, the hotel offers a calmer point of return between city plans, business days and downtime by the pool.</p></div><div><p>The hotel&apos;s modern spaces are made for the rhythm of a straightforward city stay: a room to reset, a restaurant and bar for a meal, and a meeting room when work is on the agenda.</p><Link className="textLink" href="/location">Explore the location ↗</Link></div></section><section className="hotelExperience"><ImageSlot label="Pool, dining or common space" ratio="wide" /><div><p className="eyebrow">Hotel experience</p><h2>Simple comforts, thoughtfully <em>placed.</em></h2><Link href="/rooms">Explore rooms</Link><Link href="/gallery">Future hotel gallery</Link><Link href="/location">Plan your route</Link></div></section></main><FinalBookingCta /><SiteFooter /></>; }
