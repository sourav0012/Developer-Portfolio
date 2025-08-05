import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollIndicator = () => {
  const originalText = "SCROLL";
  const letterRefs = useRef([]);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);

  useEffect(() => {
    // Arrow pulse animation
    gsap.fromTo(
      leftLineRef.current,
      { scaleY: 1 },
      {
        scaleY: 1.4,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      rightLineRef.current,
      { scaleX: 1 },
      {
        scaleX: 1.4,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        delay: 0.3,
        ease: "power1.inOut",
      }
    );

    const glitchLetters = "!@#$%^&*()_+{}[]<>?/|";

    const glitchWave = () => {
      originalText.split("").forEach((_, i) => {
        const letterEl = letterRefs.current[i];
        if (!letterEl) return;

        const randomChar =
          glitchLetters[Math.floor(Math.random() * glitchLetters.length)];

        const tl = gsap.timeline();
        tl.to(letterEl, {
          textContent: randomChar,
          duration: 0.05,
          ease: "none",
          delay: i * 0.05,
        }).to(letterEl, {
          textContent: originalText[i],
          duration: 0.05,
          ease: "none",
        });
      });
    };

    const interval = setInterval(glitchWave, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-6 right-6 z-20 flex flex-row items-center text-white gap-2">
    {/* Glitch Wave Text */}
    <div className="h-4 overflow-hidden relative flex space-x-[1px] text-xs font-medium tracking-widest">
      {originalText.split("").map((char, i) => (
        <span key={i} ref={(el) => (letterRefs.current[i] = el)}>
          {char}
        </span>
      ))}
    </div>

    {/* Arrow Lines */}
    <div className="flex flex-col items-center space-y-[2px]">
      <div
        ref={leftLineRef}
        className="w-[2px] h-3 bg-white origin-top"
      ></div>
      <div
        ref={rightLineRef}
        className="w-3 h-[2px] bg-white origin-left"
      ></div>
    </div>
  </div>
  );
};

export default ScrollIndicator;
