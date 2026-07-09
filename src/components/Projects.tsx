"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ProjectCard({
  title,
  year,
  type,
  description,
  tech,
  image,
  live,
  github,
  placeholder = false,
}: {
  title: string;
  year: string;
  type: string;
  description: string;
  tech?: string[];
  image?: string;
  live?: string;
  github?: string;
  placeholder?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col p-4 md:p-2 md:flex-row min-h-80 md:h-full rounded-3xl overflow-hidden bg-white/4 border border-white/10 backdrop-blur-xl"
    >
      {/* CONTENT */}
      <div className="flex flex-col justify-between md:p-4 md:w-1/2">
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full border border-orange text-orange-400">
            {year} · {type}
          </span>

          <h3 className="text-2xl md:text-3xl font-semibold mb-3 bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>

          {tech && (
            <div className="flex flex-wrap gap-2 mt-5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {!placeholder && (
          <div className="flex gap-3 mt-6">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-circle"
              >
                ↗
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-circle"
              >
                <i className="devicon-github-original text-[20px]" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* IMAGE */}
      {!placeholder && image && (
      <div className="relative w-full h-80 md:h-[480px] flex items-center justify-center p-3">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative md:pt-10 md:pb-10 bg-black overflow-hidden scroll-mt-30"
    >
      {/* HEADING */}
      <div
        className={`
          absolute inset-x-0 top-0 flex justify-center pointer-events-none
          transition-all duration-1000 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <h2
          className="text-[4rem] sm:text-[5rem] md:text-[5.5rem] font-extrabold tracking-widest bg-linear-to-b from-white/15 to-white/5 bg-clip-text text-transparent select-none"
        >
          PROJECTS
        </h2>
      </div>

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto mt-28 sm:mt-32 grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-10 px-6 pb-10"
      >

        {/* -------project 2------- */}


        <div
          className={`transition-all duration-1000 ease-out delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="Hospital Management & Appointment System"
            year="2026"
            type="Desktop Application"
            description="Developed a scalable Hospital Management & Appointment System that streamlines patient record management,
                doctor scheduling, appointment booking, and billing workflows for hospitals and clinics. Architected a secure
                Single Page Application (SPA) integrating a React frontend with a Spring Boot backend, serving patients, doctors,
                and administrative staff through role-based dashboards. Contributed across the full stack, from UI design to secure
                API development and database integration."
            tech={[
              "React.js",
              "Redux",
              "JavaScript",
              "ES6+",
              "Tailwind CSS",
              "Bootstrap",
              "HTML5",
              "CSS3",
              "Java",
              "Spring Boot",
              "Hibernate",
              "RESTful API's",
              "AWS",
              "MySQL"
            ]}
            image="/hospitalproject2.png"
          />
        </div>

         {/* -------project 2------- */}

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="Retail E-Commerce Management Platform"
            year="2025"
            type="E-Commerce Application"
            description="Built a responsive Retail E-Commerce Management Platform enabling customers to browse products, manage
            carts, and place orders while empowering administrators to control catalog and order fulfillment. Serving online
            shoppers and retail operations teams, the candidate contributed across the full stack, delivering React-based
            interfaces and Spring Boot APIs that unified the shopping and admin experiences"
            tech={[
              "React.js",
              "Redux",
              "JavaScript",
              "ES6+",
              "Tailwind CSS",
              "Bootstrap",
              "HTML5",
              "CSS3",
              "Java",
              "Spring Boot",
              "Hibernate",
              "RESTful API's",
              "AWS",
              "MySQL"
            ]}
            image="/retail-ecommerce-project.png"
          />
        </div>

        
      </div>
    </section>
  );
}