import { portfolioData } from "@/data/portfolio";

const footerNavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personalInfo, socialLinks } = portfolioData;

  return (
    <footer className="border-t border-slate-800 bg-[#090e1a] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand & Bio */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              NABIN<span className="text-blue-400">.</span>
            </a>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              {personalInfo.title} passionate about creating clean, modern, and
              responsive web interfaces.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row">
          <p className="text-center sm:text-left">
            © {currentYear} Mahmudun Nabin. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mahmudun Nabin's GitHub profile"
              className="font-medium transition hover:text-blue-400"
            >
              GitHub Profile ↗
            </a>

            <span
              className="hidden text-slate-600 sm:inline"
              aria-hidden="true"
            >
              •
            </span>

            <p className="text-center">Built with Next.js &amp; Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
