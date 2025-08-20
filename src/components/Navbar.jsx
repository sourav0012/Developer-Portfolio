import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { SiKatana } from "react-icons/si";
import { GiKatana } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Home", "About", "Feature", "Story", "Project", "Contact"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { y: currentScrllY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    if (currentScrllY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrllY > lastScrollY) {
      // Scrolling down
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrllY < lastScrollY) {
      // Scrolling up
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrllY);
  }, [currentScrllY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  }, [isNavVisible]);

  const toogleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4 nav-container-mobile">
            {/* Logo and Product button */}
            <div className="flex items-center gap-2 sm:gap-7">
              <img src="/img/logo.png" alt="logo" className="w-8 sm:w-10" />

              <a
                id="product-button"
                href="/sourav_mondal_react.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 flex items-center justify-center gap-1 sm:gap-3 px-3 sm:px-7 py-2 sm:py-3 rounded-full text-xs font-general uppercase text-black hover:bg-blue-100 transition"
              >
                <GiKatana className="text-sm sm:text-base" />
                <span className="hidden xs:block">RESUME</span>
                <span className="xs:hidden">CV</span>
                <SiKatana className="text-sm sm:text-base" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex h-full items-center">
              <div className="flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                className="ml-10 flex items-center space-x-0.5"
                onClick={toogleAudioIndicator}
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/bankai.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isIndicatorActive ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-3">
              <button
                className="flex items-center space-x-0.5"
                onClick={toogleAudioIndicator}
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/bankai.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isIndicatorActive ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-2 text-white hover:text-blue-300 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>
          <div 
            ref={mobileMenuRef}
            className="fixed top-20 right-4 left-4 rounded-lg shadow-lg p-6 mobile-menu"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-item py-3 text-center border-b border-white/10 last:border-b-0"
                  onClick={closeMobileMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;