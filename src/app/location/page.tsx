import { ArrowUpRight } from "lucide-react";
import { FinalBookingCta } from "@/components/FinalBookingCta";
import { HotelMap } from "@/components/HotelMap";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { location } from "@/data/location";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Location", "Find ibis Marrakech Palmeraie near Marrakech's Palm Grove.", "/location");

export default function LocationPage() { return <><PageHero eyebrow="Location" title={<>Close to the Palm <em>Grove.</em></>} /><main><section className="section locationLead"><div><p className="eyebrow">Find the hotel</p><h2>Easy to locate. Ready to <em>explore.</em></h2><p className="lead">{location.address}</p><div className="locationActions"><a className="button" href={location.googleMapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight /></a></div></div><HotelMap /></section><section className="locationInfo"><div><p className="eyebrow">Getting around</p><h2>Start from the <em>Palmeraie.</em></h2></div><div><p>Accor describes ibis Marrakech Palmeraie as approximately 10 minutes from the city centre and approximately 20 minutes from Jemaa el-Fnaa. These are hotel-provided travel estimates; journeys vary with traffic and time of day.</p><p>Use Google Maps for live routing and up-to-date travel information from your starting point.</p></div></section></main><FinalBookingCta eyebrow="Stay within reach" title={<>Make Marrakech your <em>own.</em></>} /><SiteFooter /></>; }
