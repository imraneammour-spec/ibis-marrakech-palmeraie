import { hotel } from "@/data/hotel";
import { location } from "@/data/location";

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.name,
  url: hotel.officialUrl,
  address: { "@type": "PostalAddress", streetAddress: "Avenue Abdelkrim Khattabi, Route de Casablanca", postalCode: "40000", addressLocality: "Marrakech", addressCountry: "MA" },
  amenityFeature: hotel.facts.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  sameAs: [location.googleMapsUrl]
} as const;
