import { type ComponentProps, forwardRef } from "react";
import Link from "next/link";

import { getButtonClassName } from "./get-button-class-name";
import type { ButtonVariant } from "./types";

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant, className, children, ...props }, ref) => (
    <Link
      {...props}
      className={getButtonClassName({ variant, className })}
      ref={ref}
    >
      {children}
    </Link>
  ),
);

LinkButton.displayName = "LinkButton";
