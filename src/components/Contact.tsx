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
            Have questions about my projects or interested in collaborating? You
            can find my code repositories, follow updates, or reach out on
            GitHub.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Primary Contact & Status */}
          <div className="space-y-6 lg:col-span-6">
            {/* GitHub Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 transition hover:border-slate-700">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                  🐙
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    GitHub Profile
                  </h3>
                  <p className="text-sm text-slate-400">
                    Primary Developer Hub
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Explore all of my source code, inspect my commit history, open
                issues, and track ongoing personal projects on GitHub.
              </p>

              <div className="mt-6">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
                >
                  Visit @nabin-90 on GitHub ↗
                </a>
              </div>
            </div>

            {/* Direct Contact Status Notice */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Direct Contact Channels
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Direct personal channels (such as dedicated email address and
                LinkedIn profile) are currently pending confirmation and will be
                activated here soon. For any immediate correspondence, please
                reach out through GitHub discussions or repository issues.
              </p>
            </div>
          </div>

          {/* Right Column: Repositories & Form Technical Note */}
          <div className="space-y-6 lg:col-span-6">
            {/* Project Repositories Quick Links */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Project Repositories
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Jump directly to the repositories of the featured projects:
              </p>

              <div className="mt-5 space-y-3">
                {projects.map((project) => (
                  <a
                    key={project.slug}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/50 p-4 transition hover:border-blue-500/40 hover:bg-slate-800/80"
                  >
                    <div>
                      <h4 className="font-semibold text-white">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {project.technologies.slice(0, 3).join(" • ")}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-blue-400">
                      Repo ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Note on Functional Contact Form */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 text-xs leading-relaxed text-slate-400">
              <p className="font-semibold text-slate-300">
                💡 Contact Form Integration
              </p>
              <p className="mt-1">
                To keep this portfolio transparent and prevent non-functional
                placeholders, an automated submission form is not simulated. To
                receive form messages directly in your inbox, an email delivery
                service (e.g. Resend, EmailJS, or a Next.js API route with
                Nodemailer) can be connected when ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

