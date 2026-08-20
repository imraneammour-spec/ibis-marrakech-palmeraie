import { describe, expect, it } from "vitest";
import { getRoomBySlug, rooms } from "@/data/rooms";
import { location } from "@/data/location";
import { hotel } from "@/data/hotel";
import { hotelSchema } from "@/lib/schema";

describe("hotel content data", () => {
  it("exposes only the four verified room categories as routable content", () => {
    expect(rooms.map((room) => room.slug)).toEqual(["standard-double", "standard-twin", "junior-suite-sofa", "junior-suite-mountain"]);
    expect(getRoomBySlug("standard-double")?.bed).toBe("1 double bed");
    expect(getRoomBySlug("not-a-room")).toBeUndefined();
  });

  it("keeps Google Maps CTAs attached to the supplied hotel listing", () => {
    expect(location.googleMapsUrl).toBe("https://maps.app.goo.gl/NVaACVyJ1ke46bXp8");
  });

  it("uses only the verified official booking, contact and map details", () => {
    expect(hotel.bookingUrl).toBe("/contact#contact-form");
    expect(hotel.phone).toBe("+212 5243-34020");
    expect(hotel.email).toBe("H6290@accor.com");
    expect(location.coordinates).toEqual({ latitude: 31.678073, longitude: -7.999206 });
  });

  it("emits factual Hotel structured data without invented ratings or prices", () => {
    expect(hotelSchema["@type"]).toBe("Hotel");
    expect(hotelSchema.name).toBe("ibis Marrakech Palmeraie");
    expect(hotelSchema.address.streetAddress).toBe("Avenue Abdelkrim Khattabi, Route de Casablanca");
    expect(hotelSchema).not.toHaveProperty("aggregateRating");
    expect(hotelSchema).not.toHaveProperty("priceRange");
  });
});
