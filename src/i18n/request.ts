import { getRequestConfig } from "next-intl/server";
import { isValidLocale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale =
    requestedLocale && isValidLocale(requestedLocale)
      ? requestedLocale
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
