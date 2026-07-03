import type { ReactNode } from "react";

import { cn } from "@/components/utils/cn";

type CvSectionTitleProps = Readonly<{
  title: ReactNode;
  size?: "sm" | "xs" | "base";
  as?: "h2" | "span";
  className?: string;
}>;

const SIZE_CLASS_NAMES = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
} as const;

const BASE_CLASS_NAME =
  "font-semibold uppercase tracking-[0.2em] text-text-muted";

export function CvSectionTitle({
  title,
  size = "base",
  as: Component = "span",
  className,
}: CvSectionTitleProps) {
  return (
    <Component className={cn(BASE_CLASS_NAME, SIZE_CLASS_NAMES[size], className)}>
      {title}
    </Component>
  );
}
