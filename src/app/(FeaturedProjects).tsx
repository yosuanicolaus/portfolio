import { dummyData } from "./(ProjectData)";
import { ProjectProp } from "./(type)";

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {dummyData.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
}

function Project({ name, description, image, gif, github, live }: ProjectProp) {
  return (
    <div key={name} className="w-full border">
      <div>{name}</div>
    </div>
  );
}
