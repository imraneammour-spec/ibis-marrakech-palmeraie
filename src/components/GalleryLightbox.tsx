"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type ApprovedGalleryImage = { src: string; alt: string };
type GalleryLightboxProps = { images: ApprovedGalleryImage[]; activeIndex: number | null; onClose: () => void; onChange: (index: number) => void };

export function GalleryLightbox({ images, activeIndex, onClose, onChange }: GalleryLightboxProps) {
  const closeButton = useRef<HTMLButtonElement>(null); const currentIndex = activeIndex ?? 0; const image = activeIndex === null ? null : images[currentIndex];
  useEffect(() => { if (!image) return; closeButton.current?.focus(); const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); if (event.key === "ArrowLeft") onChange((currentIndex + images.length - 1) % images.length); if (event.key === "ArrowRight") onChange((currentIndex + 1) % images.length); }; document.addEventListener("keydown", onKeyDown); return () => document.removeEventListener("keydown", onKeyDown); }, [currentIndex, image, images.length, onChange, onClose]);
  if (!image) return null;
  return <div className="galleryLightbox" role="dialog" aria-modal="true" aria-label="Hotel photograph"><button ref={closeButton} type="button" aria-label="Close image" onClick={onClose}><X /></button><button type="button" aria-label="Previous image" onClick={() => onChange((currentIndex + images.length - 1) % images.length)}><ChevronLeft /></button><img src={image.src} alt={image.alt} /><button type="button" aria-label="Next image" onClick={() => onChange((currentIndex + 1) % images.length)}><ChevronRight /></button></div>;
}
