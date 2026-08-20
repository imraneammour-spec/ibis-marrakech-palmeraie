"use client";

import { useMemo, useState } from "react";
import { ImageSlot } from "@/components/ImageSlot";

type GalleryItem = { label: string; category: "Rooms" | "Pool" | "Dining" | "Hotel" | "Exterior"; ratio: "landscape" | "portrait" | "wide" | "square" };
const galleryItems: GalleryItem[] = [
  { label: "Hotel exterior", category: "Exterior", ratio: "wide" }, { label: "Standard double room", category: "Rooms", ratio: "landscape" }, { label: "Twin room", category: "Rooms", ratio: "portrait" }, { label: "Junior suite", category: "Rooms", ratio: "square" }, { label: "Outdoor pool", category: "Pool", ratio: "landscape" }, { label: "Restaurant", category: "Dining", ratio: "portrait" }, { label: "Lobby or common area", category: "Hotel", ratio: "square" }, { label: "Breakfast or dining", category: "Dining", ratio: "wide" }
];
const categories = ["All", "Rooms", "Pool", "Dining", "Hotel", "Exterior"] as const;
export function GalleryGrid() { const [category, setCategory] = useState<(typeof categories)[number]>("All"); const items = useMemo(() => category === "All" ? galleryItems : galleryItems.filter((item) => item.category === category), [category]); return <section aria-label="Future hotel photography gallery"><div className="galleryFilters" role="group" aria-label="Gallery categories">{categories.map((item) => <button className={category === item ? "is-active" : ""} key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="galleryGrid">{items.map((item) => <ImageSlot key={item.label} label={item.label} ratio={item.ratio} />)}</div></section>; }
