import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex p-8">
      <a
        href={"/yosua-nicolaus-resume.pdf"}
        download="yosua-nicolaus-resume.pdf"
        className="text-xl font-thin hover:text-green-800 transition hover:underline"
      >
        Resume
      </a>
      <div className="w-8 h-8 ml-auto rounded-full bg-primary"></div>
    </nav>
  );
}
