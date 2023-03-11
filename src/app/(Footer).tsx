import {
  FooterLinkEmail,
  FooterLinkGithub,
  FooterLinkLinkedIn,
  SvgFooterTop,
} from "./(assets)";

export function Footer() {
  return (
    <>
      <SvgFooterTop />
      <div
        className="bg-gray-200 h-[400px] flex justify-center items-start content-start gap-8 flex-wrap"
        id="contact"
      >
        <FooterLinkEmail />
        <FooterLinkGithub />
        <FooterLinkLinkedIn />
      </div>
      <div className="text-center bg-gray-200 text-lg font-thin">
        <div>
          <a
            href="https://github.com/yosuanicolaus/portfolio"
            target="_blank"
            className="hover:text-green-600 transition"
          >
            &copy; copyright Yosua Nicolaus 2023
          </a>
        </div>
        <div>
          <a href="#" className="hover:text-white transition">
            Back to Top
          </a>
        </div>
      </div>
    </>
  );
}
