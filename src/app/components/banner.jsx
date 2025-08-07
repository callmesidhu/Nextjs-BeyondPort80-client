"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useCursor } from './CustomCursor';

// Note: ScrollToPlugin is not used in the final code, so it can be removed
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollToPlugin);

export default function InfiniteScrollBanner() {
  // Use separate refs for each part of the cursor for precise animation control

  const {handleMouseEnter, handleMouseLeave} = useCursor();
  const scrollRef = useRef(null);
  const scrollVelocity = useRef(0);
  const rafId = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const images = [
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/e2156e29035bdcb5eb1e1239f847d22b20d75409?width=868", label: "City Lights" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/3f76a30de452db493e02e953a64a93d202fc5095?width=868", label: "Nature's Calm" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/4492e5b83f35718bc77d197870a26dcc0e00db00?width=868", label: "Abstract Lines" },
    { src: "https://api.builder.io/api/v1/image/assets/TEMP/1095452a355abecc33fffeefaae4a5ab3d19e94e?width=868", label: "Golden Hour" },
  ];

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), { threshold: 0.1 });
    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => { if (scrollRef.current) observer.unobserve(scrollRef.current) };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scroll = () => {
      const maxScroll = container.scrollWidth / 2;
      if (Math.abs(scrollVelocity.current) > 0.1) {
        container.scrollLeft += scrollVelocity.current;
        scrollVelocity.current *= 0.95;
        if (container.scrollLeft >= maxScroll) { container.scrollLeft = 0; } 
        else if (container.scrollLeft <= 0 && scrollVelocity.current < 0) { container.scrollLeft = maxScroll; }
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
        if (!rafId.current) { rafId.current = requestAnimationFrame(scroll); }
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    if (container.scrollWidth > 0) { container.scrollLeft = container.scrollWidth / 4; }
    return () => {
      if (rafId.current) { cancelAnimationFrame(rafId.current); }
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isIntersecting]);

  return (
    <>
      <section className="w-full bg-white py-10">
        <div ref={scrollRef} className="flex overflow-x-scroll gap-8 px-6 scrollbar-hide">
          {duplicatedImages.map((img, index) => (
            <div key={index} className="group flex-shrink-0 w-[434px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="w-full h-[282px] rounded-md overflow-hidden">
                <img src={img.src} alt={`Banner ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <p className="text-black font-medium text-lg mt-2 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}