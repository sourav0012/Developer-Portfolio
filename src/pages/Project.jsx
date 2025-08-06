"use client";
import React from "react";
import { PinContainer } from "../components/PinContainer"; // adjust path as needed

const projects = [
  {
    title: "Project One",
    description: "Modern frontend project using Tailwind and Framer Motion.",
    href: "#",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    title: "https://smreactportfolio.netlify.app/",
    description: "Personal portfolio website built with React and Tailwind and GSAP.",
    href: "https://smreactportfolio.netlify.app/",
    target: "_blank",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Project Three",
    description: "Fullstack app with authentication and real-time updates.",
    href: "#",
    gradient: "from-green-500 via-lime-500 to-yellow-300",
  },
  {
    title: "Project Four",
    description: "Creative landing page designs with interactive effects.",
    href: "#",
    gradient: "from-purple-600 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Project Five",
    description: "Responsive dashboards built with Chart.js and Tailwind.",
    href: "#",
    gradient: "from-orange-500 via-amber-400 to-yellow-500",
  },
  {
    title: "Project Six",
    description: "Socket.io-based chat app with user presence tracking.",
    href: "#",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    title: "Project Seven",
    description: "Interactive 3D game built with Three.js and React.",
    href: "#",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
];

export default function Projects() {
  return (
    <section id="project" className="min-h-screen bg-black w-full py-24 px-4">
      <h2 className="text-white text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
        {projects.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {project.description}
                </span>
              </div>
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
