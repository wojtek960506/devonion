import type { ReactNode } from "react";

import { Collapsible } from "@/components/ui/collapsible";

import {
  CV_COLLAPSIBLE_CARD_CLASS_NAME,
  CV_COLLAPSIBLE_CONTENT_CLASS_NAME,
  CV_COLLAPSIBLE_TRIGGER_CLASS_NAME,
} from "./cv-collapsible-classes";

type CvCollapsibleCardProps = Readonly<{
  title: string;
  defaultOpen?: boolean;
  indicatorPosition?: "left" | "right";
  children: ReactNode;
}>;

export function CvCollapsibleCard({
  title,
  defaultOpen = true,
  indicatorPosition = "left",
  children,
}: CvCollapsibleCardProps) {
  return (
    <div className={CV_COLLAPSIBLE_CARD_CLASS_NAME}>
      <Collapsible
        header={
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
            {title}
          </span>
        }
        indicatorPosition={indicatorPosition}
        triggerMode="full-row"
        isInitiallyOpen={defaultOpen}
        contentInset="none"
        triggerClassName={CV_COLLAPSIBLE_TRIGGER_CLASS_NAME}
        contentClassName={CV_COLLAPSIBLE_CONTENT_CLASS_NAME}
      >
        {children}
      </Collapsible>
    </div>
  );
}
