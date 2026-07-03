import type { CVContent } from "./cv.types";
import { CvCollapsibleCard } from "./cv-collapsible-card";

type CvEducationProps = Readonly<{
  title: CVContent["educationTitle"];
  education: CVContent["education"];
}>;

export function CvEducation({ title, education }: CvEducationProps) {
  const periodRow = education.rows.find((row) => row.id === "period");
  const detailRows = education.rows.filter((row) => row.id !== "period");

  return (
    <CvCollapsibleCard title={title} defaultOpen>
      <article className="rounded-2xl border border-border bg-bg/70 p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-text">{education.title}</h3>
            <div className="mt-1 space-y-1 text-base text-text-muted">
              {detailRows.map((row) => (
                <p key={row.id}>
                  <span className="font-semibold text-text">{row.label}:</span>{" "}
                  {row.value}
                </p>
              ))}
            </div>
          </div>
          {periodRow ? (
            <p className="text-base font-medium text-text-muted">
              {periodRow.value}
            </p>
          ) : null}
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
