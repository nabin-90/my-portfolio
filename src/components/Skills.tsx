import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Technical Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies &amp; Tools
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            The core web technologies, frontend frameworks, and developer tools
            I work with to build responsive web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 transition hover:border-slate-700"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-500/50 hover:bg-slate-800 hover:text-white"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

