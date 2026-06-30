import { CvCollapsibleCard } from "./cv-collapsible-card";

type CvSummaryProps = Readonly<{
  title: string;
  summaryPoints: string[];
}>;

export function CvSummary({ title, summaryPoints }: CvSummaryProps) {
  return (
    <CvCollapsibleCard title={title} defaultOpen>
      <div className="grid gap-3 text-base font-bold sm:grid-cols-3">
        {summaryPoints.map((point) => (
          <div
            key={point}
            className="rounded-2xl border border-border bg-bg px-4 py-3 text-text"
          >
            {point}
          </div>
        ))}
      </div>
    </CvCollapsibleCard>
  );
}
