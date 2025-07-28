"use client";

import { useEffect, useRef } from "react";

export default function InfiniteScrollBanner() {
  const scrollRef = useRef(null);
  const isAnimating = useRef(false);

  const images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=868",
    "https://api.builder.io/api/v1/image/assets/TEMP/e2156e29035bdcb5eb1e1239f847d22b20d75409?width=868",
    "https://api.builder.io/api/v1/image/assets/TEMP/3f76a30de452db493e02e953a64a93d202fc5095?width=868",
    "https://api.builder.io/api/v1/image/assets/TEMP/4492e5b83f35718bc77d197870a26dcc0e00db00?width=868",
    "https://api.builder.io/api/v1/image/assets/TEMP/1095452a355abecc33fffeefaae4a5ab3d19e94e?width=868",
  ];


  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 15;

    const onWheel = (e) => {
      e.preventDefault();
      if (!isAnimating.current) {
        isAnimating.current = true;
        requestAnimationFrame(() => {
          container.scrollLeft += e.deltaY * scrollSpeed;

          const scrollWidth = container.scrollWidth;
          const containerWidth = container.offsetWidth;

          if (container.scrollLeft <= 0) {
            container.scrollLeft = scrollWidth / 3;
          } else if (container.scrollLeft >= (scrollWidth * 2) / 3) {
            container.scrollLeft = scrollWidth / 3;
          }

          isAnimating.current = false;
        });
      }
    };

    container.scrollLeft = container.scrollWidth / 3;
    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="w-full bg-white">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden gap-6 scroll-smooth scrollbar-hide px-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-[434px] h-[282px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
