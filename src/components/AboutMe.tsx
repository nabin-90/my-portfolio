import { portfolioData } from "@/data/portfolio";

export default function AboutMe() {
  const { personalInfo } = portfolioData;
  const { about } = personalInfo;

  return (
    <section id="about" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Background &amp; Journey
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Narrative Story */}
          <div className="space-y-5 lg:col-span-7">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Info Cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {about.highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-blue-500/40 hover:bg-slate-900"
              >
                <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                  {item.label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.value}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

