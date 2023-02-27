export function Footer() {
  const links: { link: string; color: string; svgPath: string }[] = [
    {
      link: "mailto:yosuanicolaus@gmail.com",
      color: "bg-red-500",
      svgPath:
        "M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z",
    },
    {
      link: "https://github.com/yosuanicolaus",
      color: "bg-gray-800",
      svgPath:
        "M16 .395c-8.836 0-16 7.163-16 16 0 7.07 4.585 13.067 10.942 15.182.8.148 1.094-.347 1.094-.77 0-.38-.015-1.642-.022-2.98-4.452.97-5.39-1.887-5.39-1.887-.73-1.85-1.777-2.34-1.777-2.34-1.452-.994.11-.974.11-.974 1.606.113 2.452 1.65 2.452 1.65 1.426 2.445 3.742 1.738 4.655 1.33.143-1.035.558-1.74 1.016-2.14-3.553-.405-7.29-1.778-7.29-7.908 0-1.747.626-3.174 1.65-4.295-.166-.403-.714-2.03.155-4.234 0 0 1.344-.43 4.4 1.64 1.277-.356 2.646-.533 4.006-.54 1.36.006 2.73.184 4.01.54 3.053-2.07 4.394-1.64 4.394-1.64.87 2.203.323 3.83.157 4.233 1.027 1.12 1.648 2.548 1.648 4.295 0 6.145-3.743 7.498-7.306 7.895.574.497 1.085 1.47 1.085 2.963 0 2.14-.02 3.864-.02 4.39 0 .427.29.926 1.1.77C27.42 29.455 32 23.46 32 16.395c0-8.838-7.164-16-16-16z",
    },
    {
      link: "https://www.linkedin.com/in/yosuanicolaus",
      color: "bg-blue-400",
      svgPath:
        "M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z",
    },
  ];
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={400}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full mt-20"
      >
        <polygon points="0,15 100,0 100,100 0,100" className="fill-gray-200" />
      </svg>
      <div className="bg-gray-200 h-[400px] flex justify-center items-start gap-8">
        {links.map(({ color, link, svgPath }, idx) => (
          <a
            target="_blank"
            href={link}
            className={
              "relative aspect-square rounded hover:bg-opacity-100 bg-opacity-0 transition " +
              color
            }
            key={"a-" + link}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={idx != 2 ? "0 0 32 32" : "0 0 128 128"}
              className="md:m-12 m-8 opacity-100 z-20 w-16 h-16 md:w-24 md:h-24"
            >
              <path fill="#fff" d={svgPath}></path>
            </svg>
          </a>
        ))}
      </div>
    </>
  );
}
