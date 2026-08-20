import Link from "next/link";
import { hotel } from "@/data/hotel";
import { location } from "@/data/location";
export function SiteFooter() { return <footer className="footer"><div><p className="eyebrow">Marrakech · Morocco</p><h2>{hotel.name}</h2><p>{location.address}</p></div><div className="footerLinks"><Link href="/rooms">Rooms</Link><Link href="/hotel">Hotel</Link><Link href="/gallery">Gallery</Link><a href={location.googleMapsUrl} target="_blank">Google Maps ↗</a></div><small>© {new Date().getFullYear()} {hotel.name}. Hotel details sourced from Accor.</small></footer>; }
