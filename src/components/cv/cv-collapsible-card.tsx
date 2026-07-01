import type { ReactNode } from "react";

import { Collapsible } from "@/components/ui/collapsible";

import {
  CV_COLLAPSIBLE_CARD_CLASS_NAME,
  CV_COLLAPSIBLE_CONTENT_CLASS_NAME,
  CV_COLLAPSIBLE_TRIGGER_CLASS_NAME,
} from "./cv-collapsible-classes";
import { CvSectionTitle } from "./cv-section-title";

type CvCollapsibleCardProps = Readonly<{
  title: string;
  defaultOpen?: boolean;
  indicatorPosition?: "left" | "right";
  hoverEffect?: "background" | "text" | "both";
  children: ReactNode;
}>;

export function CvCollapsibleCard({
  title,
  defaultOpen = true,
  indicatorPosition = "left",
  hoverEffect = "text",
  children,
}: CvCollapsibleCardProps) {
  const titleClassName =
    hoverEffect === "text" || hoverEffect === "both"
      ? "transition-colors group-hover:text-text"
      : undefined;

  return (
    <div className={CV_COLLAPSIBLE_CARD_CLASS_NAME}>
      <Collapsible
        header={
          <CvSectionTitle
            title={title}
            className={titleClassName}
          />
        }
        indicatorPosition={indicatorPosition}
        triggerMode="full-row"
        isInitiallyOpen={defaultOpen}
        contentInset="none"
        triggerClassName={CV_COLLAPSIBLE_TRIGGER_CLASS_NAME}
        contentClassName={CV_COLLAPSIBLE_CONTENT_CLASS_NAME}
        hoverEffect={hoverEffect}
      >
        {children}
      </Collapsible>
    </div>
  );
}
