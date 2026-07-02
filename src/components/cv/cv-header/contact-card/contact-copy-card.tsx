import { ContactActionButton } from "./contact-action-button";
import { CONTACT_CARD_CLASS_NAME, type ContactCardProps } from "./shared";

type ContactCopyCardProps = ContactCardProps &
  Readonly<{
    copyText: string;
    isCopied: boolean;
    onCopy: (copyText: string) => void;
  }>;

export function ContactCopyCard({
  label,
  value,
  copyText,
  isCopied,
  onCopy,
}: ContactCopyCardProps) {
  return (
    <div className={CONTACT_CARD_CLASS_NAME}>
      <div className="pr-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-medium text-text">
          {value}
        </p>
      </div>
      <ContactActionButton
        isCopied={isCopied}
        ariaLabel={isCopied ? `${label} copied` : `Copy ${label}`}
        onClick={() => onCopy(copyText)}
      />
    </div>
  );
}
