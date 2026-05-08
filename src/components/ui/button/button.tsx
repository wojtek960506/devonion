import { type ComponentProps, forwardRef } from "react";

import { getButtonClassName } from "./get-button-class-name";
import type { ButtonVariant } from "./types";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={getButtonClassName({ variant, className })}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
