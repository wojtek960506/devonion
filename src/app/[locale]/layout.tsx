import { NextIntlClientProvider } from "next-intl";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeButton } from "@/components/theme/theme-button";
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
      <div className="min-h-screen min-w-[360px] bg-bg">
        <header className={clsx(
          "border-b border-border bg-bg/90 px-5 py-3 backdrop-blur sm:px-7"
        )}>
          <div className={clsx(
            "flex w-full gap-5 flex-row items-center justify-between"
          )}>
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3"
              aria-label="DevOnion home"
            >
              <span className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14">
                <Image
                  alt="DevOnion brand icon"
                  className="object-contain dark:hidden"
                  fill
                  src="/brand/DEVONION-LOGO.svg"
                  sizes="56px"
                />
                <Image
                  alt="DevOnion brand icon"
                  className="hidden object-contain dark:block"
                  fill
                  src="/brand/DEVONION-LOGO-DARK.svg"
                  sizes="56px"
                />
              </span>
              <span className="text-5xl font-semibold tracking-tight text-bt-primary transition-colors hover:text-bt-primary-hover sm:text-6xl">
                DevOnion
              </span>
            </Link>
            <div className="flex ">
              <LocaleSwitcher />
              <ThemeButton />
            </div>
          </div>
        </header>

        {children}
      </div>
    </NextIntlClientProvider>
  );
}
