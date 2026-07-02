import Link from "next/link";

import { CONTACT_CARD_CLASS_NAME, type ContactCardProps } from "./shared";
import clsx from "clsx";

type ContactLinkCardProps = ContactCardProps &
  Readonly<{
    href: string;
    external?: boolean;
  }>;

export function ContactLinkCard({
  label,
  value,
  href,
  external,
}: ContactLinkCardProps) {
  if (external) {
    return (
      <a
        href={href}
        className={clsx(CONTACT_CARD_CLASS_NAME, "block hover:bg-bg")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-medium text-text">
          {value}
        </p>
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(CONTACT_CARD_CLASS_NAME, "block hover:bg-bg")}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {label}
      </p>
      <p className="mt-1 break-words text-sm font-medium text-text">
        {value}
      </p>
    </Link>
  );
}
