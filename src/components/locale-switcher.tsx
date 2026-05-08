"use client";

import { startTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";
import Flag from "react-flagkit";
import { Dropdown } from "./ui/dropdown/dropdown";
import { Button } from "./ui/button";

const SUPPORTED_LANGUAGES = {
  en: {
    flag: "GB",
    label: "English",
    shortLabel: "EN",
  },
  pl: {
    flag: "PL",
    label: "Polski",
    shortLabel: "PL",
  },
} as const;

// export const ICON_CLASS_NAME = 'w-7 h-7 sm:w-8 sm:h-8'; // scale-140
export const ICON_CLASS_NAME = 'w-10 h-10 sm:w-12 sm:h-12';

const RoundedFlag = ({ isoCode }: { isoCode: string }) => (
  <span
    className={clsx(
      'inline-block rounded-full overflow-hidden shrink-0 border border-fg border-2',
      ICON_CLASS_NAME,
    )}
  >
    <Flag country={isoCode} className="w-full h-full scale-140 origin-center" />
  </span>
);

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const activeLanguage =
    SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES] ??
    SUPPORTED_LANGUAGES.en;

  function switchLocale(nextLocale: keyof typeof SUPPORTED_LANGUAGES) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  }

  return (
    <Dropdown
      trigger={
        <Button variant="ghost">
          <RoundedFlag isoCode={activeLanguage.flag} />
        </Button>
      }
      items={Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => ({
        label: language.label,
        icon: <RoundedFlag isoCode={language.flag} />,
        onSelect: () => switchLocale(code as keyof typeof SUPPORTED_LANGUAGES),
        className: "text-lg sm:text-xl font-semibold"
      }))}
    />
  )
}
