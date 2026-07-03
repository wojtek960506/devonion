import type { CVContent } from "./cv.types";
import { CvCollapsibleCard } from "./cv-collapsible-card";

type CvEducationProps = Readonly<{
  title: CVContent["educationTitle"];
  education: CVContent["education"];
}>;

export function CvEducation({ title, education }: CvEducationProps) {
  return (
    <CvCollapsibleCard title={title} defaultOpen>
      <article className="rounded-2xl border border-border bg-bg/70 p-4">
        <h3 className="text-xl font-semibold text-text">{education.title}</h3>
        <div className="mt-1 space-y-1 text-base text-text-muted">
          {education.rows.map((row) => (
            <p key={row.label}>
              <span className="font-semibold text-text">{row.label}:</span>{" "}
              {row.value}
            </p>
          ))}
        </div>

        <ul className="mt-4 space-y-2 text-base leading-6 text-text-muted">
          {education.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fg/70" />
              <span className="flex-1">{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </CvCollapsibleCard>
  );
}
