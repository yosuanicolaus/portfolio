import { FeaturedProjects } from "./(FeaturedProjects)";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <nav className="flex border-b sticky">
        <div className="w-8 h-8 bg-primary ml-auto rounded-full mb-4"></div>
      </nav>
      <section id="hi">
        <div className="text-3xl my-4 font-bold">Hello.</div>
      </section>
      <section className="mr-8">
        <div className="text-3xl mb-4">
          I'm <b>Yosua Nicolaus</b>, a self-taught frontend developer based in
          Sydney, Australia. I <b>love</b> to build <b>projects</b> and{" "}
          <b>learn</b> something new.
        </div>
      </section>
      <section>
        <div className="text-3xl mb-4">
          I enjoy creating <b>complex</b> software from <b>scratch</b>. Take a
          look at some of my projects:
        </div>
      </section>
      <hr className="my-8" />
      <FeaturedProjects />
    </div>
  );
}
