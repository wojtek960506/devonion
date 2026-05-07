import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl"],
  defaultLocale: "en",
  localePrefix: "always",
});

export function isValidLocale(locale: string) {
  return routing.locales.includes(locale as (typeof routing.locales)[number]);
}
