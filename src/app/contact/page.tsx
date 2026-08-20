import { Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { hotel } from "@/data/hotel";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Contact ibis Marrakech Palmeraie directly by phone, email or directions.", "/contact");

export default function ContactPage() { return <><PageHero eyebrow="Contact" title={<>We look forward to <em>welcoming you.</em></>} /><main className="section contactPage"><section><p className="eyebrow">Get in touch</p><h2>Directly connected.</h2><p className="lead">For stays, room questions and arrival support, contact the hotel directly.</p><div className="contactActions"><a href={`tel:${hotel.phone.replaceAll(" ", "")}`}><Phone size={20}/><span><small>Call the hotel</small>{hotel.phone}</span></a><a href={`mailto:${hotel.email}`}><Mail size={20}/><span><small>Email the hotel</small>{hotel.email}</span></a></div></section><section className="contactFormColumn" aria-label="Contact form"><ContactForm /></section></main><SiteFooter /></>; }
