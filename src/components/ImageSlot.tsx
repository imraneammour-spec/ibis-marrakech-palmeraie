type ImageSlotProps = { label: string; ratio?: "landscape" | "portrait" | "wide" | "square"; className?: string };

export function ImageSlot({ label, ratio = "landscape", className = "" }: ImageSlotProps) {
  return <div className={`imageSlot imageSlot--${ratio} ${className}`.trim()} role="img" aria-label={label}><strong>{label}</strong></div>;
}
