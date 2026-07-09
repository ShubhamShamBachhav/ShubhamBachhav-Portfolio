"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const FRONTEND = [
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "JavaScript (ES6+)", icon: "devicon-javascript-plain" },
  { name: "React.js", icon: "devicon-react-original" },
  { name: "Redux Toolkit", icon: "devicon-redux-original" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "jQuery", icon: "devicon-jquery-plain" },
  { name: "Axios", icon: "devicon-axios-plain" }, 
  { name: "Responsive Design", icon: "devicon-css3-plain" }, 
  { name: "Single Page Application (SPA)", icon: "devicon-react-original" },
  { name: "Component-Based Architecture", icon: "devicon-react-original" }, 
];

const STATE_BACKEND = [
  { name: "Java", icon: "devicon-java-plain" },
  { name: "Spring Boot", icon: "devicon-spring-plain" },
  { name: "Spring MVC", icon: "devicon-spring-plain" }, 
  { name: "Spring Security", icon: "devicon-spring-plain" }, 
  { name: "Hibernate", icon: "devicon-hibernate-plain" },
  { name: "JPA", icon: "devicon-java-plain" }, 
  { name: "Microservices", icon: "devicon-java-plain" }, 
  { name: "REST APIs", icon: "devicon-java-plain" }, 
  { name: "JWT Authentication", icon: "devicon-java-plain" }, 
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Spring Data JPA", icon: "devicon-spring-plain" }, 
  { name: "API Integration", icon: "devicon-java-plain" }, 
  { name: "Exception Handling", icon: "devicon-java-plain" }, 
];

const TOOLS = [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Eclipse", icon: "devicon-eclipse-plain colored" },
  { name: "Maven", icon: "devicon-apache-plain" },
  { name: "Postman", icon: "devicon-postman-plain" },
  { name: "JUnit", icon: "devicon-java-plain" }, 
  { name: "Jest", icon: "devicon-jest-plain" }, 
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" }, 
  { name: "CI/CD", icon: "devicon-githubactions-plain" }, 
   { name: "Apache Tomcat", icon: "devicon-apache-plain" },
  { name: "Spring Initializr", icon: "devicon-spring-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },
  { name: "Agile/Scrum", icon: "devicon-jira-plain" }, 
  { name: "Integration Testing", icon: "devicon-java-plain" },
];
//----------------------


function Marquee({
  items,
  reverse = false,
}: {
  items: { name: string; icon?: string; src?: string; }[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden group">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10" />

      <div
        className={`marquee-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((item, i) => (
          <SkillPill key={`a-${i}`} item={item} />
        ))}
        {items.map((item, i) => (
          <SkillPill key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({
  item,
}: {
  item: { name: string; icon?: string; src?: string; };
}) {
  return (
    <div
      className="flex items-center gap-4 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl bg-white/4 border border-white/40 backdrop-blur-xl text-gray-200 whitespace-nowrap"
    >
      {item.src ?
        <Image src={item.src} alt={item.name} width={24} height={24} />
        :
        <i className={`${item.icon} colored text-xl sm:text-2xl`} />
      }
      <span className="text-xs sm:text-sm font-medium">{item.name}</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(
        Math.max(1 - rect.top / window.innerHeight, 0),
        1
      );

      setScrollOffset(progress * 10);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative pt-30 pb-10 sm:pt-10 sm:pb-14 md:pt-10 md:pb-10 bg-black overflow-hidden"
    >
      {/* BACKGROUND HEADING */}
      <div className="relative flex items-center justify-center mb-10">
        <h2 className="text-[4.5rem] sm:text-[5rem] md:text-[7rem] font-extrabold tracking-widest bg-linear-to-b from-white/15 to-white/5 bg-clip-text text-transparent select-none">
          SKILLS
        </h2>
      </div>

      {/* MARQUEES */}
      <div
        className={`relative z-10 w-full mx-auto mt-24 sm:mt-32 md:mt-20 space-y-8 sm:space-y-10 md:space-y-12 transition-all duration-1000 ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} `}
        style={{ transform: `translateY(${inView ? -scrollOffset : 16}px)` }}
      >
        <Marquee items={FRONTEND} />
        <Marquee items={STATE_BACKEND} reverse />
        <Marquee items={TOOLS} />
      </div>
    </section>
  );
}
