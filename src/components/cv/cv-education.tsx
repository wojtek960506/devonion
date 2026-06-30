import type { CVContent } from "./cv.types";

type CvEducationProps = Readonly<{
  title: CVContent["educationTitle"];
  education: CVContent["education"];
}>;

export function CvEducation({ title, education }: CvEducationProps) {
  return (
    <section className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {title}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-text">{education.title}</h3>
      <p className="mt-1 text-sm text-text-muted">
        {education.institution} | {education.period}
      </p>

      <ul className="mt-4 space-y-2 text-sm leading-6 text-text-muted">
        {education.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fg/70" />
            <span className="flex-1">{bullet}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
