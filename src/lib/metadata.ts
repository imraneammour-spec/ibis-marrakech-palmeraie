import type { Metadata } from "next";
import { hotel } from "@/data/hotel";
import { siteUrl } from "@/lib/site";

export function pageMetadata(title: string, description: string, path: string): Metadata { const url = `${siteUrl}${path}`; return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, siteName: hotel.name, type: "website" } }; }
