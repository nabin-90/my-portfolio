import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personalInfo, socialLinks } = portfolioData;

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8"
    >
      {/* Introduction */}
      <div>
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
          HELLO, I&apos;M
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {personalInfo.name}
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
          {personalInfo.title}
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-slate-400">
          {personalInfo.bio}
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            View My Projects ↗
          </a>

          {personalInfo.resume.isAvailable ? (
            <a
              href={personalInfo.resume.filePath}
              download
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              Download Resume ↓
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-6 py-3 font-semibold text-slate-400 select-none"
              title="Resume will be available once the PDF file is provided"
              aria-label="Resume coming soon"
            >
              Resume Coming Soon ⏳
            </span>
          )}
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              GitHub ↗
            </a>
          )}

          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>

      {/* Profile image */}
      <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
        <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-blue-500/20 to-slate-900 p-3 shadow-2xl">
          <Image
            src={personalInfo.image.src}
            alt={personalInfo.image.alt}
            width={personalInfo.image.width}
            height={personalInfo.image.height}
            priority
            className="aspect-[3/4] w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

