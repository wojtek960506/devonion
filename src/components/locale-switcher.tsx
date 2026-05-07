"use client";

import { startTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="mb-6 flex gap-3">
      <button
        className={`rounded-full px-4 py-2 text-sm font-medium ${
          locale === "en"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        }`}
        onClick={() => {
          startTransition(() => {
            router.replace(pathname, { locale: "en", scroll: false });
          });
        }}
        type="button"
      >
        English
      </button>
      <button
        className={`rounded-full px-4 py-2 text-sm font-medium ${
          locale === "pl"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        }`}
        onClick={() => {
          startTransition(() => {
            router.replace(pathname, { locale: "pl", scroll: false });
          });
        }}
        type="button"
      >
        Polski
      </button>
    </div>
  );
}
