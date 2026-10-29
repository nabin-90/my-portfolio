
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { socialLinks, projects } = portfolioData;

  return (
    <section id="contact" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Get In Touch
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Connect &amp; Collaborate
          </h2>

          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Have a project idea or collaboration opportunity? Explore my
            projects, connect with me on LinkedIn, or send me an email.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: GitHub & Contact Channels */}
          <div className="space-y-6 lg:col-span-6">
            {/* GitHub Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                  🐙
                </span>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    GitHub Profile
                  </h3>
                  <p className="text-sm text-slate-400">
                    Explore My Code & Projects
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Explore my source code, review my projects, and follow my
                journey as a web developer.
              </p>

              <div className="mt-6">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
                >
                  Visit My GitHub ↗
                </a>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-sm font-semibold tracking-wide text-slate-200">
                Contact Information
              </h3>

              <div className="mt-4 space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4 transition hover:border-blue-500/40"
                >
                  <span className="text-xl">✉️</span>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      Email
                    </p>
                    <p className="break-all text-sm text-slate-400">
                      {socialLinks.email}
                    </p>
                  </div>

                  <span className="ml-auto text-blue-400">↗</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4 transition hover:border-blue-500/40"
                >
                  <span className="text-xl">💼</span>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      LinkedIn
                    </p>
                    <p className="text-sm text-slate-400">
                      Connect professionally
                    </p>
                  </div>

                  <span className="ml-auto text-blue-400">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Repositories */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Project Repositories
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Explore the source code of my featured projects.
              </p>

              <div className="mt-5 space-y-3">
                {projects.map((project) => (
                  <a
                    key={project.slug}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-800/50 p-4 transition hover:border-blue-500/40 hover:bg-slate-800/80"
                  >
                    <div className="min-w-0">
                      <h4 className="font-semibold text-white">
                        {project.title}
                      </h4>

                      <p className="mt-1 text-xs text-slate-400">
                        {project.technologies.slice(0, 3).join(" • ")}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-blue-400">
                      View Repo ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
