import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import clsx from "clsx";
import { AnchorButton, LinkButton } from "@/components/ui/button";

type HomePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <main className="p-5 sm:p-7">
      <section className={clsx(
        "mx-auto w-full max-w-3xl rounded-3xl bg-card-bg p-5 shadow-sm sm:p-7"
      )}>
        <div className="mb-5">
          <h1 className="mb-2 text-xl font-semibold text-text sm:mb-3 sm:text-3xl">
            {t("title")}
          </h1>

          <div className="flow-root">
            <div className={clsx(
              "float-right mb-2 ml-4 w-28 rounded-3xl border border-border bg-bg px-2 py-2 sm:w-56"
            )}>
              <Image
                alt="DevOnion main logo"
                className="block h-auto w-full object-contain dark:hidden"
                height={180}
                src="/brand/DEVONION-LOGO.svg"
                unoptimized
                width={180}
              />
              <Image
                alt="DevOnion main logo"
                className="hidden h-auto w-full object-contain dark:block"
                height={180}
                src="/brand/DEVONION-LOGO-DARK.svg"
                unoptimized
                width={180}
              />
            </div>

            <p className="text-base leading-6 text-text-muted [hyphens:auto] [overflow-wrap:break-word] [text-align:justify] sm:text-xl sm:leading-7">
              {t("description")}
            </p>
          </div>
        </div>

        <p className="mt-3 sm:mt-4 mb-1 sm:mb-2 text-base font-semibold text-text sm:text-lg">
          {t("financePrompt")}
        </p>
        <AnchorButton
          href="https://finance.devonion.com"
          rel="noopener noreferrer"
          target="_blank"
          variant="primary"
          className="font-semibold text-bg"
        >
          {t("financeCta")}
        </AnchorButton>

        <p className="mt-5 mb-1 sm:mb-2 text-base font-semibold text-text sm:text-lg">
          {t("cvPrompt")}
        </p>
        <LinkButton
          href={`/${locale}/cv`}
          variant="outline"
          className="font-semibold"
        >
          {t("cvCta")}
        </LinkButton>
      </section>
    </main>
  );
}
