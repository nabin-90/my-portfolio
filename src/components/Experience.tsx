import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Practical Learning &amp; Projects
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            I currently have no commercial work experience. I am actively
            dedicated to continuous learning and building personal web projects.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 transition hover:border-slate-700"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {item.focus}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  Hands-On Practice
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.description.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

