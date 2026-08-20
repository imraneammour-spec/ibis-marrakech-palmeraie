import Link from "next/link";
import { hotel } from "@/data/hotel";
export function SiteHeader() { return <header className="header"><Link className="brand" href="/"><span>ibis</span> Marrakech Palmeraie</Link><nav aria-label="Primary navigation"><Link href="/rooms">Rooms</Link><Link href="/hotel">Hotel</Link><Link href="/gallery">Gallery</Link><Link href="/location">Location</Link><Link href="/contact">Contact</Link></nav><a className="button button--small" href="#book">Book your stay</a></header>; }
