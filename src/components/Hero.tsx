"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    let frame = 0;

    const animate = () => {
      frame += 0.015;
      setFloatY(Math.sin(frame) * 16);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || isTouch) return;

    const rect = imageRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex justify-center items-center px-4"
    >
      <h1 className="sr-only">
        Shubham Bachhav - Software Engineer • Java Full-Stack Developer
      </h1>

      {/* =========================
          BACKGROUND TEXT DESKTOP
      ========================= */}
      <div
        className={`hidden md:grid grid-cols-20 absolute inset-0 items-center justify-center transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 1 }}
      >
        <div
          className={`text-[5rem] lg:text-[7rem] col-span-8 font-extrabold bg-linear-to-b from-white/15 to-white/55 bg-clip-text text-transparent select-none transition-all duration-1000 ease-out ${
            mounted
              ? "translate-x-0 opacity-100"
              : "-translate-x-32 opacity-0"
          } ps-4`}
        >
          Shubham
        </div>

        <div className="col-span-4" />

        <div
          className={`text-[5rem] lg:text-[5.5rem] col-span-8 font-extrabold bg-linear-to-b from-white/15 to-white/55 bg-clip-text text-transparent select-none transition-all duration-1000 ease-out ${
            mounted
              ? "translate-x-0 opacity-100"
              : "translate-x-32 opacity-0"
          } ps-10`}
        >
          Bachhav
        </div>
      </div>

      {/* =========================
          MOBILE HERO
      ========================= */}
      <div className="md:hidden flex flex-col items-center justify-center w-full z-10">
        {/* IMAGE */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div
            ref={imageRef}
            className="relative w-[260px] h-[380px] sm:w-[300px] sm:h-[440px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isTouch && setHovered(true)}
            onMouseLeave={() => !isTouch && setHovered(false)}
            style={{
              transform: `translateY(${floatY}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <Image
              src="/normal.png"
              alt="Shubham Bachhav Portrait"
              fill
              priority
              className="object-contain"
            />

            {!isTouch && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.25s ease-out",
                  clipPath: hovered
                    ? `circle(80px at ${mousePos.x}% ${mousePos.y}%)`
                    : `circle(0px at 50% 50%)`,
                }}
              >
                <Image
                  src="/robotic.png"
                  alt="Robotic Portrait"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* MOBILE TEXT */}
        <div
          className={`text-center mt-4 transition-all duration-1000 delay-300 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Software Engineer <br />
            Java Full-Stack Developer
          </h2>

          <p className="text-sm mt-4 text-gray-400">
            React.js • JavaScript • Java • Spring Boot • MySQL
          </p>
        </div>
      </div>

      {/* =========================
          DESKTOP PORTRAIT
      ========================= */}
      <div
        className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ zIndex: 3 }}
      >
        <div
          ref={imageRef}
          className="relative w-70 h-115 md:w-95 md:h-120 lg:w-115 lg:h-140"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => !isTouch && setHovered(true)}
          onMouseLeave={() => !isTouch && setHovered(false)}
          style={{
            transform: `translateY(${floatY}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <Image
            src="/normal.png"
            alt="Shubham Bachhav Portrait"
            fill
            priority
            className="object-cover rounded-xl"
          />

          {!isTouch && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.25s ease-out",
                clipPath: hovered
                  ? `circle(80px at ${mousePos.x}% ${mousePos.y}%)`
                  : `circle(0px at 50% 50%)`,
              }}
            >
              <Image
                src="/robotic.png"
                alt="Robotic Portrait"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* =========================
          DESKTOP TEXT LEFT
      ========================= */}
      <div className="hidden md:block absolute bottom-10 left-20 max-w-md z-10">
        <h2 className="text-lg font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
          Building Scalable & Real-World Web Applications
        </h2>

        <p className="text-sm mt-1 text-gray-500">
         I am a Java Full Stack Developer with 2.4 years of experience in designing, developing, and deploying scalable web applications using modern technologies.

          I specialize in building secure and high-performance backend systems using Java, Spring Boot, Spring Security, Hibernate, and Microservices architecture, along with developing responsive frontend applications using React.js, JavaScript, HTML5, and CSS3.

          I have hands-on experience in RESTful API development, database design, and cloud deployment using AWS and CI/CD pipelines, with a strong focus on clean code, performance optimization, and delivering production-ready solutions.
        </p>
      </div>

      {/* =========================
          DESKTOP TEXT RIGHT
      ========================= */}
      <div className="hidden md:block absolute bottom-20 right-20 text-right z-10">
        <p className="text-sm text-gray-500">
          <span className="text-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Software Engineer
          </span>

          <br />

          React.js • JavaScript • JAVA • Spring Boot • MySQL
        </p>
      </div>
    </section>
  );
}