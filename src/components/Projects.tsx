import Image from "next/image";
import Link from "next/link";
import { portfolioData, type Project } from "@/data/portfolio";

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image && project.imageWidth && project.imageHeight) {
    return (
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950/70 p-3">
        <Image
          src={project.image}
          alt={`${project.title} Preview`}
          width={project.imageWidth}
          height={project.imageHeight}
          className="max-h-full max-w-full rounded-lg object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  // Consistent CSS-based visual placeholder when no screenshot exists
  return (
    <div className="flex h-52 w-full flex-col justify-between rounded-xl border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900 p-5 select-none transition duration-300 group-hover:border-blue-500/40">
      <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-xs text-slate-400">
          {project.slug}.app
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-2 text-center">
        <span className="text-3xl">🏋️‍♂️</span>
        <p className="mt-2 text-sm font-semibold text-slate-200">
          {project.title}
        </p>
        <p className="mt-0.5 text-xs text-slate-400">
          Workout Tracking &amp; Plan Manager
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-slate-700/40 pt-2 text-[11px] text-slate-400">
        <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5">
          Local Storage
        </span>
        <span className="text-blue-400">Interactive UI</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Real projects built with modern frontend and full-stack technologies,
            featuring clean code, responsive layouts, and practical functionality.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:border-slate-700 hover:bg-slate-900/90"
            >
              <div>
                {/* Thumbnail */}
                <ProjectThumbnail project={project} />

                {/* Title & Description */}
                <h3 className="mt-5 text-xl font-bold text-white transition group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="rounded-md border border-slate-800 bg-slate-800/40 px-2 py-1 text-xs text-slate-400">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600/90 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  View Details →
                </Link>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 transition hover:text-blue-400"
                  >
                    GitHub Repo ↗
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="text-slate-500">Live Demo (Pending)</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

