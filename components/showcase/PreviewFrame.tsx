"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders a live, scaled-down iframe of a full design page as a thumbnail.
 * The iframe is rendered at desktop width (DESIGN_WIDTH) and CSS-scaled to fit
 * the container, so the card always shows the real, rendered design.
 */
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

export function PreviewFrame({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-foam"
      style={{ height: DESIGN_HEIGHT * scale }}
      aria-hidden="true"
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        scrolling="no"
        className="pointer-events-none border-0"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
