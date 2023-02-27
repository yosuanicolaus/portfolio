import { dummyData } from "./(ProjectData)";
import { ProjectProp } from "./(type)";

export function FeaturedProjects() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-24">
      {dummyData.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </div>
  );
}

function Project({ name, description, image, gif, github, live }: ProjectProp) {
  return (
    <div className="w-full border">
      <img width="1280" height="720" src={image}></img>
      <div>{name}</div>
    </div>
  );
}
