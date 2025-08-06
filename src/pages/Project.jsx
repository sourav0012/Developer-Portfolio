"use client";
import React from "react";
import { PinContainer } from "../components/PinContainer"; // Adjust path as needed

const projects = [
  {
    title: "Project One",
    linkText: "Visit Project →",
    description: "Modern frontend project using Tailwind and Framer Motion.",
    href: "https://example.com/project-one",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    title: "My Portfolio",
    linkText: "See Portfolio →",
    description: "Personal portfolio website built with React, Tailwind, and GSAP.",
    href: "https://smreactportfolio.netlify.app/",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Realtime App",
    linkText: "Try it Live →",
    description: "Fullstack app with authentication and real-time updates.",
    href: "https://example.com/realtime-app",
    gradient: "from-green-500 via-lime-500 to-yellow-300",
  },
];

export default function Projects() {
  return (
    <section id="project" className="min-h-screen bg-black w-full py-24 px-4">
      <h2 className="text-white text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
        {projects.map((project, index) => (
          <PinContainer
            key={index}
            title={project.title}
            linkText={project.linkText}
            href={project.href}
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative group">
              {/* Card title */}
              <h3 className="max-w-xs font-bold text-base text-slate-100">
                {project.title}
              </h3>

              {/* Description */}
              <div className="text-base mt-2 font-normal text-slate-500">
                {project.description}
              </div>

              {/* Gradient bar */}
              <div
                className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`}
              />
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}
