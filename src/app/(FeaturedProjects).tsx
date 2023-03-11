"use client";
import { useState } from "react";
import { SvgProductGithub, SvgProductLive } from "./(assets)";
import { projectData } from "./(ProjectData)";
import { ProjectProp } from "./(type)";

export function FeaturedProjects() {
  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 px-0 md:px-4 lg:px-12 xl:px-24 2xl:px-0">
      {projectData &&
        projectData.map((project) => (
          <Project {...project} key={project.name} />
        ))}
    </div>
  );
}

function Project({ name, description, image, github, live }: ProjectProp) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="w-full border shadow relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="absolute w-full h-64 lg:h-80 flex justify-center items-center">
        <div className="absolute grid place-content-center opacity-50 hover:opacity-100 text-opacity-50 hover:text-opacity-100 transition text-white z-20 select-none">
          <h1 className="opacity-100 font-bold text-lg text-center">{name}</h1>
          <div className="mx-3 md:mx-8 text-sm md:text-base">{description}</div>
        </div>
        <div
          className="bg-green-700 transition h-64 w-[1000px] lg:h-80 flex justify-center items-center"
          style={{ opacity: active ? 0.9 : 0 }}
        >
          <SvgProductGithub />
          <a
            href={github}
            target="_blank"
            className="absolute bottom-0 text-white underline opacity-75 hover:opacity-100"
          >
            Github
          </a>
        </div>
        {live && (
          <div
            className="transition h-64 w-[1000px] lg:h-80 bg-blue-500 flex justify-center items-center"
            style={{ opacity: active ? 0.9 : 0 }}
          >
            <SvgProductLive />
            <a
              href={live}
              target="_blank"
              className="absolute bottom-0 text-white underline opacity-75 hover:opacity-100"
            >
              Live Website
            </a>
          </div>
        )}
      </div>
      <img className="object-cover h-64 w-full lg:h-80" src={image}></img>
    </div>
  );
}
