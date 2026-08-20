import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "../styles/premium-refinement.css";
import "../styles/complete-redesign.css";
import { hotelSchema } from "@/lib/schema";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: { default: "ibis Marrakech Palmeraie", template: "%s | ibis Marrakech Palmeraie" },
  description: "A calm, contemporary stay near Marrakech's Palm Grove.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ibis-marrakech-palmeraie.netlify.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content" tabIndex={-1}>{children}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />
      </body>
    </html>
  );
}
