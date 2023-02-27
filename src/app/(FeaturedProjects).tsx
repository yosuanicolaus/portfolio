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
    <div className="w-full border shadow">
      <img className="object-cover h-64 w-full lg:h-80" src={image}></img>
    </div>
  );
}
