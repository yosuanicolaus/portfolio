export function AboutMe() {
  return (
    <div className="xl:mx-36 lg:mx-24 md:mx-16 sm:mx-8 my-8">
      <section className="lg:text-4xl lg:mb-20 xl:mb-24 sm:text-3xl text-2xl mt-16">
        <div tabIndex={0} className="collapse group">
          <div className="collapse-title hover:bg-gray-100 group-focus:bg-primary group-focus:text-primary-content">
            About Me
          </div>
          <div className="collapse-content bg-gray-100 group-focus:bg-primary group-focus:text-primary-content text-lg sm:text-xl lg:text-2xl">
            <p>
              Hey, I'm Yosua Nicolaus, a self-taught web developer from
              Indonesia. I discovered my love for web development through The
              Odin Project and have since built a variety of personal projects
              that go beyond what I learned in the course.
            </p>
            <p>
              Before embarking on my journey as a web developer, I was a jazz
              pianist who dabbled in music composition for fun. However, my
              curiosity about game development led me to programming, and I
              haven't looked back since.
            </p>

            <p>
              I love using my programming skills to bring creative ideas to
              life. When I'm not coding, you can usually find me playing piano,
              watching youtube videos, or brainstorming new project ideas. I'm
              always on the lookout for exciting collaboration opportunities and
              would love to connect with other developers and creatives. Thanks
              for stopping by!
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse group">
          <div className="collapse-title hover:bg-gray-100 group-focus:bg-secondary group-focus:text-secondary-content">
            Languages and Tools
          </div>
          <div className="collapse-content bg-gray-100 group-focus:bg-secondary group-focus:text-secondary-content text-lg sm:text-xl lg:text-2xl">
            <ul className="list-none">
              <li className="hover:list-disc hover:ml-8">HTML, CSS</li>
              <li className="hover:list-disc hover:ml-8">
                JavaScript, TypeScript
              </li>
              <li className="hover:list-disc hover:ml-8">
                Python, C#, C++, Ruby
              </li>
              <li className="hover:list-disc hover:ml-8">React, NextJS</li>
              <li className="hover:list-disc hover:ml-8">
                Bootstrap, Tailwind
              </li>
              <li className="hover:list-disc hover:ml-8">
                NodeJS, Express, Rails
              </li>
              <li className="hover:list-disc hover:ml-8">
                MongoDB, Firebase, MySQL
              </li>
              <li className="hover:list-disc hover:ml-8">Godot, GDScript</li>
              <li className="hover:list-disc hover:ml-8">
                VsCode(+NeoVim), Bash, Git, Linux
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
