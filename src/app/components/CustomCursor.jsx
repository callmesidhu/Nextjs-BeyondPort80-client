// src/app/components/CustomCursor.js

// THIS IS THE FIX: Add 'use client' at the top of the file
'use client';

import { createContext, useContext, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

const CursorContext = createContext(null);
export const useCursor = () => useContext(CursorContext);

export function CustomCursor({ children }) {
  const cursorWrapperRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorDotRef.current, { scale: 1, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorOutlineRef.current, { scale: 0, duration: 0.3, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorDotRef.current, { scale: 0, duration: 0.3, ease: "power3.out" });
    gsap.to(cursorOutlineRef.current, { scale: 1, duration: 0.3, ease: "power3.out" });
  };

  useEffect(() => {
    if (!isMounted) return;
    const move = (e) => {
      gsap.to(cursorWrapperRef.current, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power3.out" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMounted]);

  return (
    <CursorContext.Provider value={{ handleMouseEnter, handleMouseLeave }}>
      {isMounted && createPortal(
        <div ref={cursorWrapperRef} className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2">
          <div ref={cursorDotRef} className="w-4 h-4 rounded-full bg-black scale-0"></div>
          <div ref={cursorOutlineRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-black"></div>
        </div>,
        document.body
      )}
      {children}
    </CursorContext.Provider>
  );
}