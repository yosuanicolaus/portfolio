export function AboutMe() {
  return (
    <div className="xl:mx-36 lg:mx-24 md:mx-16 sm:mx-8 mt-32">
      <section className="lg:text-4xl lg:mb-20 xl:mb-24 sm:text-3xl text-2xl mt-16">
        <div tabIndex={0} className="collapse group">
          <div className="collapse-title hover:bg-gray-100 group-focus:bg-primary group-focus:text-primary-content">
            About Me
          </div>
          <div className="collapse-content bg-gray-100 group-focus:bg-primary group-focus:text-primary-content text-lg sm:text-xl lg:text-2xl grid gap-2">
            <p>
              Hey there, I'm Yosua Nicolaus, a self-taught web developer from
              Indonesia with a passion for creating engaging web applications.
              My journey in web development started with The Odin Project, and
              since then, I've been building a variety of personal projects that
              go beyond what I learned in the course.
            </p>
            <p>
              Before pursuing web development, I was a jazz pianist who also
              enjoyed music composition for fun. My curiosity about game
              development led me to programming, and I haven't looked back
              since.
            </p>
            <p>
              As an aspiring frontend developer, I'm proficient in using React
              and Tailwind CSS to build responsive and visually appealing web
              applications. I'm also skilled in TypeScript, Python, and other
              languages and frameworks.
            </p>
            <p>
              When I'm not coding, you can usually find me playing piano,
              watching YouTube videos, or brainstorming new project ideas. I'm
              always on the lookout for exciting collaboration opportunities and
              would love to connect with other developers and creatives. Let's
              build something great together!
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

        <div className="collapse group" tabIndex={0}>
          <div className="collapse-title hover:bg-gray-100 group-focus:bg-accent group-focus:text-accent-content">
            Learning Resources
          </div>
          <div className="collapse-content bg-gray-100 group-focus:bg-accent group-focus:text-accent-content text-lg sm:text-xl lg:text-2xl">
            <ul className="list-none grid gap-2">
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">The Odin Project</div>
                <div>
                  This is where I learned the most about web development basics.
                  I love learning by building complex projects and figuring out
                  solutions through online resources like Stack Overflow and
                  documentation.
                </div>
              </li>
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">Youtube and Reddit</div>
                <div>
                  I often browse these platforms to keep up to date with the
                  latest technology news and tutorials. I'm subscribed to
                  various tech YouTubers who provide valuable insights and
                  knowledge.
                </div>
              </li>
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">Books</div>
                <div>
                  I enjoy reading books to deepen my understanding of
                  programming concepts. Recently, I've been reading "A Tour of
                  C++" to gain a high-level overview of the language. "Nature of
                  Code" by Daniel Shiffman is my personal favorite, as it
                  teaches how to simulate nature in code.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse group" tabIndex={0}>
          <div className="collapse-title hover:bg-gray-100 group-focus:bg-warning group-focus:text-warning-content">
            Personal Interests
          </div>
          <div className="collapse-content bg-gray-100 group-focus:bg-warning group-focus:text-warning-content text-lg sm:text-xl lg:text-2xl">
            <ul className="list-none grid gap-2">
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">Music</div>
                <div>
                  I enjoy playing the piano and occasionally composing music in
                  my free time.
                </div>
              </li>
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">
                  Neural Networks, Machine Learning, and AI
                </div>
                <div>
                  I am fascinated by the algorithms behind these technologies
                  and am eager to learn more about them.
                </div>
              </li>
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">
                  Coding Challenges/Competitive Programming
                </div>
                <div>
                  I find these challenges to be a fun and pure way to test my
                  problem-solving skills.
                </div>
              </li>
              <li className="hover:list-disc hover:ml-8">
                <div className="font-semibold">Building Projects</div>
                <div>
                  Above all, I love building projects. It's the most effective
                  way for me to learn and grow my skills, and it allows me to
                  bring my ideas to life.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
