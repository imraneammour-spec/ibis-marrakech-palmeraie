import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BookingBar } from "@/components/BookingBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { amenities } from "@/data/amenities";
import { hotel } from "@/data/hotel";
import { location } from "@/data/location";
import { rooms } from "@/data/rooms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ibis Marrakech Palmeraie", "A calm, contemporary stay near Marrakech's Palm Grove.", "/");

export default function Home() {
  return <>
    <header className="hero">
      <SiteHeader />
      <div className="heroCopy"><p className="eyebrow">Marrakech · Morocco</p><h1>ibis Marrakech<br /><em>Palmeraie</em></h1><p>A calm, contemporary stay near the Palm Grove—made for seeing Marrakech at your own pace.</p><div className="heroActions"><a className="button" href={hotel.bookingUrl} target="_blank" rel="noreferrer">Book your stay</a><a className="textLink" href="#discover">Discover the hotel <ArrowDownRight /></a></div></div>
      <p className="heroCaption">A modern hotel in the colours of the Ochre City</p>
    </header>
    <BookingBar />
    <main>
      <section id="discover" className="intro section"><div><p className="eyebrow">The hotel</p><h2>Quietly placed.<br /><em>Well connected.</em></h2></div><div><p>Set close to Marrakech&apos;s Palm Grove, ibis Marrakech Palmeraie brings together an easygoing atmosphere and practical comforts for business or leisure stays.</p><p>Its 147 air-conditioned rooms, outdoor pool, restaurant and bar create a considered base beyond the city&apos;s rush.</p><Link className="textLink" href="/hotel">Explore the hotel <ArrowUpRight /></Link></div></section>
      <section className="rooms section"><div className="sectionTitle"><div><p className="eyebrow">Stay your way</p><h2>Room to <em>unwind.</em></h2></div><Link className="textLink" href="/rooms">View all rooms <ArrowUpRight /></Link></div><div className="roomGrid">{rooms.map((room, index) => <article className={`roomCard roomCard--${index + 1}`} key={room.slug}><div className="roomVisual" role="img" aria-label={`Approved hotel photography slot for ${room.name}`}><span>{String(index + 1).padStart(2, "0")}</span></div><div><p className="eyebrow">{room.capacity} · {room.bed}</p><h3>{room.name}</h3><p>{room.description}</p><Link className="textLink" href={`/rooms/${room.slug}`}>Explore room <ArrowUpRight /></Link></div></article>)}</div></section>
      <section className="experience"><div className="experienceVisual" role="img" aria-label="Approved hotel photography slot for poolside experience"><p>Poolside<br /><em>light.</em></p></div><div className="experienceCopy"><p className="eyebrow">At your leisure</p><h2>Sun, shade, and a slower <em>moment.</em></h2><p>Step out onto the terrace, take a dip in the outdoor pool, or linger over a meal at the hotel&apos;s international restaurant and bar.</p><p className="muted">Pool and food-service opening times are available from reception.</p></div></section>
      <section className="amenities section"><p className="eyebrow">Made easy</p><h2>Everything for a comfortable <em>stay.</em></h2><div className="amenityGrid">{amenities.map(({ name, Icon }) => <div key={name}><Icon size={22} /><span>{name}</span></div>)}</div></section>
      <section className="location section"><div><p className="eyebrow">Find us</p><h2>At the edge of the <em>Palmeraie.</em></h2><p>{location.address}</p></div><div className="mapCard locationCard"><span>Plan your arrival</span><strong>Near the Palm Grove.</strong><Link className="textLink" href="/location">Explore the location <ArrowUpRight /></Link></div></section>
    </main>
    <section className="reserve"><p className="eyebrow">Your Marrakech stay</p><h2>Starts <em>here.</em></h2><a className="button" href={hotel.bookingUrl} target="_blank" rel="noreferrer">Book your stay</a></section>
    <SiteFooter />
  </>;
}
