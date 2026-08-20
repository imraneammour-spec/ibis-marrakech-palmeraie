import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";

type PageHeroProps = { eyebrow: string; title: ReactNode; children?: ReactNode; className?: string };

export function PageHero({ eyebrow, title, children, className = "" }: PageHeroProps) {
  return <section className={`pageHero ${className}`.trim()}><SiteHeader /><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children}</div></section>;
}
