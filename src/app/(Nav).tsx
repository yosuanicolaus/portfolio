export function Nav() {
  return (
    <nav className="flex p-8">
      <a
        href="Yosua_Nicolaus_Resume.pdf"
        download="Yosua_Nicolaus_Resume.pdf"
        className="text-xl font-thin hover:text-green-600 transition"
      >
        Resume
      </a>
      <a
        href="#contact"
        className="text-xl font-thin hover:text-yellow-500 transition ml-auto"
      >
        Contact
      </a>
    </nav>
  );
}
