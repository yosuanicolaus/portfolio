import { projectData } from "./(ProjectData)";
import { ProjectProp } from "./(type)";

export function FeaturedProjects() {
  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 px-0 md:px-4 lg:px-12 xl:px-24 2xl:px-0">
      {projectData.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  );
}

function Project({ name, description, image, github, live }: ProjectProp) {
  return (
    <a
      target="_blank"
      href={live ? live : github}
      className="w-full border shadow relative"
    >
      <div className="absolute w-full h-64 lg:h-80 grid place-content-center hover:bg-green-700 hover:opacity-90 opacity-0 transition text-white">
        <h1 className="opacity-100 font-bold text-lg text-center">{name}</h1>
        <div className="mx-8">{description}</div>
      </div>
      <img className="object-cover h-64 w-full lg:h-80" src={image}></img>
    </a>
  );
}
