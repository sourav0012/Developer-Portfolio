import React, { useEffect, useRef } from "react";
import ScrollIndicator from "../components/ScrollIndicator";
import { gsap } from "gsap";

const Home = () => {
  const name = "SOURAV";

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const text2Ref = useRef(null);
  const consoleRef = useRef(null);
  const linesRef = useRef([]);
  const textRefs = useRef([]);

  linesRef.current = [];
  textRefs.current = [];

  // 🔁 Hero Image Float
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // 🔁 Text clipPath reveal - left
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        clipPath: "inset(0% 100% 0% 0%)",
        opacity: 0,
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 3.5,
        ease: "power2.out",
        delay: 0.5,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      }
    );
  }, []);

  // 🔁 Text clipPath reveal - right
  useEffect(() => {
    gsap.fromTo(
      text2Ref.current,
      {
        clipPath: "inset(0% 0% 0% 100%)",
        opacity: 0,
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  // 🟢 Typing Console Loop
  useEffect(() => {
    const lines = [
      "🔺Initiating Protocol.......",
      "USER: SOURAV_Mondal",
      "CLASS: Frontend Developer",
      "STATUS: Active 🟢",
      "OBJECTIVE: Build ⚛️ Ui Components",
      "━━━━━━━━━━━━━━━━",
    ];

    const container = consoleRef.current;

    const startTyping = () => {
      container.innerHTML = "";

      const tl = gsap.timeline();

      lines.forEach((text) => {
        const lineEl = document.createElement("p");
        lineEl.className = "text-white";
        container.appendChild(lineEl);

        let currentText = "";

        text.split("").forEach((char) => {
          tl.call(
            () => {
              currentText += char;
              lineEl.textContent = currentText + "▌";
            },
            null,
            "+=0.07"
          );
        });

        tl.call(
          () => {
            lineEl.textContent = currentText;
          },
          null,
          "+=0.1"
        );
      });

      tl.call(
        () => {
          startTyping(); // loop
        },
        null,
        "+=2"
      );
    };

    startTyping();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      gsap.killTweensOf(consoleRef.current);
      container.innerHTML = "";
    };
  }, []);

  // Eat / Sleep / Code / Repeat animation
  useEffect(() => {
    linesRef.current.forEach((line, i) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
        }
      );
    });

    textRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.5 + i * 0.2,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <section id="home" className="h-screen w-full bg-orange-400 text-white font-orbitron-bold relative overflow-hidden">
      {/*Left Vertical Name */}
      <div className="absolute top-[55%] left-[8.1rem] -translate-y-1/2 h-[35rem] w-[6.5rem] flex items-center justify-center z-10">
        <div className="rotate-90 flex">
          {name.split("").map((char, index) => {
            const isEven = index % 2 === 0;
            return (
              <span
                key={index}
                className={`text-8xl tracking-widest ${
                  isEven ? "text-white" : "text-transparent"
                }`}
                style={isEven ? {} : { WebkitTextStroke: "0.4px white" }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>

      {/* Animated Eat / Sleep / Code / Repeat */}
      <div>
        {["Eat.", "Sleep.", "Code.", "Repeat."].map((word, i) => (
          <div
            key={i}
            className={`absolute ${
              [
                "top-[40%] right-[22%]",
                "top-[55%] right-[10%]",
                "top-[70%] right-[18%]",
                "top-[85%] right-[5%]",
              ][i]
            } -translate-y-1/2 flex flex-col gap-1 items-start`}
          >
            {/* Animated line */}
            <div
              ref={(el) => (linesRef.current[i] = el)}
              className="h-[3px] w-28 bg-white scale-x-0"
            />

            {/* Animated text */}
            <div
              ref={(el) => (textRefs.current[i] = el)}
              className="text-white text-6xl font-orbitron-bold flex gap-2"
            >
              <span className="text-[0.6rem] opacity-80">0{i + 1}K</span>
              <span className="text-[6rem]">{word}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bordered “DEVELOPER” behind image */}
      <div className="absolute top-[57%] left-1/2 -translate-x-[47%] -translate-y-1/2 h-[10rem] w-[65rem] z-0 rounded-xl flex items-center justify-center">
        <div className="flex gap-[1rem]">
          {"DEVELOPER".split("").map((char, index) => {
            const isEven = index % 2 === 0;
            return (
              <span
                key={index}
                className={`text-[13rem] tracking-[0.5rem] font-zentry ${
                  isEven ? "text-white" : "text-transparent"
                }`}
                style={
                  isEven
                    ? { opacity: 0.25 }
                    : {
                        WebkitTextStroke: "1px white",
                        opacity: 0.4,
                      }
                }
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          ref={imageRef}
          src="/img/naruto.png"
          alt="Hero Ninja"
          className="h-[35rem] object-contain transition-transform duration-200"
        />
      </div>

      {/* Top-left Paragraph Clip Reveal */}
      <div className="absolute top-[15%] left-[20%] z-20 w-[20rem] h-[12rem] p-4 overflow-hidden">
        <p
          ref={textRef}
          className="text-sm font-general text-white leading-relaxed"
          style={{ clipPath: "inset(0% 100% 0% 0%)" }}
        >
          Hi, I'm Sourav — a passionate Frontend Developer focused on building
          interactive and visually appealing user interfaces. I love crafting
          seamless digital experiences using React and modern web technologies.
        </p>
      </div>

      {/* Bottom-left Paragraph Clip Reveal */}
      <div className="absolute top-[68%] left-[20%] z-20 w-[20rem] h-[8rem] p-4 overflow-hidden">
        <p
          ref={text2Ref}
          className="text-sm font-general text-white leading-relaxed"
          style={{ clipPath: "inset(0% 0% 0% 100%)" }}
        >
          My goal is to create clean, responsive, and performant interfaces that
          elevate user engagement and brand value. Let's build something amazing
          together.
        </p>
      </div>

      {/*Mission Console Typing Animation */}
      <div
        ref={consoleRef}
        className="absolute top-[14%] left-[65%] w-[23rem] h-[8rem] overflow-hidden p-3 text-sm font-mono"
      ></div>

      <ScrollIndicator />
    </section>
  );
};

export default Home;
