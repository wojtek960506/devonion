import type { CVContent } from "./cv.types";

type CvHighlightsProps = Readonly<{
  highlights: CVContent["highlights"];
}>;

export function CvHighlights({ highlights }: CvHighlightsProps) {
  return (
    <div className="grid gap-3 text-base font-bold sm:grid-cols-3">
      {highlights.map((highlight) => (
        <div
          key={highlight}
          className="rounded-2xl border border-border bg-bg px-4 py-3 text-text"
        >
          {highlight}
        </div>
      ))}
    </div>
  );
}
