import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="emerald">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className="flex border-b sticky top-0 p-4 bg-white shadow-sm z-20">
          <div className="w-8 h-8 bg-primary ml-auto rounded-full"></div>
        </nav>
        <>{children}</>
      </body>
    </html>
  );
}
