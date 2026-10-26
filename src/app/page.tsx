import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      <Navbar />

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
            Mahmudun Nabin
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Web Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I am passionate about building modern and responsive web
            applications using JavaScript, TypeScript, React, and Next.js. I
            enjoy solving problems, learning new technologies, and turning ideas
            into useful digital experiences.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              View My Projects ↗
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              Download Resume ↓
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/nabin-90"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-blue-500/20 to-slate-900 p-3 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Mahmudun Nabin - Web Developer"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
