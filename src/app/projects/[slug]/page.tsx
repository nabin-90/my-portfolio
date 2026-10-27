import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData, type Project } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Mahmudun Nabin",
    };
  }

  return {
    title: `${project.title} - Project Details | Mahmudun Nabin`,
    description: project.summary,
  };
}

function ProjectBanner({ project }: { project: Project }) {
  if (project.image && project.imageWidth && project.imageHeight) {
    return (
      <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 md:p-10">
        <Image
          src={project.image}
          alt={`${project.title} Banner`}
          width={project.imageWidth}
          height={project.imageHeight}
          priority
          className="max-h-[380px] w-auto rounded-xl object-contain shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-[260px] w-full flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 select-none">
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-xs text-slate-400">
          {project.slug}.workspace
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <span className="text-5xl">🏋️‍♂️</span>
        <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-400">
          Interactive Fitness &amp; Workout Tracker Application
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-slate-700/50 pt-3 text-xs text-slate-400">
        <span className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1">
          Next.js App Router Architecture
        </span>
        <span className="text-emerald-400">Verified Repository Source</span>
      </div>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      <Navbar />

      <article className="mx-auto max-w-5xl px-5 py-12 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-blue-400"
          >
            ← Back to Featured Projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {project.summary}
          </p>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Visit Live Demo ↗
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-600 hover:text-white"
            >
              GitHub Repository ↗
            </a>
          </div>
        </header>

        {/* Project Visual Banner */}
        <div className="mb-12">
          <ProjectBanner project={project} />
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Detailed Overview */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Project Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              {project.description}
            </p>
          </section>

          {/* Technologies Used */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Technologies &amp; Libraries
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-1.5 text-sm font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Verified Implemented Features */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Key Features
            </h2>
            <ul className="mt-6 space-y-3.5">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Considerations & Learnings */}
          {project.technicalPoints && project.technicalPoints.length > 0 && (
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Technical Considerations &amp; Architecture
              </h2>
              <ul className="mt-6 space-y-3.5">
                {project.technicalPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Planned Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Planned Future Improvements
              </h2>
              <ul className="mt-6 space-y-3.5">
                {project.futureImprovements.map((idea, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-slate-800 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:text-white"
          >
            ← Back to All Projects
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View on GitHub ↗
          </a>
        </div>
      </article>
    </main>
  );
}

