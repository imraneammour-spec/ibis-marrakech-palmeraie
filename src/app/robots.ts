import type { MetadataRoute } from "next"; export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},sitemap:"https://TODO_REAL_DOMAIN/sitemap.xml"};}
