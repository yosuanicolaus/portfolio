import { projectData } from "./(ProjectData)";
import { ProjectProp } from "./(type)";

export function FeaturedProjects() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-24">
      {projectData.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  );
}

function Project({ name, description, image, github, live }: ProjectProp) {
  return (
    <div className="w-full border">
      <img className="object-cover h-80 w-full" src={image}></img>
      <div>{name}</div>
    </div>
  );
}
