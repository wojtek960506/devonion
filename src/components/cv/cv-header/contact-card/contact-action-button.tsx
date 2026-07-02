import clsx from "clsx";
import { Check, Copy } from "lucide-react";

type ContactActionButtonProps = Readonly<{
  isCopied?: boolean;
  ariaLabel: string;
  onClick: () => void;
}>;

export function ContactActionButton({
  isCopied,
  ariaLabel,
  onClick,
}: ContactActionButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "group absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-lg",
        "border border-border text-text-muted transition-colors hover:bg-bg hover:text-text",
        "cursor-pointer"
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {isCopied ? (
        <Check
          className="size-4 transition-transform group-hover:scale-110"
          aria-hidden="true"
        />
      ) : (
        <Copy
          className="size-4 transition-transform group-hover:scale-110"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
