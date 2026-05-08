"use client";

import { startTransition, useEffect, useId, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";

const SUPPORTED_LANGUAGES = {
  en: {
    flag: "US",
    label: "English",
    shortLabel: "EN",
  },
  pl: {
    flag: "PL",
    label: "Polski",
    shortLabel: "PL",
  },
} as const;

function FlagBadge({ countryCode }: { countryCode: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-fg bg-bg text-[10px] font-bold text-fg"
    >
      {countryCode}
    </span>
  );
}

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const activeLanguage =
    SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES] ??
    SUPPORTED_LANGUAGES.en;

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function switchLocale(nextLocale: keyof typeof SUPPORTED_LANGUAGES) {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={clsx(
          "inline-flex items-center gap-3 rounded-full border border-border bg-card-bg px-3 py-2",
          "text-sm font-medium text-text shadow-sm backdrop-blur transition hover:bg-surface"
        )}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <FlagBadge countryCode={activeLanguage.flag} />
        <span>{activeLanguage.shortLabel}</span>
        <span aria-hidden="true" className="text-xs text-text-muted">
          ▾
        </span>
      </button>

      {isOpen ? (
        <div
          className={clsx(
            "absolute right-0 top-[calc(100%+0.5rem)] z-20 min-w-40 rounded-2xl border border-border",
            "bg-card-bg p-1.5 shadow-lg"
          )}
          id={menuId}
          role="menu"
        >
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => {
            const isActive = code === locale;

            return (
              <button
                className={clsx(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
                  isActive
                    ? "bg-fg text-bg"
                    : "text-text hover:bg-surface"
                )}
                key={code}
                onClick={() =>
                  switchLocale(code as keyof typeof SUPPORTED_LANGUAGES)
                }
                role="menuitem"
                type="button"
              >
                <FlagBadge countryCode={language.flag} />
                <span className="flex-1">{language.label}</span>
                {isActive ? <span aria-hidden="true">•</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
