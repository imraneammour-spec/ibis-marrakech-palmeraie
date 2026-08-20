"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [["Rooms", "/rooms"], ["Hotel", "/hotel"], ["Gallery", "/gallery"], ["Location", "/location"], ["Contact", "/contact"]] as const;

export function navigationMatches(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => { triggerRef.current?.focus(); setOpen(false); };
  useEffect(() => { if (open) closeRef.current?.focus(); }, [open]);
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape" && open) closeMenu(); }; document.addEventListener("keydown", onKeyDown); return () => document.removeEventListener("keydown", onKeyDown); }, [open]);
  return <div className="header" role="banner"><Link className="brand" href="/"><span>ibis</span> Marrakech Palmeraie</Link><nav aria-label="Primary navigation">{links.map(([label, href]) => { const isActive = navigationMatches(pathname, href); return <Link href={href} key={href} className={isActive ? "is-active" : undefined} aria-current={isActive ? "page" : undefined}>{label}</Link>; })}</nav><Link className="button button--small headerBook" href="/contact#contact-form">Book your stay</Link><button ref={triggerRef} className="menuToggle" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={22} /></button>{open && <div className="mobileMenu" role="dialog" aria-modal="true" aria-label="Site navigation"><button ref={closeRef} className="menuClose" type="button" aria-label="Close menu" onClick={closeMenu}><X size={24} /></button><nav aria-label="Mobile navigation">{links.map(([label, href]) => { const isActive = navigationMatches(pathname, href); return <Link href={href} key={href} onClick={closeMenu} className={isActive ? "is-active" : undefined} aria-current={isActive ? "page" : undefined}>{label}</Link>; })}<Link className="button" href="/contact#contact-form" onClick={closeMenu}>Book your stay</Link></nav></div>}</div>;
}
