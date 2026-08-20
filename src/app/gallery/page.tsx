import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Gallery", "A future-ready gallery framework for ibis Marrakech Palmeraie.", "/gallery");

export default function GalleryPage() { return <><PageHero eyebrow="Visual notes" title={<>Light, colour, <em>calm.</em></>} /><main className="section galleryPage"><div className="galleryIntro"><p className="eyebrow">Gallery</p><h2>Moments around the <em>hotel.</em></h2><p className="lead">Explore the spaces and atmosphere of ibis Marrakech Palmeraie.</p></div><GalleryGrid /></main><SiteFooter /></>; }
