"use client";

import { useEffect, useRef, useState } from "react";
import { useCursor } from "./CustomCursor";
import axios from "axios";

const BASE_SPEED = 0.6; // px per frame auto-scroll

export default function InfiniteScrollBanner() {
  const { handleMouseEnter, handleMouseLeave } = useCursor();
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const trackRef = useRef(null);
  const posRef = useRef(0);          // current translateX in px
  const velocityRef = useRef(0);      // extra velocity from wheel
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);  // pause on hover

  // Fetch images via our own proxy route (avoids CORS on the external API)
  useEffect(() => {
    axios
      .get("/api/landing")
      .then((res) => setImages(res.data))
      .catch((err) => console.error("Banner fetch error:", err))
      .finally(() => setLoaded(true));
  }, []);

  // Animation loop — runs after images render
  useEffect(() => {
    if (!loaded || images.length === 0) return;

    const track = trackRef.current;
    if (!track) return;

    const loop = () => {
      if (!isPausedRef.current) {
        const speed = BASE_SPEED + velocityRef.current;

        // Decay wheel velocity
        if (Math.abs(velocityRef.current) > 0.05) {
          velocityRef.current *= 0.94;
        } else {
          velocityRef.current = 0;
        }

        posRef.current -= speed;

        // The track is tripled — loop back after 1/3
        const loopWidth = track.scrollWidth / 3;
        if (posRef.current <= -loopWidth) {
          posRef.current += loopWidth;
        }
        if (posRef.current > 0) {
          posRef.current -= loopWidth;
        }

        track.style.transform = `translateX(${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, images]);

  // Wheel handler — adds velocity in scroll direction
  useEffect(() => {
    const sectionEl = trackRef.current?.parentElement;
    if (!sectionEl) return;

    const handleWheel = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      e.preventDefault();
      velocityRef.current += e.deltaY * 0.08;
      // Clamp so it doesn't go crazy
      velocityRef.current = Math.max(-20, Math.min(20, velocityRef.current));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [loaded]);

  const items = [...images, ...images, ...images];

  return (
    <section className="w-full bg-white py-0 md:py-5 overflow-hidden">
      {/* Skeleton */}
      {!loaded && (
        <div className="flex gap-8 px-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[434px] md:h-[282px] h-[150px] bg-gray-100 animate-pulse rounded-md"
            />
          ))}
        </div>
      )}

      {/* Track — translateX driven by RAF */}
      {loaded && items.length > 0 && (
        <div
          ref={trackRef}
          className="flex gap-8 px-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((img, index) => (
            <div
              key={`${img.id || "noid"}-${index}`}
              className="group flex-shrink-0 w-[434px]"
              onMouseEnter={() => {
                isPausedRef.current = true;
                handleMouseEnter();
              }}
              onMouseLeave={() => {
                isPausedRef.current = false;
                handleMouseLeave();
              }}
            >
              <div className="md:w-full md:h-[282px] h-[150px] w-auto rounded-md overflow-hidden">
                <img
                  src={img.image_url}
                  alt={img.title || `Banner ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-black font-medium text-lg mt-2 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
