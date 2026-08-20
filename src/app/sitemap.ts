import type { MetadataRoute } from "next";
import { rooms } from "@/data/rooms";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap { return ["", "/hotel", "/rooms", "/gallery", "/location", "/contact", ...rooms.map((room) => `/rooms/${room.slug}`)].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() })); }
