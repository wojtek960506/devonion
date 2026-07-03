import { CvCollapsibleCard } from "./cv-collapsible-card";

type CvSummaryProps = Readonly<{
  title: string;
  summaryParagraphs: string[];
}>;

export function CvSummary({ title, summaryParagraphs }: CvSummaryProps) {
  return (
    <CvCollapsibleCard title={title} defaultOpen>
      <div className="space-y-3 text-sm leading-7 text-text-muted sm:text-base">
        {summaryParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="rounded-2xl border border-border bg-card-bg px-4 py-3 text-text-muted"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </CvCollapsibleCard>
  );
}
