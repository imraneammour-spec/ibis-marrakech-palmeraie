import { Metadata } from "next";
import Link from "next/link";
import { Bath, BriefcaseBusiness, Tv, Wifi } from "lucide-react";
import { BookingBar } from "@/components/BookingBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { amenities } from "@/data/amenities";
import { hotel } from "@/data/hotel";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = { title: "Rooms | ibis Marrakech Palmeraie", description: "Explore the verified room categories at ibis Marrakech Palmeraie." };
const essentials = [{ name: "Air conditioning", Icon: Bath }, { name: "Private bathroom", Icon: Bath }, { name: "Desk area", Icon: BriefcaseBusiness }, { name: "Television", Icon: Tv }, { name: "Free Wi-Fi", Icon: Wifi }];

export default function RoomsPage() {
  return <><div className="pageHero roomsHero"><SiteHeader/><div><p className="eyebrow">Accommodation</p><h1>Rest well.<br/><em>Wake curious.</em></h1></div></div><BookingBar/><main>
    <section className="roomsIntro section"><div><p className="eyebrow">Your stay</p><h2>Comfort, simply <em>considered.</em></h2></div><p>Each of the hotel&apos;s 147 air-conditioned rooms includes a private bathroom, desk area, television and free Wi-Fi—an uncomplicated base for business or leisure stays in Marrakech.</p></section>
    <section className="section roomCollection"><div className="sectionTitle"><div><p className="eyebrow">Four ways to stay</p><h2>Choose your <em>room.</em></h2></div><p className="collectionNote">Licensed photography slots are ready for hotel-approved imagery.</p></div><div className="roomEditorialList">{rooms.map((room,index)=><article className="roomEditorial" key={room.slug}><div className={`roomVisual roomVisual--large roomCard--${index+1}`} aria-label={`Licensed-image placeholder for ${room.name}`}><span>{String(index+1).padStart(2,"0")}</span><small>Licensed image slot</small></div><div className="roomEditorialCopy"><p className="eyebrow">{room.capacity} · {room.bed}</p><h3>{room.name}</h3><p>{room.description}</p><ul><li>Air conditioning</li><li>Private bathroom</li><li>Desk area</li><li>Television &amp; free Wi-Fi</li></ul><div className="roomActions"><Link className="textLink" href={`/rooms/${room.slug}`}>View room ↗</Link><a className="button button--dark" href={hotel.bookingUrl} target="_blank">Book your stay</a></div></div></article>)}</div></section>
    <section className="essentials section"><p className="eyebrow">Included in your stay</p><h2>Room <em>essentials.</em></h2><div className="essentialsGrid">{essentials.map(({name,Icon})=><div key={name}><Icon size={22}/><span>{name}</span></div>)}</div></section>
    <section className="comparison section"><p className="eyebrow">At a glance</p><h2>Compare room <em>categories.</em></h2><div className="comparisonTable" role="table" aria-label="Room comparison"><div className="comparisonRow comparisonHead" role="row"><span>Room</span><span>Category</span><span>Capacity</span><span>Bedding</span><span>Verified distinction</span></div>{rooms.map(room=><div className="comparisonRow" role="row" key={room.slug}><strong>{room.name}</strong><span>{room.slug.startsWith("junior")?"Junior Suite":"Standard Room"}</span><span>{room.capacity}</span><span>{room.bed}</span><span>{room.view??(room.slug==="junior-suite-sofa"?"Double bed and sofa":"—")}</span></div>)}</div></section>
    <section className="roomsExperience"><div className="experiencePlaceholder"><p>Beyond<br/><em>your room.</em></p><small>Licensed hotel image slot</small></div><div><p className="eyebrow">The hotel experience</p><h2>More of Marrakech,<br/><em>within reach.</em></h2><p>Start the day with breakfast, return to the outdoor pool and terrace, or gather over a meal at the restaurant and bar. The hotel also offers meeting space, free Wi-Fi and outdoor parking.</p><div className="experienceAmenities">{amenities.slice(0,5).map(({name,Icon})=><span key={name}><Icon size={16}/>{name}</span>)}</div></div></section>
    <section className="roomsReserve"><p className="eyebrow">Plan your stay</p><h2>Find your <em>room.</em></h2><a className="button" href={hotel.bookingUrl} target="_blank">Book your stay</a></section>
    <section className="help section"><div><p className="eyebrow">Speak with the hotel</p><h2>Need help <em>choosing?</em></h2></div><div><p>For room and stay questions, contact ibis Marrakech Palmeraie directly.</p><a className="textLink" href={`tel:${hotel.phone.replaceAll(" ","")}`}>{hotel.phone}</a><a className="textLink" href={`mailto:${hotel.email}`}>{hotel.email}</a></div></section>
  </main><SiteFooter/></>;
}
