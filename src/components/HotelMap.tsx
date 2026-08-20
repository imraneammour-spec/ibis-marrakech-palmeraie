import { location } from "@/data/location";

export function HotelMap() {
  const { latitude, longitude } = location.coordinates;
  return <iframe className="hotelMap" title="Map showing ibis Marrakech Palmeraie" loading="lazy" src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`} referrerPolicy="no-referrer-when-downgrade" />;
}
