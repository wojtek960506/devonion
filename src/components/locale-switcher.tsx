"use client";

import { startTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={clsx(
      "flex gap-1 rounded-full border border-zinc-300 bg-white/80 p-1 shadow-sm backdrop-blur",
      "dark:border-zinc-700 dark:bg-zinc-900/80"
    )}>
      <button
        className={`rounded-full px-4 py-2 text-sm font-medium ${
          locale === "en"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
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
            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
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
