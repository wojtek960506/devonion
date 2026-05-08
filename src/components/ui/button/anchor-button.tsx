import { type ComponentProps, forwardRef } from "react";

import { getButtonClassName } from "./get-button-class-name";
import type { ButtonVariant } from "./types";

type AnchorButtonProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
};

export const AnchorButton = forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ variant, className, children, ...props }, ref) => (
    <a
      {...props}
      className={getButtonClassName({ variant, className })}
      ref={ref}
    >
      {children}
    </a>
  ),
);

AnchorButton.displayName = "AnchorButton";
