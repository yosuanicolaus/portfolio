import { AboutMe } from "./(AboutMe)";
import { FeaturedProjects } from "./(FeaturedProjects)";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="xl:mx-36 lg:mx-24 md:mx-16 sm:mx-8 my-8">
        <section id="hi">
          <div className="lg:text-4xl sm:text-3xl text-2xl my-4 font-bold">
            Hello.
          </div>
        </section>
        <section className="mr-8">
          <div className="lg:text-4xl sm:text-3xl text-2xl mb-8">
            I'm <b>Yosua Nicolaus</b>, a self-taught frontend developer based in
            Sydney, Australia. I <b>love</b> to build <b>projects</b> and{" "}
            <b>learn</b> something new.
          </div>
        </section>
        <section>
          <div className="lg:text-4xl lg:mb-20 xl:mb-24 sm:text-3xl text-2xl mb-16">
            I enjoy creating <b>complex</b> software from <b>scratch</b>. Take a
            look at some of my projects:
          </div>
        </section>
      </div>
      <FeaturedProjects />
      <AboutMe />
    </div>
  );
}
