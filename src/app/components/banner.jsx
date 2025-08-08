"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useCursor } from "./CustomCursor";
import axios from "axios";

export default function InfiniteScrollBanner() {
  const { handleMouseEnter, handleMouseLeave } = useCursor();
  const scrollRef = useRef(null);
  const scrollVelocity = useRef(0);
  const rafId = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [images, setImages] = useState([]);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/landing/show`
        );
        setImages(res.data); // assuming API returns array [{id, title, image_url}, ...]
      } catch (err) {
        console.error("Error fetching landing images:", err);
      }
    };
    fetchImages();
  }, []);

  const duplicatedImages = [...images, ...images];

  // Observe when banner is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => {
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, []);

  // Wheel scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      const maxScroll = container.scrollWidth / 2;
      if (Math.abs(scrollVelocity.current) > 0.1) {
        container.scrollLeft += scrollVelocity.current;
        scrollVelocity.current *= 0.95;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else if (
          container.scrollLeft <= 0 &&
          scrollVelocity.current < 0
        ) {
          container.scrollLeft = maxScroll;
        }
        rafId.current = requestAnimationFrame(scroll);
      } else {
        scrollVelocity.current = 0;
        rafId.current = null;
      }
    };

    const handleWheel = (e) => {
      if (isIntersecting) {
        e.preventDefault();
        scrollVelocity.current += e.deltaY * 0.1;
        if (!rafId.current) {
          rafId.current = requestAnimationFrame(scroll);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    if (container.scrollWidth > 0) {
      container.scrollLeft = container.scrollWidth / 4;
    }

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isIntersecting]);

  return (
    <section className="w-full bg-white py-5">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 px-6 scrollbar-hide"
      >
        {duplicatedImages.map((img, index) => (
  <div
    key={`${img.id || 'noid'}-${index}`}
    className="group flex-shrink-0 w-[434px]"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="w-full h-[282px] rounded-md overflow-hidden">
      <img
        src={img.image_url}
        alt={img.title || `Banner ${index}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <p className="text-black font-medium text-lg mt-2 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      {img.title}
    </p>
  </div>
))}

      </div>
    </section>
  );
}
