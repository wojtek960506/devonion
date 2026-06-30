import type { ReactNode } from "react";

import { CvCollapsiblePanel } from "./cv-collapsible-panel";

type CvCollapsibleCardProps = Readonly<{
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}>;

export function CvCollapsibleCard({
  title,
  defaultOpen = true,
  children,
}: CvCollapsibleCardProps) {
  return (
    <section className="rounded-3xl border border-border bg-bg/70 p-4 sm:p-5">
      <CvCollapsiblePanel title={title} defaultOpen={defaultOpen}>
        {children}
      </CvCollapsiblePanel>
    </section>
  );
}
