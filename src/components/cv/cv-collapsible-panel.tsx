import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type CvCollapsiblePanelProps = Readonly<{
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
}>;

export function CvCollapsiblePanel({
  title,
  defaultOpen = true,
  children,
  className,
}: CvCollapsiblePanelProps) {
  return (
    <details
      open={defaultOpen}
      className={["group min-w-0", className].filter(Boolean).join(" ")}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-2 py-2 transition-colors hover:bg-bg hover:text-text group-open:bg-bg/70 [&::-webkit-details-marker]:hidden">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition-colors group-hover:text-text group-open:text-text">
          {title}
        </h2>
        <span className="shrink-0 text-text-muted transition-all duration-200 group-hover:text-text group-open:rotate-180 group-open:text-text">
          <ChevronDown className="size-4" aria-hidden="true" />
        </span>
      </summary>
      <div className="pt-3">{children}</div>
    </details>
  );
}
