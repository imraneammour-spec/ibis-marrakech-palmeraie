export type Room = { slug: string; name: string; bed: string; capacity: string; view?: string; description: string; image: string };

export const rooms: Room[] = [
  { slug: "standard-double", name: "Standard Room · Double Bed", bed: "1 double bed", capacity: "2 guests", description: "A straightforward, air-conditioned room with a private bathroom, desk area, television and free Wi-Fi.", image: "/images/hotel/rooms/room-standard-double.svg" },
  { slug: "standard-twin", name: "Standard Room · Twin Beds", bed: "2 single beds", capacity: "2 guests", description: "A practical twin room for a relaxed Marrakech stay, with the verified ibis essentials.", image: "/images/hotel/rooms/room-standard-twin.svg" },
  { slug: "junior-suite-sofa", name: "Junior Suite · Double Bed & Sofa", bed: "1 double bed", capacity: "2 guests", description: "A junior suite category with a double bed and sofa, designed for a little more room to settle in.", image: "/images/hotel/rooms/room-junior-suite.svg" },
  { slug: "junior-suite-mountain", name: "Junior Suite · Mountain View", bed: "1 double bed", capacity: "2 guests", view: "Mountain view", description: "A junior suite category with a double bed and a mountain-view option.", image: "/images/hotel/rooms/room-mountain-suite.svg" }
];

export const getRoomBySlug = (slug: string) => rooms.find((room) => room.slug === slug);
