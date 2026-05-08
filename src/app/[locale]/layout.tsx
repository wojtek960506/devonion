import { NextIntlClientProvider } from "next-intl";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeSwitcherPreview } from "@/components/theme-switcher-preview";
import { isValidLocale, routing } from "@/i18n/routing";
import clsx from "clsx";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // when language is not supported in our app, we just redirect to default language
  if (!isValidLocale(locale)) notFound();

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <div className="min-h-screen bg-bg">
        <header className={clsx(
          "border-b border-border bg-bg/90 px-4 py-3 backdrop-blur sm:px-8"
        )}>
          <div className={clsx(
            "flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
          )}>
            <div className="flex items-center gap-4">
              <Image
                alt="DevOnion text logo"
                className="h-10 w-auto sm:h-14"
                height={36}
                src="/brand/DEVONION-LOGO.svg"
                style={{ width: "auto" }}
                width={36}
              />
              <Image
                alt="DevOnion text logo"
                className="h-10 w-auto sm:h-14"
                height={36}
                src="/brand/DEVONION-TEXT.svg"
                style={{ width: "auto" }}
                width={216}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <LocaleSwitcher />
              <ThemeSwitcherPreview />
            </div>
          </div>
        </header>

        {children}
      </div>
    </NextIntlClientProvider>
  );
}
