import React, { useState, useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import { gsap } from "gsap";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const svgRef = useRef(null);
  const imageRef = useRef(null);
  const rightContentRef = useRef(null);
  const gradientBgRef = useRef(null);
  // const floatingElementsRef = useRef(null);

  const data = [
    {
      svg: "./img/bgsvg1.svg",
      img: "./img/bakugo.png",
      content: {
        heading: "About Me",
        title: "Who am I?",
        description: [
          "I'm a passionate Frontend Developer blending creativity with code.",
          "Inspired by the intensity of Bakugo, I bring energy to crafting responsive UIs.",
          "Skilled in React, JavaScript, and pixel-perfect design.",
        ],
        keywords: ["Frontend Developer", "ReactJS", "Creative Thinker"],
      },
      theme: {
        gradient: "from-orange-400 via-red-500 to-pink-600",
        accent: "bg-orange-500",
        glow: "shadow-orange-500/30",
      },
    },
    {
      svg: "./img/bgsvg2.svg",
      img: "./img/gojo.png",
      content: {
        heading: "My Skills",
        title: "What I Excel At",
        description: [
          "Like Gojo's limitless abilities, I constantly expand my tech stack.",
          "Build SPAs with React, manage state with Redux or Context API.",
          "Integrate backend APIs and deliver elegant solutions to real-world problems.",
        ],
        keywords: ["React", "JavaScript", "Context API", "TailwindCSS", "Git"],
      },
      theme: {
        gradient: "from-blue-400 via-purple-500 to-indigo-600",
        accent: "bg-blue-500",
        glow: "shadow-blue-500/30",
      },
    },
    {
      svg: "./img/bgsvg3.svg",
      img: "./img/deku.png",
      content: {
        heading: "My Journey",
        title: "Where I've Been",
        description: [
          "Transformed passion into real-world projects and collaborations.",
          "Gained hands-on experience through internships and freelance gigs.",
          "Built full-stack applications from scratch.",
          "Each step helped me grow into a stronger developer.",
        ],
        keywords: ["Internships", "Projects", "Teamwork", "Growth Mindset"],
      },
      theme: {
        gradient: "from-green-400 via-emerald-500 to-teal-600",
        accent: "bg-green-500",
        glow: "shadow-green-500/30",
      },
    },
  ];

  useEffect(() => {
    // Animate SVG
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );

    // Animate gradient background
    gsap.fromTo(
      gradientBgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate floating elements
    gsap.fromTo(
      ".floating-element",
      { opacity: 0, y: 50, rotation: 0 },
      { 
        opacity: 0.1, 
        y: 0, 
        rotation: 360, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
        repeatDelay: 2
      }
    );

    // Animate Image
    const img = imageRef.current;
    gsap.fromTo(
      img,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" }
    );

    const floatTween = gsap.to(img, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate Right Content
    const content = rightContentRef.current;
    gsap.fromTo(
      content,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
    );

    // Animate Bullet Points
    gsap.fromTo(
      ".animated-bullet",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
    );

    return () => {
      floatTween.kill();
    };
  }, [activeIndex]);

  return (
    <div id="about" className="min-h-screen w-screen relative bg-black">
      {/* Top Section */}
      <div className="relative mb-[2rem] pt-[5rem] flex flex-col items-center gap-5">
        <p className="font-general text-lg uppercase md:text-[12px] text-gray-300">
          As you already come to my portfolio
        </p>
        <AnimatedTitle
          title="Disc<b>o</b>ver the rest of <br /> the content "
          containerClass="mt-4 !text-white text-center tracking-[0.2rem]"
        />
      </div>

      {/* Main Container */}
      <div className="flex w-full min-h-screen mt-10">
        {/* Left Side */}
        <div className="w-1/3 bg-black flex items-center justify-center p-10 relative overflow-hidden">
          <div className="relative w-full max-w-[95%] h-[90vh] transition-all duration-500">
            <img
              ref={svgRef}
              src={data[activeIndex].svg}
              alt="SVG Shape"
              className="absolute w-full h-full object-contain z-0"
            />
            <img
              ref={imageRef}
              src={data[activeIndex].img}
              alt="Overlay"
              className="absolute top-10 left-3 z-8 object-contain"
              style={{
                width: "30rem",
                height: "auto",
                maxHeight: "95%",
              }}
            />

            {/* Round Buttons */}
            <div className="absolute bottom-6 right-[-2rem] flex flex-col items-center gap-5 z-10">
              {data.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-[4rem] h-[4rem] rounded-full transition-all duration-300 bg-gray-700 ${
                    activeIndex === i
                      ? "ring-4 ring-white scale-110 shadow-lg"
                      : "hover:bg-gray-500 opacity-80 hover:scale-105"
                  }`}
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Black Background with Container */}
        <div className="relative w-[61rem] max-w-[95%] h-[90vh] mt-[1rem] bg-black">
          {/* Glass Morphism Container */}
          <div className="absolute inset-4 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
            {/* Content Container */}
            <div ref={rightContentRef} className="relative z-10 p-10 h-full flex flex-col justify-center">
              {/* Heading with Accent */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-2 h-16 ${data[activeIndex].theme.accent} rounded-full ${data[activeIndex].theme.glow} shadow-lg`}></div>
                <p className="text-2xl uppercase tracking-widest text-white font-orbitron-bold">
                  {data[activeIndex].content.heading}
                </p>
              </div>

              {/* Title with Gradient Text */}
              <h2 className={`text-6xl md:text-7xl font-zentry font-black bg-gradient-to-r ${data[activeIndex].theme.gradient} bg-clip-text text-transparent leading-tight tracking-wider mb-8`}>
                {data[activeIndex].content.title}
              </h2>

              {/* Description with Modern Bullets */}
              <ul className="space-y-6 mb-8">
                {data[activeIndex].content.description.map((point, index) => (
                  <li
                    key={index}
                    className="animated-bullet flex items-start gap-4 text-xl md:text-2xl text-gray-200 font-general leading-relaxed"
                  >
                    <div className={`mt-3 w-3 h-3 ${data[activeIndex].theme.accent} rounded-full ${data[activeIndex].theme.glow} shadow-lg flex-shrink-0`}></div>
                    <span className="tracking-wide">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Modern Keywords Pills */}
              <div className="flex flex-wrap gap-4">
                {data[activeIndex].content.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className={`bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium font-general tracking-wide transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 ${data[activeIndex].theme.glow} shadow-lg`}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Bottom Accent Line */}
              <div className={`mt-12 h-1 w-32 ${data[activeIndex].theme.accent} rounded-full ${data[activeIndex].theme.glow} shadow-lg`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;